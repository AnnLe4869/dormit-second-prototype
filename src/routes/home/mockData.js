import ItemEntry from "../../shared/item-entry/ItemEntry";
import apple from "../../assets/apple.png";
import innout from "../../assets/innout.png";
import dintaifung from "../../assets/dintaifung.png";

const product1 = {
  id: "prod_12characters",
  name: "Din Tai Fung",
  description: "Din Tai Fung is a bomb place in UTC",
  images: ["../../assets/dintaifung.png"],

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
};

const todaysSpecial = [
  <ItemEntry
    id="innout"
    name="In-N-Out Burger"
    image={innout}
    price="3.45"
    stock={2}
  />,
  <ItemEntry id="apple" name="Apple" image={apple} price="Price" stock={0} />,
  <ItemEntry id="apple" name="Apple" image={apple} price="Price" stock={1} />,
  <ItemEntry id="apple" name="Apple" image={apple} price="Price" stock={5} />,
];

const candy = [
  <ItemEntry
    id="apple"
    name="Skittles"
    image={apple}
    price="Price"
    stock={0}
  />,
  <ItemEntry id="apple" name="Recess" image={apple} price="Price" stock={1} />,
  <ItemEntry
    id="apple"
    name="Snickers"
    image={apple}
    price="Price"
    stock={5}
  />,
  <ItemEntry id="apple" name="KitKat" image={apple} price="Price" stock={0} />,
  <ItemEntry id="apple" name="Twix" image={apple} price="Price" stock={1} />,
  <ItemEntry
    id="apple"
    name="Milky Way"
    image={apple}
    price="Price"
    stock={5}
  />,
  <ItemEntry
    id="apple"
    name="Hersheys"
    image={apple}
    price="Price"
    stock={0}
  />,
  <ItemEntry
    id="apple"
    name="Milk Duds"
    image={apple}
    price="Price"
    stock={1}
  />,
  <ItemEntry id="apple" name="Pop!" image={apple} price="Price" stock={5} />,
  <ItemEntry id="apple" name="Crunch" image={apple} price="Price" stock={0} />,
  <ItemEntry id="apple" name="Dots" image={apple} price="Price" stock={1} />,
  <ItemEntry id="apple" name="Nerds" image={apple} price="Price" stock={5} />,
];

const chips = [
  <ItemEntry id="apple" name="Lays" image={apple} price="Price" stock={0} />,
  <ItemEntry id="apple" name="Cheetos" image={apple} price="Price" stock={1} />,
  <ItemEntry id="apple" name="Doritos" image={apple} price="Price" stock={5} />,
  <ItemEntry id="apple" name="Kettle" image={apple} price="Price" stock={0} />,
  <ItemEntry
    id="apple"
    name="Pirate's Booty"
    image={apple}
    price="Price"
    stock={1}
  />,
  <ItemEntry
    id="apple"
    name="Cape Cod"
    image={apple}
    price="Price"
    stock={5}
  />,
  <ItemEntry
    id="apple"
    name="Mr. Potato"
    image={apple}
    price="Price"
    stock={0}
  />,
  <ItemEntry id="apple" name="Ruffles" image={apple} price="Price" stock={1} />,
  <ItemEntry id="apple" name="Pop!" image={apple} price="Price" stock={5} />,
  <ItemEntry id="apple" name="Crunch" image={apple} price="Price" stock={0} />,
  <ItemEntry id="apple" name="Dots" image={apple} price="Price" stock={1} />,
  <ItemEntry id="apple" name="Nerds" image={apple} price="Price" stock={5} />,
];

const drinks = [
  <ItemEntry
    id="apple"
    name="Mountain Dew"
    image={apple}
    price="Price"
    stock={0}
  />,
  <ItemEntry id="apple" name="Coke" image={apple} price="Price" stock={1} />,
  <ItemEntry id="apple" name="Milk" image={apple} price="Price" stock={5} />,
  <ItemEntry
    id="apple"
    name="Orange Juice"
    image={apple}
    price="Price"
    stock={0}
  />,
  <ItemEntry id="apple" name="Sprite" image={apple} price="Price" stock={1} />,
  <ItemEntry id="apple" name="Water" image={apple} price="Price" stock={5} />,
  <ItemEntry
    id="apple"
    name="Hersheys"
    image={apple}
    price="Price"
    stock={0}
  />,
  <ItemEntry
    id="apple"
    name="Milk Duds"
    image={apple}
    price="Price"
    stock={1}
  />,
  <ItemEntry id="apple" name="Pop!" image={apple} price="Price" stock={5} />,
  <ItemEntry id="apple" name="Crunch" image={apple} price="Price" stock={0} />,
  <ItemEntry id="apple" name="Dots" image={apple} price="Price" stock={1} />,
  <ItemEntry id="apple" name="Nerds" image={apple} price="Price" stock={5} />,
];

