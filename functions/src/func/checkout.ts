import { CollectionReference, FieldPath } from "firebase-admin/firestore";
import * as functions from "firebase-functions";
import Stripe from "stripe";
import config from "../config";
import { findCheapestPrice } from "../helper/helper";

import { db } from "../setup";
import { Product, User } from "../type";

/**
 * when being called, create a PaymentIntent and send the client secret back to caller
 * the function does 2 things:
 * - create PaymentIntent and return PaymentIntent secret back
 * - assign the field "temp_order" with the order
 * ****
 *
 * @param {cart: Array<{
 *                  product_id: string;
 *                  quantity: string
 *               }>,
 *         shipping_address: {
 *                  campus: string;
 *                  building: string;
 *                  floor_apartment: string;
 *               },
 *         rusher_tip: number,
 *         message: string,
 *         replacement_option: number
 *      }
 */

export const checkout = functions
  .runWith({
    // allows the function to use environment secret STRIPE_API_KEY
    secrets: ["STRIPE_API_KEY"],
    // no more than 20 instances of the function should be running at once.
    // More on https://cloud.google.com/functions/docs/configuring/max-instances
    maxInstances: 20,
  })
  .https.onCall(async (data, context) => {
    // Initialize stripe
    const apiVersion = "2020-08-27";
    const stripe = new Stripe(config.stripeSecretKey, {
      apiVersion,
      appInfo: {
        name: "Dormit",
        version: "1.0",
      },
    });

    /**
     * this is the shipping cost
     * you can change the cost in environment variable
     */
    const SHIPPING_FEE = parseInt(config.shippingFee);

    /**
     * -------------------------------------------------------------------------------------------------------------------
     * error catching for arguments
     * -------------------------------------------------------------------------------------------------------------------
     */
    if (!context.auth) {
      throw new functions.https.HttpsError(
        "permission-denied",
        `The user must be authenticated to perform these task`
      );
    }

    const cart = data.cart as User["cart"];
    const shippingAddress = data.shipping_address as User["shipping_address"];
    const rusherTip = parseInt(data.rusher_tip ? data.rusher_tip : 0);
    const message = data.message ? data.message : "";
    const replacementOption = data.replacement_option
      ? data.replacement_option
      : 0;

    if (!cart) {
      throw new functions.https.HttpsError(
        "invalid-argument",
        `The function must be called with one argument "cart" containing products' data the user want to purchase`
      );
    }
    if (cart.length === 0) {
      throw new functions.https.HttpsError(
        "invalid-argument",
        `The "cart" argument must be a non-empty array`
      );
    }
    if (!shippingAddress) {
      throw new functions.https.HttpsError(
        "invalid-argument",
        `The function must be called with one argument "shipping_address" containing shipping address`
      );
    }
    if (
      !shippingAddress.campus ||
      !shippingAddress.building ||
      !shippingAddress.floor_apartment
    ) {
      throw new functions.https.HttpsError(
        "invalid-argument",
        `The "shipping_address" argument must be an object with fields campus, building and floor_apartment`
      );
    }

    try {
      /**
       * -------------------------------------------------------------------------------------------------------------------
       * fetch the data of only products that are in cart
       * -------------------------------------------------------------------------------------------------------------------
       */
      const productsRef = db.collection(
        "products"
      ) as CollectionReference<Product>;

      const productsDetail: Array<Product & { id: string }> = [];
      const firestoreProductsData = await productsRef
        .where(
          FieldPath.documentId(),
          "in",
          cart.map((item) => item.product_id)
        )
        .get();
      firestoreProductsData.forEach(async (snapshot) => {
        productsDetail.push({ ...snapshot.data(), id: snapshot.id });
      });

      /**
       * fetch user's data
       */

      const usersRef = db.collection("users") as CollectionReference<User>;
      const userDetail = (
        await usersRef.doc(context.auth.uid).get()
      ).data() as User;

      if (!userDetail) {
        functions.logger.error(
          `User of uid ${context.auth.uid} doesn't exist in database`
        );
        throw new functions.https.HttpsError(
          "internal",
          "user doesn't exist in database"
        );
      }

      /**
       * -------------------------------------------------------------------------------------------------------------------
       * calculate the total
       * -------------------------------------------------------------------------------------------------------------------
       */

      let total = 0;

      cart.forEach(({ product_id, quantity }) => {
        const product = productsDetail.find((elem) => elem.id === product_id);
        if (!product) {
          throw new functions.https.HttpsError(
            "internal",
            `Somehow a product in cart doesn't exist in database`
          );
        }
        /**
         * find the price that is the lowest out of array of prices
         */
        const cheapestPrice = findCheapestPrice(product.prices);
        const taxRate = parseFloat(product.metadata.tax);

        /**
         * increment the total by the item cost times tax
         */
        total += cheapestPrice.unit_amount * quantity * (1 + taxRate / 100);
      });

      // increase total by the shipping cost and rusher tip
      total += SHIPPING_FEE + rusherTip;
      // round the number up because the argument for stripe must be a positive integer
      total = Math.ceil(total);

      /**
       * -------------------------------------------------------------------------------------------------------------------
       * create a new PaymentIntent with this total amount
       * -------------------------------------------------------------------------------------------------------------------
       */
      const paymentIntent = await stripe.paymentIntents.create({
        currency: "USD",
        amount: total,
        automatic_payment_methods: { enabled: true },
        setup_future_usage: "off_session",
        customer: userDetail.stripeId,
      });

      /**
       * -------------------------------------------------------------------------------------------------------------------
       * update the temp_order field
       * -------------------------------------------------------------------------------------------------------------------
       */
      const EPOCH_CURRENT_TIME = new Date().getTime().toString();

      const tempOrder: User["temp_order"] = {
        payment_id: paymentIntent.id,

        customer_id: context.auth.uid,
        customer_name: userDetail.name,
        customer_img: userDetail.profile_img,
        customer_contact: {
          phone: userDetail.phone,
          text: userDetail.phone,
        },
        replacement_option: replacementOption,

        order_time: EPOCH_CURRENT_TIME,
        until_delivered: null,
        process_stage: -1,

        shipping_address: shippingAddress,
        message,
        rusher: null,

        amount_total: total,
        shipping_fee: SHIPPING_FEE,
        rusher_tip: rusherTip,
        items: cart.map(({ product_id, quantity }) => {
          const product = productsDetail.find((elem) => elem.id === product_id);
          if (!product) {
            functions.logger.error(
              `the product with id ${product_id} doesn't exist in database`
            );
            throw new functions.https.HttpsError(
              "internal",
              `Somehow a product in cart doesn't exist in database`
            );
          }
          return {
            product_id,
            product_name: product.name,
            product_description: product.description,
            unit_cost: findCheapestPrice(product.prices).unit_amount,
            quantity,
            tax: product.metadata.tax,
          };
        }),
      };

      await usersRef.doc(context.auth.uid).set(
        {
          temp_order: tempOrder,
        },
        { merge: true }
      );

      /**
       * -------------------------------------------------------------------------------------------------------------------
       * Send publishable key and PaymentIntent details to client
       * -------------------------------------------------------------------------------------------------------------------
       */
      return {
        isSuccess: true,
        clientSecret: paymentIntent.client_secret,
      };
    } catch (error) {
      functions.logger.error(error);
      functions.logger.error(
        `Error: cannot create checkout for user with uid ${context.auth.uid}`
      );
      return {
        isSuccess: false,
        message: "something went wrong",
      };
    }
  });
