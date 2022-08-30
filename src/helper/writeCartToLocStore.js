/**
 * Write the given cart to localStorage
 * @param {User.cart} cart
 */
export function writeCartToLocStore(cart) {
  localStorage.setItem("cart", JSON.stringify(cart));
}
