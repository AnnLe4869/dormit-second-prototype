type Product = Array<{
  id: string;
  inventory_remain: number;
  name: string;
  description: string;
  category: string;
  isDeal: boolean;
  image_url: string
}>;

type Deals = Array<string>;

type Alert = {
  type: "ERROR" | "INFO";
  message: string;
  is_active: boolean;
};

type User = {
  // these shall be available from the start of app
  id: string;
  // cart is reset to null when an order is made
  cart: Array<{
      id: string;
      quantity: number;
    }> | null;

  is_authenticated: boolean;
  checkout: {
    payment: {
      CC_info: string;
      CC_number: number;
    };
    delivery_address: string
  };

  // these should be fetched when needed only
  current_order: Array<{
    id: string;
    items: Array<{ id: string; quantity: number }>;
    order_time: string;
    is_cancel: boolean;
    delivery_address: string;
    process: number; // how much processing has been done on the order
  }>;
  past_order: Array<{
    id: string;
    items: Array<{ id: string; quantity: number }>;
    delivery_day: string;
  }>;
  default_payment: {
    CC_info: string;
    CC_number: number;
  };

  profile: {
    first_name: string;
    last_name: string;
    avatar: string;
  };
};
