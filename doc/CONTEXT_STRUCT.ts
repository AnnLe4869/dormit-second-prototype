/**
 * -------------------------------------------------------------------------------------------------------------------------------------
 * the below are the structure for Context API
 * I have to make the decision to choose the naming convention for this: snake_case or camelCase
 * Firestore use snake_case but React typically use camelCase
 * In the end, I decide to use both:
 * a snake_case means the value is parsed from Firestore, while camelCase means it's data local to React only
 * -------------------------------------------------------------------------------------------------------------------------------------
 */
type Alert = {
  type: "error" | "info" | "success" | "warning";
  message: string;
  isActive: boolean;
};

type Product = {
  /**
   * only have one property - products
   * this has the same structure as the collection "products" in Firestore
   * at the moment, we fetch ALL products in inventory, but this MUST change in the future
   * the reason is because of cost - we fetch way too many products that user may not interest in
   */
  products: Array<{
    id: string;
    name: string;
    description: string;
    images: Array<string>;
    metadata: {
      quantity: string;
      category: string;
      tax: string;
      isSpecial: "true" | "false";
    };
    prices: Array<{
      price_id: string; // must start with "price_" (e.g "price_1LV5VjBFL4Le4")
      product_id: string; // the id of the product this linked to (e.g "prod_nfi3ndfd5549")
      currency: string;
      unit_amount: number;
    }>;

    rank: string;
  }>;
};

type User = {
  id: string;
  phone: string;
  linked_email: string;
  profile_img: string;
  stripeId: string;
  name: string;
  role: "customer" | "rusher" | "admin";
  shipping_address: {
    campus: string;
    building: string;
    floor_apartment: string;
  };
  cart: Array<{
    product_id: string;
    quantity: number;
  }>;

  /**
   * current_orders and past_orders are not fetched and populated when we fetch user's data
   * current_orders is a collection and past_orders is an array of orders' id
   * we will fetch orders' data only when needed as it may be a lot
   */
  current_orders: Array<Omit<processing_orders, "id">>;
  past_orders: Array<Omit<completed_orders, "id">>;

  /**
   * these are Context data only
   */
  isAuthenticated: boolean;
  isNewUser: boolean;
};

/**
 * processing_orders and completed_orders are not stored not fetched by client
 * the below are there for presentation purpose only
 */
type processing_orders = {
  id: string;
  payment_id: string;
  customer_id: string;
  customer_name: string;
  customer_img: string;
  customer_contact: {
    phone: string;
    text: string;
  };
  order_time: string;
  until_delivered: string | null;
  process_stage: -1 | 0 | 1 | 2 | 3;
  shipping_address: {
    campus: string;
    building: string;
    floor_apartment: string;
  };
  message: string;
  rusher: {
    rusher_id: string;
    rusher_name: string;
    rusher_img: string;
    rusher_contact: {
      phone: string;
      text: string | null;
    };
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
};

type completed_orders = {
  id: string;
  payment_id: string;
  customer_id: string;
  order_time: string;
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
};
