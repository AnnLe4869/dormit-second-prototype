/**
 * this is a copy-paste from FIRESTORE_STRUCT with some minor change
 * - the type here represent a single document of the collection
 * - the naming changes: because this represent a single document, the name change to singular form. In FIRESTORE_STRUCT the name in plural form
 * - we export the type
 * - we remove all id field from collection
 *
 * !IMPORTANT: the field detail here and FIRESTORE_STRUCT must SYNC with each other
 */

/**
 * helper type function
 * retrieve element type information from array type
 * See https://stackoverflow.com/questions/41253310/typescript-retrieve-element-type-information-from-array-type
 */
export type ArrayElement<ArrayType extends readonly unknown[]> =
  ArrayType extends readonly (infer ElementType)[] ? ElementType : never;

/**
 * ---------------------------------------------------------------------------------------------------------------------------------------
 * the "products" collection should be treated as read-only
 * all the fields in the collection are updated from Stripe automatically (via webhook)
 * means that the admin can change value on Stripe (or you write code to make change on Stripe)
 * and the products collection will update accordingly
 * ****
 * all the fields EXCEPT for subcollection "prices" are from Stripe Product object
 * all the fields below are not all info stored in firestore, but these are guaranteed to be presented when you fetch data
 * complete fields, see https://stripe.com/docs/api/products/object
 * ---------------------------------------------------------------------------------------------------------------------------------------
 */
export type Product = {
  name: string;
  description: string;
  /**
   * one products may have multiple images
   * but for our app, for now, it has only one image
   */
  images: Array<string>;
  metadata: {
    quantity: string;
    category: string;
    tax: string;
  };

  prices: Array<{
    price_id: string; // must start with "price_" (e.g "price_1LV5VjBFL4Le4")
    product_id: string; // is the id of the product this linked to (e.g "prod_nfi3ndfd5549")
    currency: string;
    unit_amount: number;
  }>;

  rank: string;

  /**
   * any additional properties
   */
  [propName: string]: unknown;
};

export type User = {
  phone: string;
  linked_email: string;
  profile_img: string;
  stripeId: string;

  name: string;
  /**
   * indicate what is the role of the user
   * should be treated as READ_ONLY
   * user that is/was a rusher will have additional fields named "taken_orders"
   * that list order that the user has been assigned for delivery
   * the role admin can be ignored for now
   */
  role: "customer" | "rusher" | "admin";
  shipping_address: {
    campus: string;
    building: string;
    floor_apartment: string;
  };
  /**
   * cart is an array of object that represent which item and its quantity in user's cart
   */
  cart: Array<{
    product_id: string;
    quantity: number;
  }>;

  payments: Array<{
    amount_received: number;
    customer: string;
    status:
      | "succeeded"
      | "canceled"
      | "processing"
      | "requires_payment_method"
      | "requires_confirmation"
      | "requires_action"
      | "requires_capture";
  }>;

  temp_order: Processing_order | null;

  /**
   * "current_orders" is a subcollection of orders that are in process
   * the user is waiting for the order to be delivered
   * the detail on what each field means can be seen in collection "processing_orders"
   * ****
   * the reason for this to be an array of complete objects instead of just array of order's id
   * is because we want to listen to real change in order_status of "processing_orders"
   * while keeping the "processing_orders" data secret from normal user
   */
  current_orders: Array<Processing_order>;

  /**
   * "past_orders" is an array of orders id that are completed
   * this is not a collection but an array
   */
  past_orders: Array<string>;
  /**
   * "taken_orders" is an ARRAY of orders that are taken by this user for delivery
   * only existed for user that is CURRENTLY a rusher
   * it consists of order's id that is currently being processed
   * rusher can use this id to find which orders are assigned to them in collection "processing_orders"
   */
  taken_orders: Array<string>;
  /**
   * "finished_orders" is an ARRAY of orders that are completed by this user
   * existed for user that is or was a rusher
   * user can use this id to find which orders are completed by him
   */
  finished_orders: Array<string>;

  /**
   * any additional properties
   */
  [propName: string]: unknown;
};

/**
 * ---------------------------------------------------------------------------------------------------------------------------------------
 * "processing_order" is collection of orders that are in processed
 * the order only in processed only after user has successfully paid the cost of the order
 * ****
 * only user that has their id match the customer_id of the document OR the user is a rusher
 * do they has access to a document
 * ---------------------------------------------------------------------------------------------------------------------------------------
 */

