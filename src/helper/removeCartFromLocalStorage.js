/**
 * remove user's data from local storage
 * the only data that associate with user stored in localStorage is cart's info
 *
 * @type {function() => never}
 */
export function removeUserDataFromLocalStorage() {
  const storage = {};

  const keys = Object.keys(localStorage).filter(
    (key) => !["products", "timestamp"].includes(key)
  );

  keys.forEach((key) => {
    storage[key] = localStorage.removeItem(key);
  });
}
