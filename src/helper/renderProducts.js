import ProductListing from "../shared/product/ProductListing.js";
import apple from "../assets/apple.png";

/**
 * Takes in data from the database and a String indicating a category.
 * Filters through the database of products to push and return an array
 * of Product components.
 */
export function renderCategory(database, category, displayCount) {
  if (!displayCount) {
    displayCount = database.length;
  }

  let renderedProducts = [];

  for (
    let i = 0;
    i < database.length && renderedProducts.length < displayCount;
    i++
  ) {
    const product = database[i];

    if (!product.metadata) {
      continue;
    }

    if (product.metadata.category === category || category === "/") {
      renderedProducts.push(
        <ProductListing
          id={product.id}
          name={product.name}
          image={product.images ? product.images[0] : apple}
          description={product.description}
          price={product.prices ? product.prices[0].unit_amount : "Price"}
          stock={product.metadata ? product.metadata.quantity : 2000}
        />
      );
    }
  }

  return renderedProducts;
}

export function renderSpecials(database, displayCount) {
  if (!displayCount) {
    displayCount = database.length;
  }

  let renderedProducts = [];

  for (
    let i = 0;
    i < database.length && renderedProducts.length < displayCount;
    i++
  ) {
    const product = database[i];

    if (product.metadata.isSpecial) {
      renderedProducts.push(
        <ProductListing
          id={product.id}
          name={product.name}
          image={product.images ? product.images[0] : apple}
          description={product.description}
          price={product.prices ? product.prices[0].unit_amount : "Price"}
          stock={product.metadata ? product.metadata.quantity : 2000}
        />
      );
    }
  }

  return renderedProducts;
}
