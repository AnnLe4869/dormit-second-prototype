/**
 * Test whether a string is a valid email or not
 * The regex is taken from here https://regexr.com/2rhq7
 * @param text text we want to test whether it is string or not
 * @returns boolean value
 */
export function verifyEmail(text: string) {
  const re =
    /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;

  return text.match(re);
}

// export function checkIfOrderExist(
//   orderId: string,
//   orderList: Array<{
//     customer_id: string;
//     payment_id: string;
//     order_time: string;
//     order_process: string;
//     until_delivery: string;
//     rusher: {
//       user_id: string;
//       user_name: string;
//       user_contact: string;
//     };
//   }>
// ) {
//   orderList.forEach((order) => {
//     if (order.payment_id === orderId) {
//       return true;
//     }
//   });

//   return false;
// }
