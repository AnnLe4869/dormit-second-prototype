export function getCartFromLocalStorage() {
  const storage = {};

  const keys = Object.keys(localStorage).filter(
    (key) => !["products", "timestamp"].includes(key)
  );

  keys.forEach((key) => {
    storage[key] = localStorage.getItem(key);
  });

  return storage;
}
