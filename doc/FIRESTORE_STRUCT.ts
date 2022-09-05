/**
 * FIRESTORE_STRUCT v2.2
 * the below are structure of the Firestore database
 * each type represent a collection
 * a collection name should be in plural form (e.g buses or products) and NOT singular form (e.g bus or product)
 * ****
 * note: the id field in each type is the document id
 * it is there to indicate how the id should look like
 * in the actual firebase data, when you call get() you will not get the id field in the result
 * (of course, you can get the id in other way, just that the id field doesn't exist in the get() result)
 *
 * for indication, if you see Array<> with property "id" in it, that is collection/subcollection
 * ****
 * For how read is counted, see
 * https://stackoverflow.com/questions/64140316/firestore-sub-collection-pricing
 * https://stackoverflow.com/questions/50887442/cloud-firestore-how-is-read-calculated
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
 * all the fields in the collection are created and updated from Stripe automatically (via webhook)
 * means that the admin can change value on Stripe (or you write code to make change on Stripe)
 * and the products collection will update accordingly
 * ****
 * all the fields EXCEPT for subcollection "prices" are from Stripe Product object
 * all the fields below are not all info stored in firestore, but these are guaranteed to be presented when you fetch data
 * complete fields, see https://stripe.com/docs/api/products/object
 *
 * These special document below, semantically speaking, should be in "configuration" collection.
 * However, doing so will require some adjustment to the current codebase and we don't have time at the moment
 *
 * ****
 * ****
 * ****
 * **SPECIAL DOCUMENT IN COLLECTION**:
 * there is a document in the collection "products" with id "categories"
 * this document has different structure than the structure listed below
 * it doesn't store normal product's information but store information about categories
 * in specific, how many categories we currently have and the detail on each category
 * this document look like this
 *
 * {
 *    id: "categories",
 *    categories: Array<{
 *      category_name: string;
 *      category_icon: string;
 *      category_style: {
 *        color: string;
 *        background_color: string;
 *      }
 *    }>
 * }
 *
 * category_icon is the content of the svg file that represent the icon.
 * What we did is we just put the entire svg file content into this field.
 * The requirement for the svg file is that it must be colored
 *
 * category_style is for styling the button color associated with the category (see the Figma design for more detail)
 * ****
 * ****
 * ****
 * **SPECIAL DOCUMENT IN COLLECTION**:
 * there is a document with id "shipping_fee" that specify the shipping fee cost. The document look like this
 *
 * {
 *  id: "shipping_fee",
 *  price: string
 * }
 *
 * the price is a string that count the shipping fee in cent (so $1.95 will be stored as "195")
 *
 * this price must ALWAYS IN SYNC with the price in the cloud function config file SHIPPING_FEE
 * ---------------------------------------------------------------------------------------------------------------------------------------
 */
type products = Array<{
  /**
   * the id for each product must start with "prod_" and followed by a string (e.g "prod_nfi3ndfd5549")
   * this is the format Stripe use https://stripe.com/docs/api/products/object
   */
  id: string;
  name: string;
  description: string;
  /**
   * one products may have multiple images
   * but for our app, for now, it has only one image
   */
  images: Array<string>;
  metadata: {
    /**
     * quantity is how many items left in inventory
     */
    quantity: string;
    category: string;
    /**
     * tax is the string that represent the tax rate
     * write the tax rate as-is
     * for example:
     * 1.25%  ===> 1.25
     * 0.5%   ===> 0.50
     */
    tax: string;
    /**
     * a special status assigned to each product
     * not sure how this status is calculated
     */
    isSpecial: "true" | "false";
  };

  /**
   * "prices" is an ARRAY (not subcollection)
   * whose element is price object https://stripe.com/docs/api/prices
   * one product can have multiple prices
   * ****
   * the reason for multiple prices is because a product can have its "On Sale" session where its price is lower than usual
   * we can detect whether an item is on sale if it has two prices documents and the one with lower unit_amount is the sale prices
   * no products shall have more than TWO(2) prices
   */
  prices: Array<{
    price_id: string; // must start with "price_" (e.g "price_1LV5VjBFL4Le4")
    product_id: string; // the id of the product this linked to (e.g "prod_nfi3ndfd5549")
    currency: string;
    /**
     * unit amount counted in smallest unit
     * so $5.12 will be 512
     */
    unit_amount: number;
  }>;
  /**
   * the rank is the number that show how "hot" the item is
   * this can be used to determine which items to show to the customers
   * the higher the number, the more likely the item will be show on first data fetch
   * rank is sorted via lexical order so 1 < 11 < 2
   * ****
   * when we start optimize the page, know which items to fetch and
   * which can be fetched later can make big difference in latency and number of read
   **** can be ignored for now
   */
  rank: string;
}>;

/**
 * ---------------------------------------------------------------------------------------------------------------------------------------
 * the "users" collection contains info about all users
 * ****
 * notice that some fields are subcollection while some are array
 * array lower the number of reads, but will always be presented when the document is fetched
 * (means the array data will always be fetched when document is fetched)
 * if the array is big and each item is big, the request's size can balloon out of control
 *
 * subcollection increases the number of read, but we can control when to fetch the data of the subcollection
 * (mean we don't have to fetch the data of subcollection when we fetch document data)
 * ideal for situation when we have large number of items and each item is big
 * ---------------------------------------------------------------------------------------------------------------------------------------
 */