const snacks = [
  <ItemEntry id="apple" name="Cookies" image={apple} price="Price" stock={0} />,
  <ItemEntry id="apple" name="Snack2" image={apple} price="Price" stock={1} />,
  <ItemEntry id="apple" name="Snack3" image={apple} price="Price" stock={5} />,
  <ItemEntry id="apple" name="Snack4" image={apple} price="Price" stock={0} />,
  <ItemEntry id="apple" name="Twix" image={apple} price="Price" stock={1} />,
  <ItemEntry
    id="apple"
    name="Milky Way"
    image={apple}
    price="Price"
    stock={5}
  />,
  <ItemEntry
    id="apple"
    name="Hersheys"
    image={apple}
    price="Price"
    stock={0}
  />,
  <ItemEntry
    id="apple"
    name="Milk Duds"
    image={apple}
    price="Price"
    stock={1}
  />,
  <ItemEntry id="apple" name="Pop!" image={apple} price="Price" stock={5} />,
  <ItemEntry id="apple" name="Crunch" image={apple} price="Price" stock={0} />,
  <ItemEntry id="apple" name="Dots" image={apple} price="Price" stock={1} />,
  <ItemEntry id="apple" name="Nerds" image={apple} price="Price" stock={5} />,
];

const sweets = [
  <ItemEntry id="apple" name="Donuts" image={apple} price="Price" stock={0} />,
  <ItemEntry id="apple" name="Cake" image={apple} price="Price" stock={1} />,
  <ItemEntry id="apple" name="Sweets3" image={apple} price="Price" stock={5} />,
  <ItemEntry id="apple" name="Sweets4" image={apple} price="Price" stock={0} />,
  <ItemEntry id="apple" name="Twix" image={apple} price="Price" stock={1} />,
  <ItemEntry
    id="apple"
    name="Milky Way"
    image={apple}
    price="Price"
    stock={5}
  />,
  <ItemEntry
    id="apple"
    name="Hersheys"
    image={apple}
    price="Price"
    stock={0}
  />,
  <ItemEntry
    id="apple"
    name="Milk Duds"
    image={apple}
    price="Price"
    stock={1}
  />,
  <ItemEntry id="apple" name="Pop!" image={apple} price="Price" stock={5} />,
  <ItemEntry id="apple" name="Crunch" image={apple} price="Price" stock={0} />,
  <ItemEntry id="apple" name="Dots" image={apple} price="Price" stock={1} />,
  <ItemEntry id="apple" name="Nerds" image={apple} price="Price" stock={5} />,
];

const iceCream = [
  <ItemEntry
    id="apple"
    name="Ben and Jerrys"
    image={apple}
    price="Price"
    stock={0}
  />,
  <ItemEntry
    id="apple"
    name="McFlurry"
    image={apple}
    price="Price"
    stock={1}
  />,
  <ItemEntry
    id="apple"
    name="ice cream3"
    image={apple}
    price="Price"
    stock={5}
  />,
  <ItemEntry
    id="apple"
    name="ice cream4"
    image={apple}
    price="Price"
    stock={0}
  />,
  <ItemEntry id="apple" name="Twix" image={apple} price="Price" stock={1} />,
  <ItemEntry
    id="apple"
    name="Milky Way"
    image={apple}
    price="Price"
    stock={5}
  />,
  <ItemEntry
    id="apple"
    name="Hersheys"
    image={apple}
    price="Price"
    stock={0}
  />,
  <ItemEntry
    id="apple"
    name="Milk Duds"
    image={apple}
    price="Price"
    stock={1}
  />,
  <ItemEntry id="apple" name="Pop!" image={apple} price="Price" stock={5} />,
  <ItemEntry id="apple" name="Crunch" image={apple} price="Price" stock={0} />,
  <ItemEntry id="apple" name="Dots" image={apple} price="Price" stock={1} />,
  <ItemEntry id="apple" name="Nerds" image={apple} price="Price" stock={5} />,
];

const readyToEat = [
  <ItemEntry
    id="apple"
    name="Spaghetti"
    image={apple}
    price="Price"
    stock={0}
  />,
  <ItemEntry
    id="apple"
    name="Breakfast Sandwich"
    image={apple}
    price="Price"
    stock={1}
  />,
  <ItemEntry id="apple" name="rte3" image={apple} price="Price" stock={5} />,
  <ItemEntry id="apple" name="rte4" image={apple} price="Price" stock={0} />,
  <ItemEntry id="apple" name="Twix" image={apple} price="Price" stock={1} />,
  <ItemEntry
    id="apple"
    name="Milky Way"
    image={apple}
    price="Price"
    stock={5}
  />,
  <ItemEntry
    id="apple"
    name="Hersheys"
    image={apple}
    price="Price"
    stock={0}
  />,
  <ItemEntry
    id="apple"
    name="Milk Duds"
    image={apple}
    price="Price"
    stock={1}
  />,
  <ItemEntry id="apple" name="Pop!" image={apple} price="Price" stock={5} />,
  <ItemEntry id="apple" name="Crunch" image={apple} price="Price" stock={0} />,
  <ItemEntry id="apple" name="Dots" image={apple} price="Price" stock={1} />,
  <ItemEntry id="apple" name="Nerds" image={apple} price="Price" stock={5} />,
];

