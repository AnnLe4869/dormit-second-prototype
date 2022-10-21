import apple from "../../assets/apple.png";
import innout from "../../assets/innout.png";
import dintaifung from "../../assets/dintaifung.png";
import lays from "../images/lays.png";
import spaghetti from "../../assets/spaghetti.png";
import coke from "../images/coke.jpg";

export const mockProducts = [
  ///[0]
  {
    id: "prod_12characters",
    name: "Din Tai Fung",
    description: "Din Tai Fung is a bomb place in UTC",
    images: [dintaifung],
    metadata: {
      quantity: "5",
      category: "todaysSpecial",
      tax: "1.25",
    },
    prices: [
      {
        price_id: "price_13characterss",
        product_id: "prod_12characters", //This is linked to `id`
        currency: "USD",
        unit_amount: 2000,
      },
      // ,
      // {
      //     price_id: "price_1234567890123",
      //     product_id: "prod_12characters", //This is linked to `id`
      //     currency: "USD",
      //     unit_amount: 1450,
      // },
    ],
    rank: "112",
  },

  ///[1]
  {
    id: "prod_10dm593mjg23",
    name: "In-N-Out",
    description: "In-n-out burger is better than Shake Shack",
    images: [innout],
    metadata: {
      quantity: "2",
      category: "todaysSpecial",
      tax: "1.25",
    },
    prices: [
      {
        price_id: "price_sk2948fj109r",
        product_id: "prod_10dm593mjg23", //This is linked to `id`
        currency: "USD",
        unit_amount: 700,
      },
      // ,
      // {
      //     price_id: "price_1234567890123",
      //     product_id: "prod_12characters", //This is linked to `id`
      //     currency: "USD",
      //     unit_amount: 1450,
      // },
    ],
    rank: "1",
  },

  ///[2]
  {
    id: "prod_10dm593mjg33",
    name: "Apple",
    description: "An apple",
    images: [apple],
    metadata: {
      quantity: "4",
      category: "todaysSpecial",
      tax: "1.25",
    },
    prices: [
      {
        price_id: "price_sk2948fjasd9r",
        product_id: "prod_10dm593msf23", //This is linked to `id`
        currency: "USD",
        unit_amount: 50,
      },
      // ,
      // {
      //     price_id: "price_1234567890123",
      //     product_id: "prod_12characters", //This is linked to `id`
      //     currency: "USD",
      //     unit_amount: 1450,
      // },
    ],
    rank: "999",
  },

  ///[3]
  {
    id: "prod_10dm593mjg33",
    name: "Apple",
    description: "An apple",
    images: [apple],
    metadata: {
      quantity: "4",
      category: "todaysSpecial",
      tax: "1.25",
    },
    prices: [
      {
        price_id: "price_sk2948fjasd9r",
        product_id: "prod_10dm593msf23", //This is linked to `id`
        currency: "USD",
        unit_amount: 50,
      },
      // ,
      // {
      //     price_id: "price_1234567890123",
      //     product_id: "prod_12characters", //This is linked to `id`
      //     currency: "USD",
      //     unit_amount: 1450,
      // },
    ],
    rank: "999",
  },

  ///[3]
  {
    id: "prod_10dm593mjg33",
    name: "Twix",
    description: "",
    images: [apple],
    metadata: {
      quantity: "1",
      category: "candy",
      tax: "1.25",
    },
    prices: [
      {
        price_id: "price_sk4248fjasd9r",
        product_id: "prod_10dm593mjg33", //This is linked to `id`
        currency: "USD",
        unit_amount: 120,
      },
      // ,
      // {
      //     price_id: "price_1234567890123",
      //     product_id: "prod_12characters", //This is linked to `id`
      //     currency: "USD",
      //     unit_amount: 1450,
      // },
    ],
    rank: "4",
  },

  ///[4]
  {
    id: "prod_10dm59332333",
    name: "Lays",
    description: "Potato Chips",
    images: [lays],
    metadata: {
      quantity: "10",
      category: "chips",
      tax: "1.25",
    },
    prices: [
      {
        price_id: "prod_10dm59332333",
        product_id: "prod_10dm59332333", //This is linked to `id`
        currency: "USD",
        unit_amount: 150,
      },
      // ,
      // {
      //     price_id: "price_1234567890123",
      //     product_id: "prod_12characters", //This is linked to `id`
      //     currency: "USD",
      //     unit_amount: 1450,
      // },
    ],
    rank: "45",
  },

  ///[5]
  {
    id: "prod_10dm5423333",
    name: "Coke",
    description: "",
    images: [coke],
    metadata: {
      quantity: "12",
      category: "drinks",
      tax: "1.25",
    },
    prices: [
      {
        price_id: "prod_10dm59332333",
        product_id: "prod_10dm5423333", //This is linked to `id`
        currency: "USD",
        unit_amount: 175,
      },
      // ,
      // {
      //     price_id: "price_1234567890123",
      //     product_id: "prod_12characters", //This is linked to `id`
      //     currency: "USD",
      //     unit_amount: 1450,
      // },
    ],
    rank: "444",
  },

  ///[6]
  {
    id: "prod_10dm5423333",
    name: "Lunchables",
    description: "Best charcuterie board",
    images: [apple],
    metadata: {
      quantity: "2",
      category: "snacks",
      tax: "1.25",
    },
    prices: [
      {
        price_id: "prod_10dm59332333",
        product_id: "prod_10dm5423333", //This is linked to `id`
        currency: "USD",
        unit_amount: 210,
      },
      // ,
      // {
      //     price_id: "price_1234567890123",
      //     product_id: "prod_12characters", //This is linked to `id`
      //     currency: "USD",
      //     unit_amount: 1450,
      // },
    ],
    rank: "4444",
  },

  ///[7]
  {
    id: "prod_10d12333333",
    name: "Donut",
    description: "",
    images: [apple],
    metadata: {
      quantity: "8",
      category: "sweets",
      tax: "1.25",
    },
    prices: [
      {
        price_id: "prod_10dm59332333",
        product_id: "prod_10d12333333", //This is linked to `id`
        currency: "USD",
        unit_amount: 420,
      },
      // ,
      // {
      //     price_id: "price_1234567890123",
      //     product_id: "prod_12characters", //This is linked to `id`
      //     currency: "USD",
      //     unit_amount: 1450,
      // },
    ],
    rank: "4444",
  },

  ///[7]
  {
    id: "prod_10dga22342f",
    name: "Rocky Road",
    description: "",
    images: [apple],
    metadata: {
      quantity: "4",
      category: "icecream",
      tax: "1.25",
    },
    prices: [
      {
        price_id: "prod_10dm59332333",
        product_id: "prod_10dga22342f", //This is linked to `id`
        currency: "USD",
        unit_amount: 550,
      },
      // ,
      // {
      //     price_id: "price_1234567890123",
      //     product_id: "prod_12characters", //This is linked to `id`
      //     currency: "USD",
      //     unit_amount: 1450,
      // },
    ],
    rank: "1444",
  },

  ///[8]
  {
    id: "prod_10dga2rf23fr2f",
    name: "Mom's Spaghetti",
    description: "His palms are sweaty",
    images: [spaghetti],
    metadata: {
      quantity: "4",
      category: "readyToEat",
      tax: "1.25",
    },
    prices: [
      {
        price_id: "prod_10dm59332333",
        product_id: "prod_10dga2rf23fr2f", //This is linked to `id`
        currency: "USD",
        unit_amount: 1050,
      },
      // ,
      // {
      //     price_id: "price_1234567890123",
      //     product_id: "prod_12characters", //This is linked to `id`
      //     currency: "USD",
      //     unit_amount: 1450,
      // },
    ],
    rank: "1244",
  },

  ///[3]
  {
    id: "prod_10dm593mjg33",
    name: "Kit Kat",
    description: "",
    images: [apple],
    metadata: {
      quantity: "4",
      category: "candy",
      tax: "1.25",
    },
    prices: [
      {
        price_id: "price_sk4248fjasd9r",
        product_id: "prod_10dm593mjg33", //This is linked to `id`
        currency: "USD",
        unit_amount: 109,
      },
      // ,
      // {
      //     price_id: "price_1234567890123",
      //     product_id: "prod_12characters", //This is linked to `id`
      //     currency: "USD",
      //     unit_amount: 1450,
      // },
    ],
    rank: "444",
  },

  ///[4]
  {
    id: "prod_10dm59332333",
    name: "Kettle",
    description: "Potato Chips",
    images: [apple],
    metadata: {
      quantity: "10",
      category: "chips",
      tax: "1.25",
    },
    prices: [
      {
        price_id: "prod_10dm59332333",
        product_id: "prod_10dm59332333", //This is linked to `id`
        currency: "USD",
        unit_amount: 300,
      },
      // ,
      // {
      //     price_id: "price_1234567890123",
      //     product_id: "prod_12characters", //This is linked to `id`
      //     currency: "USD",
      //     unit_amount: 1450,
      // },
    ],
    rank: "453",
  },

  ///[5]
  {
    id: "prod_10dm5422342",
    name: "Sprite",
    description: "",
    images: [apple],
    metadata: {
      quantity: "12",
      category: "drinks",
      tax: "1.25",
    },
    prices: [
      {
        price_id: "prod_10dm59332333",
        product_id: "prod_10dm5422342", //This is linked to `id`
        currency: "USD",
        unit_amount: 155,
      },
      // ,
      // {
      //     price_id: "price_1234567890123",
      //     product_id: "prod_12characters", //This is linked to `id`
      //     currency: "USD",
      //     unit_amount: 1450,
      // },
    ],
    rank: "444",
  },

  ///[6]
  {
    id: "prod_10dm5423333",
    name: "Sandwich",
    description: "",
    images: [apple],
    metadata: {
      quantity: "10",
      category: "snacks",
      tax: "1.25",
    },
    prices: [
      {
        price_id: "prod_10dm59332333",
        product_id: "prod_10dm5423333", //This is linked to `id`
        currency: "USD",
        unit_amount: 700,
      },
      // ,
      // {
      //     price_id: "price_1234567890123",
      //     product_id: "prod_12characters", //This is linked to `id`
      //     currency: "USD",
      //     unit_amount: 1450,
      // },
    ],
    rank: "44124",
  },

  ///[7]
  {
    id: "prod_10d12333333",
    name: "Cookies",
    description: "",
    images: [apple],
    metadata: {
      quantity: "5",
      category: "sweets",
      tax: "1.25",
    },
    prices: [
      {
        price_id: "prod_10dm59332333",
        product_id: "prod_10d12333333", //This is linked to `id`
        currency: "USD",
        unit_amount: 420,
      },
      // ,
      // {
      //     price_id: "price_1234567890123",
      //     product_id: "prod_12characters", //This is linked to `id`
      //     currency: "USD",
      //     unit_amount: 1450,
      // },
    ],
    rank: "442344",
  },

  ///[7]
  {
    id: "prod_10dga232342f",
    name: "Mint Chocolate Chip",
    description: "",
    images: [apple],
    metadata: {
      quantity: "4",
      category: "icecream",
      tax: "1.25",
    },
    prices: [
      {
        price_id: "prod_10dm59332333",
        product_id: "prod_10dga232342f", //This is linked to `id`
        currency: "USD",
        unit_amount: 350,
      },
      // ,
      // {
      //     price_id: "price_1234567890123",
      //     product_id: "prod_12characters", //This is linked to `id`
      //     currency: "USD",
      //     unit_amount: 1450,
      // },
    ],
    rank: "1444",
  },

  ///[8]
  {
    id: "prod_10dga2r242fr2f",
    name: "Panda Express",
    description: "",
    images: [apple],
    metadata: {
      quantity: "4",
      category: "readyToEat",
      tax: "1.25",
    },
    prices: [
      {
        price_id: "prod_10dm59332333",
        product_id: "prod_10dga2r242fr2f", //This is linked to `id`
        currency: "USD",
        unit_amount: 1250,
      },
      // ,
      // {
      //     price_id: "price_1234567890123",
      //     product_id: "prod_12characters", //This is linked to `id`
      //     currency: "USD",
      //     unit_amount: 1450,
      // },
    ],
    rank: "124244",
  },

  ///[8]
  {
    id: "prod_10dg2342fr2f",
    name: "Apple",
    description: "",
    images: [apple],
    metadata: {
      quantity: "10",
      category: "candy",
      tax: "1.25",
    },
    prices: [
      {
        price_id: "prod_10dm59332333",
        product_id: "prod_10dg2342fr2f", //This is linked to `id`
        currency: "USD",
        unit_amount: 50,
      },
      // ,
      // {
      //     price_id: "price_1234567890123",
      //     product_id: "prod_12characters", //This is linked to `id`
      //     currency: "USD",
      //     unit_amount: 1450,
      // },
    ],
    rank: "124244",
  },

  ///[8]
  {
    id: "prod_10dg2342fr2f",
    name: "Apple",
    description: "",
    images: [apple],
    metadata: {
      quantity: "10",
      category: "candy",
      tax: "1.25",
    },
    prices: [
      {
        price_id: "prod_10dm59332333",
        product_id: "prod_10dg2342fr2f", //This is linked to `id`
        currency: "USD",
        unit_amount: 50,
      },
      // ,
      // {
      //     price_id: "price_1234567890123",
      //     product_id: "prod_12characters", //This is linked to `id`
      //     currency: "USD",
      //     unit_amount: 1450,
      // },
    ],
    rank: "124244",
  },

  ///[8]
  {
    id: "prod_10dg2342fr2f",
    name: "Apple",
    description: "",
    images: [apple],
    metadata: {
      quantity: "10",
      category: "candy",
      tax: "1.25",
    },
    prices: [
      {
        price_id: "prod_10dm59332333",
        product_id: "prod_10dg2342fr2f", //This is linked to `id`
        currency: "USD",
        unit_amount: 50,
      },
      // ,
      // {
      //     price_id: "price_1234567890123",
      //     product_id: "prod_12characters", //This is linked to `id`
      //     currency: "USD",
      //     unit_amount: 1450,
      // },
    ],
    rank: "124244",
  },

  ///[8]
  {
    id: "prod_10dg2342fr2f",
    name: "Apple",
    description: "",
    images: [apple],
    metadata: {
      quantity: "10",
      category: "candy",
      tax: "1.25",
    },
    prices: [
      {
        price_id: "prod_10dm59332333",
        product_id: "prod_10dg2342fr2f", //This is linked to `id`
        currency: "USD",
        unit_amount: 50,
      },
      // ,
      // {
      //     price_id: "price_1234567890123",
      //     product_id: "prod_12characters", //This is linked to `id`
      //     currency: "USD",
      //     unit_amount: 1450,
      // },
    ],
    rank: "124244",
  },

  ///[8]
  {
    id: "prod_10dg2342fr2f",
    name: "Apple",
    description: "",
    images: [apple],
    metadata: {
      quantity: "10",
      category: "candy",
      tax: "1.25",
    },
    prices: [
      {
        price_id: "prod_10dm59332333",
        product_id: "prod_10dg2342fr2f", //This is linked to `id`
        currency: "USD",
        unit_amount: 50,
      },
      // ,
      // {
      //     price_id: "price_1234567890123",
      //     product_id: "prod_12characters", //This is linked to `id`
      //     currency: "USD",
      //     unit_amount: 1450,
      // },
    ],
    rank: "124244",
  },

  ///[8]
  {
    id: "prod_10dg2342fr2f",
    name: "Apple",
    description: "",
    images: [apple],
    metadata: {
      quantity: "10",
      category: "candy",
      tax: "1.25",
    },
    prices: [
      {
        price_id: "prod_10dm59332333",
        product_id: "prod_10dg2342fr2f", //This is linked to `id`
        currency: "USD",
        unit_amount: 50,
      },
      // ,
      // {
      //     price_id: "price_1234567890123",
      //     product_id: "prod_12characters", //This is linked to `id`
      //     currency: "USD",
      //     unit_amount: 1450,
      // },
    ],
    rank: "124244",
  },

  ///[8]
  {
    id: "prod_10dg2342fr2f",
    name: "Apple",
    description: "",
    images: [apple],
    metadata: {
      quantity: "10",
      category: "chips",
      tax: "1.25",
    },
    prices: [
      {
        price_id: "prod_10dm59332333",
        product_id: "prod_10dg2342fr2f", //This is linked to `id`
        currency: "USD",
        unit_amount: 50,
      },
      // ,
      // {
      //     price_id: "price_1234567890123",
      //     product_id: "prod_12characters", //This is linked to `id`
      //     currency: "USD",
      //     unit_amount: 1450,
      // },
    ],
    rank: "124244",
  },

  ///[8]
  {
    id: "prod_10dg2342fr2f",
    name: "Apple",
    description: "",
    images: [apple],
    metadata: {
      quantity: "10",
      category: "chips",
      tax: "1.25",
    },
    prices: [
      {
        price_id: "prod_10dm59332333",
        product_id: "prod_10dg2342fr2f", //This is linked to `id`
        currency: "USD",
        unit_amount: 50,
      },
      // ,
      // {
      //     price_id: "price_1234567890123",
      //     product_id: "prod_12characters", //This is linked to `id`
      //     currency: "USD",
      //     unit_amount: 1450,
      // },
    ],
    rank: "124244",
  },

  ///[8]
  {
    id: "prod_10dg2342fr2f",
    name: "Apple",
    description: "",
    images: [apple],
    metadata: {
      quantity: "10",
      category: "chips",
      tax: "1.25",
    },
    prices: [
      {
        price_id: "prod_10dm59332333",
        product_id: "prod_10dg2342fr2f", //This is linked to `id`
        currency: "USD",
        unit_amount: 50,
      },
      // ,
      // {
      //     price_id: "price_1234567890123",
      //     product_id: "prod_12characters", //This is linked to `id`
      //     currency: "USD",
      //     unit_amount: 1450,
      // },
    ],
    rank: "124244",
  },

  ///[8]
  {
    id: "prod_10dg2342fr2f",
    name: "Apple",
    description: "",
    images: [apple],
    metadata: {
      quantity: "10",
      category: "chips",
      tax: "1.25",
    },
    prices: [
      {
        price_id: "prod_10dm59332333",
        product_id: "prod_10dg2342fr2f", //This is linked to `id`
        currency: "USD",
        unit_amount: 50,
      },
      // ,
      // {
      //     price_id: "price_1234567890123",
      //     product_id: "prod_12characters", //This is linked to `id`
      //     currency: "USD",
      //     unit_amount: 1450,
      // },
    ],
    rank: "124244",
  },

  ///[8]
  {
    id: "prod_10dg2342fr2f",
    name: "Apple",
    description: "",
    images: [apple],
    metadata: {
      quantity: "10",
      category: "chips",
      tax: "1.25",
    },
    prices: [
      {
        price_id: "prod_10dm59332333",
        product_id: "prod_10dg2342fr2f", //This is linked to `id`
        currency: "USD",
        unit_amount: 50,
      },
      // ,
      // {
      //     price_id: "price_1234567890123",
      //     product_id: "prod_12characters", //This is linked to `id`
      //     currency: "USD",
      //     unit_amount: 1450,
      // },
    ],
    rank: "124244",
  },

  ///[8]
  {
    id: "prod_10dg2342fr2f",
    name: "Apple",
    description: "",
    images: [apple],
    metadata: {
      quantity: "10",
      category: "chips",
      tax: "1.25",
    },
    prices: [
      {
        price_id: "prod_10dm59332333",
        product_id: "prod_10dg2342fr2f", //This is linked to `id`
        currency: "USD",
        unit_amount: 50,
      },
      // ,
      // {
      //     price_id: "price_1234567890123",
      //     product_id: "prod_12characters", //This is linked to `id`
      //     currency: "USD",
      //     unit_amount: 1450,
      // },
    ],
    rank: "124244",
  },

  ///[8]
  {
    id: "prod_10dg2342fr2f",
    name: "Apple",
    description: "",
    images: [apple],
    metadata: {
      quantity: "10",
      category: "drinks",
      tax: "1.25",
    },
    prices: [
      {
        price_id: "prod_10dm59332333",
        product_id: "prod_10dg2342fr2f", //This is linked to `id`
        currency: "USD",
        unit_amount: 50,
      },
      // ,
      // {
      //     price_id: "price_1234567890123",
      //     product_id: "prod_12characters", //This is linked to `id`
      //     currency: "USD",
      //     unit_amount: 1450,
      // },
    ],
    rank: "124244",
  },

  ///[8]
  {
    id: "prod_10dg2342fr2f",
    name: "Apple",
    description: "",
    images: [apple],
    metadata: {
      quantity: "10",
      category: "drinks",
      tax: "1.25",
    },
    prices: [
      {
        price_id: "prod_10dm59332333",
        product_id: "prod_10dg2342fr2f", //This is linked to `id`
        currency: "USD",
        unit_amount: 50,
      },
      // ,
      // {
      //     price_id: "price_1234567890123",
      //     product_id: "prod_12characters", //This is linked to `id`
      //     currency: "USD",
      //     unit_amount: 1450,
      // },
    ],
    rank: "124244",
  },

  ///[8]
  {
    id: "prod_10dg2342fr2f",
    name: "Apple",
    description: "",
    images: [apple],
    metadata: {
      quantity: "10",
      category: "drinks",
      tax: "1.25",
    },
    prices: [
      {
        price_id: "prod_10dm59332333",
        product_id: "prod_10dg2342fr2f", //This is linked to `id`
        currency: "USD",
        unit_amount: 50,
      },
      // ,
      // {
      //     price_id: "price_1234567890123",
      //     product_id: "prod_12characters", //This is linked to `id`
      //     currency: "USD",
      //     unit_amount: 1450,
      // },
    ],
    rank: "124244",
  },

  ///[8]
  {
    id: "prod_10dg2342fr2f",
    name: "Apple",
    description: "",
    images: [apple],
    metadata: {
      quantity: "10",
      category: "drinks",
      tax: "1.25",
    },
    prices: [
      {
        price_id: "prod_10dm59332333",
        product_id: "prod_10dg2342fr2f", //This is linked to `id`
        currency: "USD",
        unit_amount: 50,
      },
      // ,
      // {
      //     price_id: "price_1234567890123",
      //     product_id: "prod_12characters", //This is linked to `id`
      //     currency: "USD",
      //     unit_amount: 1450,
      // },
    ],
    rank: "124244",
  },

  ///[8]
  {
    id: "prod_10dg2342fr2f",
    name: "Apple",
    description: "",
    images: [apple],
    metadata: {
      quantity: "10",
      category: "drinks",
      tax: "1.25",
    },
    prices: [
      {
        price_id: "prod_10dm59332333",
        product_id: "prod_10dg2342fr2f", //This is linked to `id`
        currency: "USD",
        unit_amount: 50,
      },
      // ,
      // {
      //     price_id: "price_1234567890123",
      //     product_id: "prod_12characters", //This is linked to `id`
      //     currency: "USD",
      //     unit_amount: 1450,
      // },
    ],
    rank: "124244",
  },

  ///[8]
  {
    id: "prod_10dg2342fr2f",
    name: "Apple",
    description: "",
    images: [apple],
    metadata: {
      quantity: "10",
      category: "drinks",
      tax: "1.25",
    },
    prices: [
      {
        price_id: "prod_10dm59332333",
        product_id: "prod_10dg2342fr2f", //This is linked to `id`
        currency: "USD",
        unit_amount: 50,
      },
      // ,
      // {
      //     price_id: "price_1234567890123",
      //     product_id: "prod_12characters", //This is linked to `id`
      //     currency: "USD",
      //     unit_amount: 1450,
      // },
    ],
    rank: "124244",
  },

  ///[8]
  {
    id: "prod_10dg2342fr2f",
    name: "Apple",
    description: "",
    images: [apple],
    metadata: {
      quantity: "10",
      category: "snacks",
      tax: "1.25",
    },
    prices: [
      {
        price_id: "prod_10dm59332333",
        product_id: "prod_10dg2342fr2f", //This is linked to `id`
        currency: "USD",
        unit_amount: 50,
      },
      // ,
      // {
      //     price_id: "price_1234567890123",
      //     product_id: "prod_12characters", //This is linked to `id`
      //     currency: "USD",
      //     unit_amount: 1450,
      // },
    ],
    rank: "124244",
  },

  ///[8]
  {
    id: "prod_10dg2342fr2f",
    name: "Apple",
    description: "",
    images: [apple],
    metadata: {
      quantity: "10",
      category: "snacks",
      tax: "1.25",
    },
    prices: [
      {
        price_id: "prod_10dm59332333",
        product_id: "prod_10dg2342fr2f", //This is linked to `id`
        currency: "USD",
        unit_amount: 50,
      },
      // ,
      // {
      //     price_id: "price_1234567890123",
      //     product_id: "prod_12characters", //This is linked to `id`
      //     currency: "USD",
      //     unit_amount: 1450,
      // },
    ],
    rank: "124244",
  },

  ///[8]
  {
    id: "prod_10dg2342fr2f",
    name: "Apple",
    description: "",
    images: [apple],
    metadata: {
      quantity: "10",
      category: "snacks",
      tax: "1.25",
    },
    prices: [
      {
        price_id: "prod_10dm59332333",
        product_id: "prod_10dg2342fr2f", //This is linked to `id`
        currency: "USD",
        unit_amount: 50,
      },
      // ,
      // {
      //     price_id: "price_1234567890123",
      //     product_id: "prod_12characters", //This is linked to `id`
      //     currency: "USD",
      //     unit_amount: 1450,
      // },
    ],
    rank: "124244",
  },

  ///[8]
  {
    id: "prod_10dg2342fr2f",
    name: "Apple",
    description: "",
    images: [apple],
    metadata: {
      quantity: "10",
      category: "snacks",
      tax: "1.25",
    },
    prices: [
      {
        price_id: "prod_10dm59332333",
        product_id: "prod_10dg2342fr2f", //This is linked to `id`
        currency: "USD",
        unit_amount: 50,
      },
      // ,
      // {
      //     price_id: "price_1234567890123",
      //     product_id: "prod_12characters", //This is linked to `id`
      //     currency: "USD",
      //     unit_amount: 1450,
      // },
    ],
    rank: "124244",
  },

  ///[8]
  {
    id: "prod_10dg2342fr2f",
    name: "Apple",
    description: "",
    images: [apple],
    metadata: {
      quantity: "10",
      category: "snacks",
      tax: "1.25",
    },
    prices: [
      {
        price_id: "prod_10dm59332333",
        product_id: "prod_10dg2342fr2f", //This is linked to `id`
        currency: "USD",
        unit_amount: 50,
      },
      // ,
      // {
      //     price_id: "price_1234567890123",
      //     product_id: "prod_12characters", //This is linked to `id`
      //     currency: "USD",
      //     unit_amount: 1450,
      // },
    ],
    rank: "124244",
  },

  ///[8]
  {
    id: "prod_10dg2342fr2f",
    name: "Apple",
    description: "",
    images: [apple],
    metadata: {
      quantity: "10",
      category: "snacks",
      tax: "1.25",
    },
    prices: [
      {
        price_id: "prod_10dm59332333",
        product_id: "prod_10dg2342fr2f", //This is linked to `id`
        currency: "USD",
        unit_amount: 50,
      },
      // ,
      // {
      //     price_id: "price_1234567890123",
      //     product_id: "prod_12characters", //This is linked to `id`
      //     currency: "USD",
      //     unit_amount: 1450,
      // },
    ],
    rank: "124244",
  },

  ///[8]
  {
    id: "prod_10dg2342fr2f",
    name: "Apple",
    description: "",
    images: [apple],
    metadata: {
      quantity: "10",
      category: "sweets",
      tax: "1.25",
    },
    prices: [
      {
        price_id: "prod_10dm59332333",
        product_id: "prod_10dg2342fr2f", //This is linked to `id`
        currency: "USD",
        unit_amount: 50,
      },
      // ,
      // {
      //     price_id: "price_1234567890123",
      //     product_id: "prod_12characters", //This is linked to `id`
      //     currency: "USD",
      //     unit_amount: 1450,
      // },
    ],
    rank: "124244",
  },

  ///[8]
  {
    id: "prod_10dg2342fr2f",
    name: "Apple",
    description: "",
    images: [apple],
    metadata: {
      quantity: "10",
      category: "sweets",
      tax: "1.25",
    },
    prices: [
      {
        price_id: "prod_10dm59332333",
        product_id: "prod_10dg2342fr2f", //This is linked to `id`
        currency: "USD",
        unit_amount: 50,
      },
      // ,
      // {
      //     price_id: "price_1234567890123",
      //     product_id: "prod_12characters", //This is linked to `id`
      //     currency: "USD",
      //     unit_amount: 1450,
      // },
    ],
    rank: "124244",
  },

  ///[8]
  {
    id: "prod_10dg2342fr2f",
    name: "Apple",
    description: "",
    images: [apple],
    metadata: {
      quantity: "10",
      category: "sweets",
      tax: "1.25",
    },
    prices: [
      {
        price_id: "prod_10dm59332333",
        product_id: "prod_10dg2342fr2f", //This is linked to `id`
        currency: "USD",
        unit_amount: 50,
      },
      // ,
      // {
      //     price_id: "price_1234567890123",
      //     product_id: "prod_12characters", //This is linked to `id`
      //     currency: "USD",
      //     unit_amount: 1450,
      // },
    ],
    rank: "124244",
  },

  ///[8]
  {
    id: "prod_10dg2342fr2f",
    name: "Apple",
    description: "",
    images: [apple],
    metadata: {
      quantity: "10",
      category: "sweets",
      tax: "1.25",
    },
    prices: [
      {
        price_id: "prod_10dm59332333",
        product_id: "prod_10dg2342fr2f", //This is linked to `id`
        currency: "USD",
        unit_amount: 50,
      },
      // ,
      // {
      //     price_id: "price_1234567890123",
      //     product_id: "prod_12characters", //This is linked to `id`
      //     currency: "USD",
      //     unit_amount: 1450,
      // },
    ],
    rank: "124244",
  },

  ///[8]
  {
    id: "prod_10dg2342fr2f",
    name: "Apple",
    description: "",
    images: [apple],
    metadata: {
      quantity: "10",
      category: "sweets",
      tax: "1.25",
    },
    prices: [
      {
        price_id: "prod_10dm59332333",
        product_id: "prod_10dg2342fr2f", //This is linked to `id`
        currency: "USD",
        unit_amount: 50,
      },
      // ,
      // {
      //     price_id: "price_1234567890123",
      //     product_id: "prod_12characters", //This is linked to `id`
      //     currency: "USD",
      //     unit_amount: 1450,
      // },
    ],
    rank: "124244",
  },

  ///[8]
  {
    id: "prod_10dg2342fr2f",
    name: "Apple",
    description: "",
    images: [apple],
    metadata: {
      quantity: "10",
      category: "sweets",
      tax: "1.25",
    },
    prices: [
      {
        price_id: "prod_10dm59332333",
        product_id: "prod_10dg2342fr2f", //This is linked to `id`
        currency: "USD",
        unit_amount: 50,
      },
      // ,
      // {
      //     price_id: "price_1234567890123",
      //     product_id: "prod_12characters", //This is linked to `id`
      //     currency: "USD",
      //     unit_amount: 1450,
      // },
    ],
    rank: "124244",
  },

  ///[8]
  {
    id: "prod_10dg2342fr2f",
    name: "Apple",
    description: "",
    images: [apple],
    metadata: {
      quantity: "10",
      category: "icecream",
      tax: "1.25",
    },
    prices: [
      {
        price_id: "prod_10dm59332333",
        product_id: "prod_10dg2342fr2f", //This is linked to `id`
        currency: "USD",
        unit_amount: 50,
      },
      // ,
      // {
      //     price_id: "price_1234567890123",
      //     product_id: "prod_12characters", //This is linked to `id`
      //     currency: "USD",
      //     unit_amount: 1450,
      // },
    ],
    rank: "124244",
  },

  ///[8]
  {
    id: "prod_10dg2342fr2f",
    name: "Apple",
    description: "",
    images: [apple],
    metadata: {
      quantity: "10",
      category: "icecream",
      tax: "1.25",
    },
    prices: [
      {
        price_id: "prod_10dm59332333",
        product_id: "prod_10dg2342fr2f", //This is linked to `id`
        currency: "USD",
        unit_amount: 50,
      },
      // ,
      // {
      //     price_id: "price_1234567890123",
      //     product_id: "prod_12characters", //This is linked to `id`
      //     currency: "USD",
      //     unit_amount: 1450,
      // },
    ],
    rank: "124244",
  },

  ///[8]
  {
    id: "prod_10dg2342fr2f",
    name: "Apple",
    description: "",
    images: [apple],
    metadata: {
      quantity: "10",
      category: "icecream",
      tax: "1.25",
    },
    prices: [
      {
        price_id: "prod_10dm59332333",
        product_id: "prod_10dg2342fr2f", //This is linked to `id`
        currency: "USD",
        unit_amount: 50,
      },
      // ,
      // {
      //     price_id: "price_1234567890123",
      //     product_id: "prod_12characters", //This is linked to `id`
      //     currency: "USD",
      //     unit_amount: 1450,
      // },
    ],
    rank: "124244",
  },

  ///[8]
  {
    id: "prod_10dg2342fr2f",
    name: "Apple",
    description: "",
    images: [apple],
    metadata: {
      quantity: "10",
      category: "icecream",
      tax: "1.25",
    },
    prices: [
      {
        price_id: "prod_10dm59332333",
        product_id: "prod_10dg2342fr2f", //This is linked to `id`
        currency: "USD",
        unit_amount: 50,
      },
      // ,
      // {
      //     price_id: "price_1234567890123",
      //     product_id: "prod_12characters", //This is linked to `id`
      //     currency: "USD",
      //     unit_amount: 1450,
      // },
    ],
    rank: "124244",
  },

  ///[8]
  {
    id: "prod_10dg2342fr2f",
    name: "Apple",
    description: "",
    images: [apple],
    metadata: {
      quantity: "10",
      category: "icecream",
      tax: "1.25",
    },
    prices: [
      {
        price_id: "prod_10dm59332333",
        product_id: "prod_10dg2342fr2f", //This is linked to `id`
        currency: "USD",
        unit_amount: 50,
      },
      // ,
      // {
      //     price_id: "price_1234567890123",
      //     product_id: "prod_12characters", //This is linked to `id`
      //     currency: "USD",
      //     unit_amount: 1450,
      // },
    ],
    rank: "124244",
  },

  ///[8]
  {
    id: "prod_10dg2342fr2f",
    name: "Apple",
    description: "",
    images: [apple],
    metadata: {
      quantity: "10",
      category: "icecream",
      tax: "1.25",
    },
    prices: [
      {
        price_id: "prod_10dm59332333",
        product_id: "prod_10dg2342fr2f", //This is linked to `id`
        currency: "USD",
        unit_amount: 50,
      },
      // ,
      // {
      //     price_id: "price_1234567890123",
      //     product_id: "prod_12characters", //This is linked to `id`
      //     currency: "USD",
      //     unit_amount: 1450,
      // },
    ],
    rank: "124244",
  },

  ///[8]
  {
    id: "prod_10dg2342fr2f",
    name: "Apple",
    description: "",
    images: [apple],
    metadata: {
      quantity: "10",
      category: "readyToEat",
      tax: "1.25",
    },
    prices: [
      {
        price_id: "prod_10dm59332333",
        product_id: "prod_10dg2342fr2f", //This is linked to `id`
        currency: "USD",
        unit_amount: 50,
      },
      // ,
      // {
      //     price_id: "price_1234567890123",
      //     product_id: "prod_12characters", //This is linked to `id`
      //     currency: "USD",
      //     unit_amount: 1450,
      // },
    ],
    rank: "124244",
  },

  ///[8]
  {
    id: "prod_10dg2342fr2f",
    name: "Apple",
    description: "",
    images: [apple],
    metadata: {
      quantity: "10",
      category: "readyToEat",
      tax: "1.25",
    },
    prices: [
      {
        price_id: "prod_10dm59332333",
        product_id: "prod_10dg2342fr2f", //This is linked to `id`
        currency: "USD",
        unit_amount: 50,
      },
      // ,
      // {
      //     price_id: "price_1234567890123",
      //     product_id: "prod_12characters", //This is linked to `id`
      //     currency: "USD",
      //     unit_amount: 1450,
      // },
    ],
    rank: "124244",
  },

  ///[8]
  {
    id: "prod_10dg2342fr2f",
    name: "Apple",
    description: "",
    images: [apple],
    metadata: {
      quantity: "10",
      category: "readyToEat",
      tax: "1.25",
    },
    prices: [
      {
        price_id: "prod_10dm59332333",
        product_id: "prod_10dg2342fr2f", //This is linked to `id`
        currency: "USD",
        unit_amount: 50,
      },
      // ,
      // {
      //     price_id: "price_1234567890123",
      //     product_id: "prod_12characters", //This is linked to `id`
      //     currency: "USD",
      //     unit_amount: 1450,
      // },
    ],
    rank: "124244",
  },

  ///[8]
  {
    id: "prod_10dg2342fr2f",
    name: "Apple",
    description: "",
    images: [apple],
    metadata: {
      quantity: "10",
      category: "readyToEat",
      tax: "1.25",
    },
    prices: [
      {
        price_id: "prod_10dm59332333",
        product_id: "prod_10dg2342fr2f", //This is linked to `id`
        currency: "USD",
        unit_amount: 50,
      },
      // ,
      // {
      //     price_id: "price_1234567890123",
      //     product_id: "prod_12characters", //This is linked to `id`
      //     currency: "USD",
      //     unit_amount: 1450,
      // },
    ],
    rank: "124244",
  },

  ///[8]
  {
    id: "prod_10dg2342fr2f",
    name: "Apple",
    description: "",
    images: [apple],
    metadata: {
      quantity: "10",
      category: "readyToEat",
      tax: "1.25",
    },
    prices: [
      {
        price_id: "prod_10dm59332333",
        product_id: "prod_10dg2342fr2f", //This is linked to `id`
        currency: "USD",
        unit_amount: 50,
      },
      // ,
      // {
      //     price_id: "price_1234567890123",
      //     product_id: "prod_12characters", //This is linked to `id`
      //     currency: "USD",
      //     unit_amount: 1450,
      // },
    ],
    rank: "124244",
  },

  ///[8]
  {
    id: "prod_10dg2342fr2f",
    name: "Apple",
    description: "",
    images: [apple],
    metadata: {
      quantity: "10",
      category: "readyToEat",
      tax: "1.25",
    },
    prices: [
      {
        price_id: "prod_10dm59332333",
        product_id: "prod_10dg2342fr2f", //This is linked to `id`
        currency: "USD",
        unit_amount: 50,
      },
      // ,
      // {
      //     price_id: "price_1234567890123",
      //     product_id: "prod_12characters", //This is linked to `id`
      //     currency: "USD",
      //     unit_amount: 1450,
      // },
    ],
    rank: "124244",
  },
];
