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

/**
 * the below code is used to generate svg icon based off given input
 * source: https://github.com/laurentpayot/minidenticons
 */

// density of 4 for the lowest probability of collision
const SQUARE_DENSITY = 4;
// 18 different colors only for easy distinction
const COLORS_NB = 18;
const DEFAULT_SATURATION = 50;
const DEFAULT_LIGHTNESS = 50;

// 32 bit FNV-1a hash parameters
const FNV_PRIME = 16777619;
const OFFSET_BASIS = 2166136261;

/**
 * @type {(str: string) => number}
 */
// based on the FNV-1a hash algorithm, modified for *signed* 32 bit integers http://www.isthe.com/chongo/tech/comp/fnv/index.html
function simpleHash(str: string) {
  return (
    str
      .split("")
      // >>> 0 for 32 bit unsigned integer conversion https://2ality.com/2012/02/js-integers.html
      .reduce(
        (hash, char) => ((hash ^ char.charCodeAt(0)) >>> 0) * FNV_PRIME,
        OFFSET_BASIS
      )
  );
}

export function identicon(
  username: string,
  saturation = DEFAULT_SATURATION,
  lightness = DEFAULT_LIGHTNESS
) {
  const hash = simpleHash(username);
  // dividing hash by FNV_PRIME to get last XOR result for better color randomness (will be an integer except for empty string hash)
  const hue = ((hash / FNV_PRIME) % COLORS_NB) * (360 / COLORS_NB);
  const rects = [...Array(username ? 25 : 0).keys()]
    // 2 + ((3 * 5 - 1) - modulo) to concentrate squares at the center
    .map((i) =>
      hash % (16 - (i % 15)) < SQUARE_DENSITY
        ? `<rect x="${i > 14 ? 7 - ~~(i / 5) : ~~(i / 5)}" y="${
            i % 5
          }" width="1" height="1"/>`
        : ""
    )
    .join("");
  // xmlns attribute added in case of SVG file generation https://developer.mozilla.org/en-US/docs/Web/SVG/Element/svg#sect1
  return `<svg viewBox="-1.5 -1.5 8 8" xmlns="http://www.w3.org/2000/svg" fill="hsl(${hue} ${saturation}% ${lightness}%)">${rects}</svg>`;
}