const placeholder = [
  <ItemEntry id="apple" name="xd" image={apple} price="Price" stock={0} />,
  <ItemEntry id="apple" name="xd" image={apple} price="Price" stock={1} />,
  <ItemEntry id="apple" name="xd" image={apple} price="Price" stock={5} />,
  <ItemEntry id="apple" name="xd" image={apple} price="Price" stock={0} />,
  <ItemEntry id="apple" name="Twix" image={apple} price="Price" stock={1} />,
  <ItemEntry
    id="apple"
    name="Milky Way"
    image={apple}
    price="Price"
    stock={5}
  />,
  <ItemEntry
    id="apple"
    name="Hersheys"
    image={apple}
    price="Price"
    stock={0}
  />,
  <ItemEntry
    id="apple"
    name="Milk Duds"
    image={apple}
    price="Price"
    stock={1}
  />,
  <ItemEntry id="apple" name="Pop!" image={apple} price="Price" stock={5} />,
  <ItemEntry id="apple" name="Crunch" image={apple} price="Price" stock={0} />,
  <ItemEntry id="apple" name="Dots" image={apple} price="Price" stock={1} />,
  <ItemEntry id="apple" name="Nerds" image={apple} price="Price" stock={5} />,
];

//export const mockLists = [todaysSpecial, candy, chips, drinks, snacks, sweets, iceCream, readyToEat, placeholder];

export const mockLists = {
  todaysSpecial: todaysSpecial,
  candy: candy,
  chips: chips,
  drinks: drinks,
  snacks: snacks,
  sweets: sweets,
  iceCream: iceCream,
  readyToEat: readyToEat,
  placeholder: placeholder,
};

export const mockSpecialItems = [
  <ItemEntry
    id="innout"
    name="In-N-Out Burger"
    image={innout}
    price="3.45"
    stock={2}
  />,
  <ItemEntry id="apple" name="Apple" image={apple} price="Price" stock={0} />,
  <ItemEntry id="apple" name="Apple" image={apple} price="Price" stock={1} />,
  <ItemEntry id="apple" name="Apple" image={apple} price="Price" stock={5} />,
];

export const mockTwelveItems = [
  <ItemEntry id="apple" image={apple} price="Price" stock={2} />,
  <ItemEntry id="apple" image={apple} price="Price" stock={0} />,
  <ItemEntry id="apple" image={apple} price="Price" stock={1} />,
  <ItemEntry id="apple" image={apple} price="Price" stock={5} />,
  <ItemEntry id="apple" image={apple} price="Price" stock={2} />,
  <ItemEntry id="apple" image={apple} price="Price" stock={0} />,
  <ItemEntry id="apple" image={apple} price="Price" stock={1} />,
  <ItemEntry id="apple" image={apple} price="Price" stock={5} />,
  <ItemEntry id="apple" image={apple} price="Price" stock={0} />,
  <ItemEntry id="apple" image={apple} price="Price" stock={1} />,
  <ItemEntry id="apple" image={apple} price="Price" stock={5} />,
];

export const mockTwelveDealItems = [
  <ItemEntry price={"Price"} image={apple} dealPrice={"Price"} />,
  <ItemEntry price={"Price"} image={apple} dealPrice={"Price"} />,
  <ItemEntry price={"Price"} image={apple} dealPrice={"Price"} />,
  <ItemEntry price={"Price"} image={apple} dealPrice={"Price"} />,
  <ItemEntry price={"Price"} image={apple} dealPrice={"Price"} />,
  <ItemEntry price={"Price"} image={apple} dealPrice={"Price"} />,
  <ItemEntry price={"Price"} image={apple} dealPrice={"Price"} />,
  <ItemEntry price={"Price"} image={apple} dealPrice={"Price"} />,
  <ItemEntry price={"Price"} image={apple} dealPrice={"Price"} />,
  <ItemEntry price={"Price"} image={apple} dealPrice={"Price"} />,
  <ItemEntry price={"Price"} image={apple} dealPrice={"Price"} />,
  <ItemEntry price={"Price"} image={apple} dealPrice={"Price"} />,
];