export type Processing_order = {
  payment_id: string;
  /**
   * the customer's info this order belong to
   */
  customer_id: string;
  customer_name: string;
  customer_img: string;
  customer_contact: {
    phone: string;
    /**
     * for now, phone and text number will be the same,
     * but this may change in the future
     */
    text: string;
  };
  replacement_option: 0 | 1 | 2 | 3;

  /**
   * time that you successfully complete the transaction,
   * counted as milliseconds since EPOCH time
   */
  order_time: string;
  /**
   * time until the order is delivered,
   * counted as milliseconds since EPOCH time
   * if the order is not yet processed, value is null
   */
  until_delivered: string | null;
  /**
   * a number indicates which processing stage the order is in
   * *** -1: order hasn't been placed (only when used on temp_order)
   * *** 0: order placed
   * *** 1: order picked up
   * *** 2: order is on the way
   * *** 3: order is delivered
   * we use number as indicator to avoid confusion and mistakes that easily happen with text
   * the amount of number indicator can be changed as needed
   */
  process_stage: -1 | 0 | 1 | 2 | 3;

  /**
   * the shipping address
   */
  shipping_address: {
    campus: string;
    building: string;
    floor_apartment: string;
  };
  /**
   * the message the customer leave for rusher
   * like instruction for the order
   */
  message: string;
  /**
   * information about rusher - the one who deliver the order to customer
   * we want minimal info about rusher here for user to contact and identify them
   * when the rusher has yet to be assigned, the value will be null
   */
  rusher: {
    /**
     * user_id is the string that can be used to traced a user's detail information
     */
    rusher_id: string;
    rusher_name: string;
    /**
     * rusher should have their image available so customer can recognize them
     */
    rusher_img: string;
    rusher_contact: {
      phone: string;
      /**
       * user may opt to text or call the rusher
       * for now, phone and text number will be the same,
       * but this may change in the future
       */
      text: string | null;
    };
  } | null;

  /**
   * amount_total is the total cost of the order
   * including items' cost, shipping fee, tax, tip, etc.
   * amount_total = amount_subtotal + tax + shipping_fee + rusher_tip
   * amount_subtotal and tax depends on the items type
   * and we can calculate
   * amount_subtotal + tax = sum of items cost
   *                       = sum of (unit_cost x quantity + tax)
   */
  amount_total: number;
  shipping_fee: number;
  rusher_tip: number;

  /**
   * "items" is an ARRAY of items that are in the order
   * total cost per item type = unit_cost x quantity + tax
   */
  items: Array<{
    /**
     * product_id is the id of the product that can be used to traced
     * the product detail from the firestore or Stripe
     */
    product_id: string;
    /**
     * unit_cost needed to be recorded because the price may change in the future
     */
    unit_cost: number;
    /**
     * tax can be a flat amount or percentage
     * probably percentage though
     */
    tax: string;
    quantity: number;

    product_name: string;
    product_description: string;
  }>;

  /**
   * any additional properties
   */
  [propName: string]: unknown;
};

/**
 * ---------------------------------------------------------------------------------------------------------------------------------------
 * "past_orders" is a collection of orders that are completed
 * by completed, it means the order either successfully delivered, or be refunded, or canceled, etc.
 * for now, per company requirement, orders cannot be cancelled or refund
 * the structure for this is pretty much the same as "current_orders",
 * with only the field until_delivered to be replaced by delivery_time and additional field final_status
 * ****
 * we remove some details from the order, especially user's info that can be used to identify rusher or customer
 * ****
 * only user that has their id match the customer_id or rusher_id can view the document
 * ---------------------------------------------------------------------------------------------------------------------------------------
 */

export type Completed_order = {
  /**
   * we shall use PaymentIntent id as id for order for convenience
   */
  payment_id: string;
  customer_id: string;

  order_time: string;
  /**
   * delivery_time and final_status value depends on each other
   * ****
   * final_status is a number that indicates what is the final status of the order
   * and each number is assigned a value
   * e.g:
   * 0 means successfully delivered
   * 1 means order canceled
   * 2 means order refunded
   * the assignment is not yet finalized and will subjected to change
   * for now, assume order will always successfully delivered
   * ****
   * if order is successfully delivered, delivery_time will show the time of delivery
   * if not, the value of it will be null
   */
  delivery_time: string;
  final_status: number;
  rusher: {
    rusher_id: string;
  };
  amount_total: number;
  shipping_fee: number;
  rusher_tip: number;
  items: Array<{
    product_id: string;
    unit_cost: number;
    tax: string;
    quantity: number;
    product_name: string;
    product_description: string;
  }>;

  /**
   * any additional properties
   */
  [propName: string]: unknown;
};

/**
 * ---------------------------------------------------------------------------------------------------------------------------------------
 * "emails" is collection that is used for sending email
 * we use Trigger Email extension
 * ---------------------------------------------------------------------------------------------------------------------------------------
 */

export type Email = {
  /**
   * target emails that you want to send the email to
   */
  to: string | string[];
  /**
   * set up the content of the email
   * see the available fields in https://nodemailer.com/message/
   * make sure to do some tests
   */
  message: {
    subject: string;
    text: string;
    html: string;
  };
};
