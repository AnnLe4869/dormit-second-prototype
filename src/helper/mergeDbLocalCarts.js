export function mergeDbLocalCarts(cartInDb, localCart) {
  // Sort cart items by order of id's
  let sortedCart = [...cartInDb, ...localCart].sort((a, b) => {
    if (a.product_id > b.product_id) return 1;
    return -1;
  });

  const mergedCart = [];

  for (let i = 1; i < sortedCart.length; i++) {
    // Push items with unique product_id's
    if (sortedCart[i].product_id !== sortedCart[i - 1].product_id) {
      if (!mergedCart.includes(sortedCart[i - 1])) {
        mergedCart.push(sortedCart[i - 1]);
      }
      if (i === sortedCart.length - 1) {
        mergedCart.push(sortedCart[i]);
      }
      // Push duplicate item with higher quantity value
    } else if (sortedCart[i].quantity > sortedCart[i - 1].quantity) {
      mergedCart.push(sortedCart[i]);
    } else {
      mergedCart.push(sortedCart[i - 1]);
    }
  }

  return mergedCart;
}