type users = Array<{
  /**
   * the id is assigned by Firestore, not Stripe
   */
  id: string;
  /**
   * phone is the phone number user uses to register
   * all users must have phone number
   * this phone number is stored to Firestore when user use their phone to register
   */
  phone: string;
  /**
   * this is the email user provides during registration process
   * this doesn't need to be a "legitimate" email, means we don't check whether user owns this email or not
   * in short, we only "encourage" user to enter their email and not a dummy email
   * the email will be used to authenticate in case user forget their phone
   */
  linked_email: string;
  /**
   * address to the profile image
   * for now, we will use svg string that uniquely generated for the user
   * reason is implementation and security: using a link to image can allow abuse of such link,
   * and to prevent abuse require setting up some measures, which I currently don't know how to do
   */
  profile_img: string;
  /**
   * we will create a Stripe Customer whenever a new user is created in Firestore
   * this stripeId is the Customer Stripe ID that can be used to retrieve user's stripe info
   * this stripeId should start with "cus_fm5aoc5m3" (e.g "cus_25cfd64r")
   */
  stripeId: string;
  /**
   * created during registration process
   * not very important in term of website function, but convenient for rusher and customer to properly communicate
   */
  name: string;
  /**
   * indicate what is the role of the user
   * should be treated as READ_ONLY
   * user that is/was a rusher will have additional fields named "taken_orders"
   * that list order that the user has been assigned for delivery
   * the role admin can be ignored for now
   */
  role: "customer" | "rusher" | "admin";
  /**
   * address customer want the order to ship to
   */
  shipping_address: {
    campus: string;
    building: string;
    floor_apartment: string;
  };
  /**
   * cart is an ARRAY of object that represent which item and its quantity in user's cart
   */
  cart: Array<{
    product_id: string;
    quantity: number;
  }>;

  /**
   * "payments" is a SUBCOLLECTION that record the PaymentIntent that are created
   * PaymentIntent is an object that handle payment and collect money
   * see more in https://stripe.com/docs/payments/quickstart and https://stripe.com/docs/api/payment_intents/object
   * ****
   * when user go to checkout page, a PaymentIntent is created
   * and only when the user make payment successfully then the money is sent to out bank
   * status field will update to reflect whether the transaction succeed or not (the status update is handled via webhook)
   * ****
   * this subcollection is intended for backend usage only and shouldn't be displayed for customer
   */
  payments: Array<{
    id: string;
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

  /**
   * this is the placeholder for an order
   * when user click on the checkout button and in the process of enter their payment info
   * we create this temporary order
   * when the payment succeed, this temp order will be pushed to current_orders and temp_order will be reset to null
   * we should only have one order or less that is in temp_order at any time
   */
  temp_order: Omit<ArrayElement<processing_orders>, "id"> | null;

  /**
   * "current_orders" is a SUBCOLLECTION of orders that are in process
   * the user is waiting for the order to be delivered
   * the detail on what each field means can be seen in collection "processing_orders"
   * ****
   * the reason for this to be a collection of complete objects instead of just array of order's id
   * is because we want to listen to real change in order_status of "processing_orders"
   * while keeping the "processing_orders" data secret from normal user
   */
  current_orders: Array<Omit<ArrayElement<processing_orders>, "id">>;

  /**
   * "past_orders" is an ARRAY of orders id that are completed
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
}>;

/**
 * ---------------------------------------------------------------------------------------------------------------------------------------
 * "processing_orders" is collection of orders that are in processed
 * the order only in processed only after user has successfully paid the cost of the order
 * ****
 * only user that has their id match the customer_id of the document OR the user is a rusher
 * do they has access to a document
 * ---------------------------------------------------------------------------------------------------------------------------------------
 */

type processing_orders = Array<{
  /**
   * we shall use PaymentIntent id as id for order for convenience
   * this mean we have the PaymentIntent id available for us
   * this id corresponds to the PaymentIntent that complete the transaction
   */
  id: string;
  /**
   * payment_id is the same as id
   * it's here to make code a bit simpler and using the type easier
   * one more property won't make difference in storage size
   * if really need to cut down in size, remove this property payment_id
   */
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

  /**
   * each value represent an option
   * ***
   * 0: call customer before replacing item(s)
   * 1: text customer before replacing item(s)
   * 2: don't need to inform customer before replacing item(s)
   * 3: don't replacing item(s)t and refund the cost of the item(s)
   */
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
    /**
     * the reason we have some detail about product here
     * instead of go to "products" collection and fetch info from there
     * is to save some read counts
     */
    product_name: string;
    product_description: string;
  }>;
}>;

/**
 * ---------------------------------------------------------------------------------------------------------------------------------------
 * "completed_orders" is a collection of orders that are completed
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

type completed_orders = Array<{
  /**
   * we shall use PaymentIntent id as id for order for convenience
   */
  id: string;
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
  } | null;
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
}>;

/**
 * ---------------------------------------------------------------------------------------------------------------------------------------
 * "configuration" is a collection of configuration needed for the app to work
 * SHOULD NOT be read or write by any user
 * ****
 * each document are different from each other, and document id represent what it does
 * for example, a document of id "stripe" may have field PUBLIC_KEY and WEBHOOK_VALUE, etc.
 * ---------------------------------------------------------------------------------------------------------------------------------------
 */

type configurations = Array<{}>;

/**
 * ---------------------------------------------------------------------------------------------------------------------------------------
 * "emails" is collection that is used for sending email
 * we use Trigger Email extension
 * ---------------------------------------------------------------------------------------------------------------------------------------
 */

type emails = Array<{
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
}>;
