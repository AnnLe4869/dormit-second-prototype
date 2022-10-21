/**
 * Check whether two array of cart are the same
 * Two arrays, in this case, are the same if one item exist in another and vice versa
 * @param {User.cart} arr1
 * @param {User.cart} arr2
 * @return boolean
 */
export function isArrayDifferent(arr1, arr2) {
  arr1.forEach((obj1) => {
    const arr = [];
    arr2.some((obj2) => {
      arr.push(isSameObject(obj1, obj2));
      return isSameObject(obj1, obj2);
    });

    if (!arr.includes(true)) {
      return false;
    }
  });
}

function isSameObject(obj1, obj2) {
  return obj1.id === obj2.id && obj1.quantity === obj2.quantity;
}
