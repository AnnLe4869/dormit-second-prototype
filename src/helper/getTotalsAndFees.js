function getSubTotal(productQuantity) {
  let subTotal = 0;

  productQuantity.forEach((element) => {
    const adjustedPrice = element.price / 100;
    subTotal +=
      (adjustedPrice + (adjustedPrice * element.tax) / 100) * element.quantity;
  });

  return subTotal;
}

const getDeliveryFee = () => {
  const deliveryFee = 1.95;
  return deliveryFee;
};

export function getTotal(productQuantity) {
  const subTotal = getSubTotal(productQuantity);
  let total = subTotal + getDeliveryFee();
  return Math.round(total * 100) / 100;
}

export function getTotalCount(cart) {
  let count = 0;

  for (let i = 0; i < cart.length; i++) {
    count += cart[i].quantity;
  }
  return count;
}
