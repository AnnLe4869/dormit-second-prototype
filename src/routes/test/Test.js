import { useState } from "react";
import {
  useCheckAuthenticationStatus,
  useSendCodeEmail,
  useSendCodeToPhone,
  useSignOut,
  useSignUp,
  useVerifyEmailCode,
  useVerifyPhoneCode,
} from "../../context/user/auth-handler";
import { useCheckout } from "../../context/user/checkout-handler";
import { useActivateErrorAlert } from "../../context/alert/alert-handler";
import {
  useUpdateShipping,
  useUpdateFirstName,
} from "../../context/user/profile-context";
import { useProducts } from "../../context/product/product-handler";
import {
  useDecrementItemCount,
  useIncrementItemCount,
  useSelectItem,
} from "../../context/user/cart-handler";

export default function Test() {
  const status = useCheckAuthenticationStatus();

  const selectItem = useSelectItem();
  const incrementItem = useIncrementItemCount();
  const decrementItem = useDecrementItemCount();

  const products = useProducts();

  return (
    <main>
      <h1>Test</h1>
      {products.length > 0 ? (
        <button onClick={() => selectItem(products[5].id)}>
          Add item {products[5].name} to cart
        </button>
      ) : (
        <h2>Waiting for loading</h2>
      )}
    </main>
  );
}
