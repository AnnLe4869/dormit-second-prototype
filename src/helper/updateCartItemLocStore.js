import { getCartFromLocStore } from "./getCartFromLocStore";
import { writeCartToLocStore } from "./writeCartToLocStore";
/**
 * Update the given product to the given quantity in localStorage
 * if the quantity is 0(zero), remove the item from the cart
 * @param {productId: string, quantity: number} the product we want to update in localStorage
 */
export function updateCartItemLocStore({ productId, quantity }) {
  const localCart = getCartFromLocStore();

  if (!localCart) {
    // when cart hasn't been created in localStorage
    if (quantity > 0) {
      writeCartToLocStore([{ product_id: productId, quantity }]);
    }
  } else {
    if (quantity > 0) {
      writeCartToLocStore([
        ...localCart.filter((item) => item.product_id !== productId),
        { product_id: productId, quantity },
      ]);
    } else {
      writeCartToLocStore([
        ...localCart.filter((item) => item.product_id !== productId),
      ]);
    }
  }
}
