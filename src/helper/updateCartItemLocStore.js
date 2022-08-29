import { getCartFromLocStore } from "./getCartFromLocStore";
import { writeCartToLocStore } from "./writeCartToLocStore";
/**
 * Update the given product to the given quantity in localStorage
 * @param {productId: string, quantity: number} the product we want to update in localStorage
 */
export function updateCartItemLocStore({ productId, quantity }) {
  const localCart = getCartFromLocStore();

  if (!localCart) {
    writeCartToLocStore([{ product_id: productId, quantity }]);
  } else {
    writeCartToLocStore(
      ...localCart.filter((item) => item.product_id !== productId),
      { product_id: productId, quantity }
    );
  }
}
