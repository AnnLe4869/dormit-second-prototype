export function getCategories(products) {
  const index = products.findIndex((category) => category.id === "categories");
  return products[index].categories;
}

export function getSection(products, section) {
  //const index = products.findIndex((category) => category.id === section);
  return getCategories(products).find(
    (category) => category.category_name === section
  );
}

export function getProducts(products) {
  return products.filter(
    (product) => product.id !== "categories" && product.id !== "shipping_fee"
  );
}
