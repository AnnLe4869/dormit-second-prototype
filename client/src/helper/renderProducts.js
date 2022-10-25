import ProductListing from "../shared/product/ProductListing.js";
import apple from "../assets/apple.png";

/**
 * Takes in data from the database and a String indicating a category.
 * Filters through the database of products to push and return an array
 * of Product components.
 */

const renderItem = (product) => {
  return (
    <ProductListing
      id={product.id}
      key={product.id}
      name={product.name}
      image={product.images ? product.images[0] : apple}
      description={product.description}
      price={product.prices ? product.prices[0].unit_amount : "Price"}
      stock={product.metadata ? product.metadata.quantity : 2000}
    />
  );
};

export function renderCategory(products, category, displayCount) {
  if (!displayCount) {
    displayCount = products.length;
  }

  let renderedProducts = [];
  for (
    let i = 0;
    i < products.length && renderedProducts.length < displayCount;
    i++
  ) {
    const product = products[i];

    if (!product.metadata) continue;

    if (product.metadata.category === category || category === "/") {
      renderedProducts.push(renderItem(product));
    }
  }

  return renderedProducts;
}

export function renderSpecials(products, displayCount) {
  if (!displayCount) {
    displayCount = products.length;
  }

  let renderedProducts = [];
  for (
    let i = 0;
    i < products.length && renderedProducts.length < displayCount;
    i++
  ) {
    const product = products[i];
    if (product.metadata?.isSpecial === "true") {
      renderedProducts.push(renderItem(product));
    }
  }
  return renderedProducts;
}

export function renderProducts(products, sectionName, displayCount) {
  if (!displayCount) {
    displayCount = products.length;
  }
  let renderedProducts = [];

  let rankedProductsList;
  if (sectionName === "Trending") {
    rankedProductsList = products.sort((a, b) => {
      return b.rank - a.rank;
    });
  }

  for (
    let i = 0;
    i < products.length && renderedProducts.length < displayCount;
    i++
  ) {
    if (sectionName === "Trending") {
      const product = rankedProductsList[i];
      renderedProducts.push(renderItem(product));
    } else if (sectionName === "Specials") {
      const product = products[i];
      if (product.metadata?.isSpecial === "true") {
        renderedProducts.push(renderItem(product));
      }
    } else {
      const product = products[i];
      if (product.isOnSale === true) {
        renderedProducts.push(renderItem(product));
      }
    }
  }
  return renderedProducts;
}

export function renderDeals(products, displayCount) {
  if (!displayCount) {
    displayCount = products.length;
  }

  let renderedProducts = [];
  for (
    let i = 0;
    i < products.length && renderedProducts.length < displayCount;
    i++
  ) {
    const product = products[i];
    if (product.isOnSale) {
      renderedProducts.push(
        <ProductListing
          id={product.id}
          key={product.id}
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