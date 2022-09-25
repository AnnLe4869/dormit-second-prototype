import * as functions from "firebase-functions";
import Typesense from "typesense";
import { Product } from "../../type";

export const onProductCreateTs = functions.firestore
  .document("/products/{productId}")
  .onCreate((snapshot, context) => {
    const TYPESENSE_HOST =
      process.env.TYPESENSE_HOST || "search.dormitdelivery.com";
    const TYPESENSE_API_KEY = process.env.TYPESENSE_API_KEY || "wrong api key";
    const client = new Typesense.Client({
      nodes: [
        {
          host: TYPESENSE_HOST,
          port: 443,
          protocol: "https",
        },
      ],
      apiKey: TYPESENSE_API_KEY,
      connectionTimeoutSeconds: 2 * 60,
    });
    // Grab the document id as id value.
    const id = context.params.productId as string;
    const product = snapshot.data() as Product;
    functions.logger.debug(`Creating Typesense document with id ${id}`);
    return client
      .collections("products")
      .documents()
      .create({
        id,
        ...product,
      });
  });

export const onProductUpdateTs = functions.firestore
  .document("/products/{productId}")
  .onUpdate((snapshot, context) => {
    const TYPESENSE_HOST =
      process.env.TYPESENSE_HOST || "search.dormitdelivery.com";
    const TYPESENSE_API_KEY = process.env.TYPESENSE_API_KEY || "wrong api key";
    const client = new Typesense.Client({
      nodes: [
        {
          host: TYPESENSE_HOST,
          port: 443,
          protocol: "https",
        },
      ],
      apiKey: TYPESENSE_API_KEY,
      connectionTimeoutSeconds: 2 * 60,
    });

    // Grab the document id as id value.
    const id = context.params.productId as string;
    const product = snapshot.after.data() as Product;
    functions.logger.debug(`Updating Typesense document with id ${id}`);

    return client
      .collections("products")
      .documents(id)
      .update({
        id,
        ...product,
      });
  });

export const onProductDeleteTs = functions.firestore
  .document("/products/{productId}")
  .onDelete((_, context) => {
    const TYPESENSE_HOST =
      process.env.TYPESENSE_HOST || "search.dormitdelivery.com";
    const TYPESENSE_API_KEY = process.env.TYPESENSE_API_KEY || "wrong api key";
    const client = new Typesense.Client({
      nodes: [
        {
          host: TYPESENSE_HOST,
          port: 443,
          protocol: "https",
        },
      ],
      apiKey: TYPESENSE_API_KEY,
      connectionTimeoutSeconds: 2 * 60,
    });

    // Grab the document id as id value.
    const id = context.params.productId as string;
    functions.logger.debug(`Deleting Typesense document with id ${id}`);

    return client.collections("products").documents(id).delete();
  });
