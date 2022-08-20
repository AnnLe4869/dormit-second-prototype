export interface CustomerData {
  metadata: {
    firebaseUID: string;
  };
  email?: string;
  phone?: string;
}

export interface PriceStripe {
  price_id: string;
  currency: string;
  unit_amount: number | null;
  /**
   * Any additional properties
   */
  [propName: string]: unknown;
}

export interface ProductStripe {
  /**
   * The product's name, meant to be displayable to the customer. Whenever this product is sold via a subscription, name will show up on associated invoice line item descriptions.
   */
  name: string;
  /**
   * The product's description, meant to be displayable to the customer. Use this field to optionally store a long form explanation of the product being sold for your own rendering purposes.
   */
  description: string | null;

  /**
   * A list of up to 8 URLs of images for this product, meant to be displayable to the customer.
   */
  images: Array<string>;
  /**
   * A list of Prices for this billing product.
   */
  prices?: Array<PriceStripe>;
  /**
   * Any additional properties
   */
  [propName: string]: unknown;
}
