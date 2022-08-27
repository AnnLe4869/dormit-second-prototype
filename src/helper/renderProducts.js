import ProductListing from "../shared/product/ProductListing.js";

/**
 * Takes in data from the database and a String indicating a category.
 * Filters through the database of products to push and return an array
 * of Product components.
 */
export function renderProducts(database, category, displayCount) {
  if (!displayCount) {
    displayCount = database.length;
  }

  let renderedProducts = [];

  for (
    let i = 0;
    i < database.length && renderedProducts.length < displayCount;
    i++
  ) {
    const current = database[i];

    if (current.metadata.category === category || category === "/") {
      renderedProducts.push(
        <ProductListing
          id={current.id}
          name={current.name}
          image={current.images[0]}
          description={current.description}
          price={current.prices[0].unit_amount}
          stock={current.metadata.quantity}
        />
      );
    }
  }

  return renderedProducts;
}
