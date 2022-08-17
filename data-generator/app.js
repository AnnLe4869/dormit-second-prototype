require("dotenv").config();
// This is your test secret API key.
const stripe = require("stripe")(process.env.STRIPE_API);
const { data } = require("./data");

/**
 * get random number in range 0 (inclusive) to max (exclusive)
 */
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
/**
 * list all existing products
 */
async function getProducts() {
  const products = await stripe.products.list();
  return products.data;
}

/**
 * update all products' quantity
 */
async function updateProducts() {
  const products = await getProducts();

  for (const product of products) {
    await stripe.products.update(product.id, {
      metadata: {
        ...product.metadata,
        quantity: parseInt(product.metadata.quantity) + getRandomInt(10) - 5,
      },
    });
  }
}

async function createProduct({ name, description, quantity }) {
  // list of several tax ids available on Stripe
  // const taxIds = [
  //   "txcd_41040002",
  //   "txcd_41040008",
  //   "txcd_41060006",
  //   "txcd_40070005",
  //   "txcd_40100001",
  //   "txcd_37060012",
  //   "txcd_35010000",
  //   "txcd_37050001",
  //   "txcd_33100200",
  //   "txcd_40060003",
  //   "txcd_40070005",
  // ];

  // list of categories we have
  const categories = [
    "grocery",
    "fruit",
    "chips",
    "healthy",
    "energy",
    "drinks",
    "sweets",
    "ready-to-eat",
    "personal-care",
    "school-supplies",
  ];

  await stripe.products.create({
    name,
    description,
    metadata: {
      quantity,
      category: categories[getRandomInt(categories.length)],
      tax: getRandomInt(1000) / 100,
    },
    default_price_data: {
      currency: "usd",
      // random price from $0.01 to $100.01
      unit_amount: getRandomInt(10000) + 1,
      tax_behavior: "inclusive",
    },
    // get image of random id of size 100x100
    // image is generated from https://picsum.photos/
    images: [`https://picsum.photos/id/${getRandomInt(800) + 10}/100/100`],
  });
}

async function generateProducts(numberOfProduct) {
  for (const item of data.splice(0, numberOfProduct)) {
    await createProduct(item);
  }
}

generateProducts(20);
