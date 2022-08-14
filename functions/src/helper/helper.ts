import { Product } from "../type";

/**
 * Test whether a string is a valid email or not
 * The regex is taken from here https://regexr.com/2rhq7
 * @param text text we want to test whether it is string or not
 * @returns boolean value
 */
export function verifyEmail(text: string) {
  const re =
    /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;

  return text.match(re);
}

/**
 * Return the cheapest price out of an array of prices
 */
export function findCheapestPrice(prices: Product["prices"]) {
  return prices.reduce((previousValue, currentValue) =>
    previousValue.unit_amount < currentValue.unit_amount
      ? previousValue
      : currentValue
  );
}

export type ArrayElement<ArrayType extends readonly unknown[]> =
  ArrayType extends readonly (infer ElementType)[] ? ElementType : never;
