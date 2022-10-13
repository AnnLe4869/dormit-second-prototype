/**
 * Get the "cart" item from localStorage
 * @returns cart data stored in localStorage, null if nothing found
 */
export function getCartFromLocStore() {
  return JSON.parse(localStorage.getItem("cart"));
}
