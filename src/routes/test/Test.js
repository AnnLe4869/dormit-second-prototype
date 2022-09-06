import { useState, useEffect, useContext } from "react";
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
import { removeUserDataFromLocalStorage } from "../../helper/removeCartFromLocalStorage";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../context/user/user-context";
import { AppContext } from "../../context/app-context";

import { doc, setDoc, writeBatch } from "firebase/firestore";

export default function Test() {
  const status = useCheckAuthenticationStatus();

  const selectItem = useSelectItem();
  const incrementItem = useIncrementItemCount();
  const decrementItem = useDecrementItemCount();

  const products = useProducts();
  const navigate = useNavigate();

  const moveToCheckout = () => {
    navigate("/checkout");
  };

  const handleClick = () => {
    removeUserDataFromLocalStorage();
  };

  return (
    <main>
      <h1>Test</h1>
      <button onClick={moveToCheckout}>Move to checkout</button>

      <button onClick={handleClick}>Clear cart</button>
      {products.length > 0 ? (
        products.slice(1, 10).map((product) => (
          <div key={product.id}>
            <h1>Item {product.id} </h1>
            <button onClick={() => selectItem(product.id)}>
              Add item {product.name} to cart
            </button>
            <button onClick={() => incrementItem(product.id)}>
              Increment item {product.name}
            </button>
            <button onClick={() => decrementItem(product.id)}>
              Decrement item {product.name}
            </button>

            {product.prices ? (
              <h3>{product.prices[0].unit_amount}</h3>
            ) : (
              <h3>Loading prices</h3>
            )}
          </div>
        ))
      ) : (
        <h2>Waiting for loading</h2>
      )}
    </main>
  );
}
