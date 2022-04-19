import React, { createContext, useContext } from "react";
import { INITIALIZE_PRODUCTS, UPDATE_ALL_PRODUCTS } from "../constant";

import UserContext from './user-context'
import AppContext from './app-context'

const ProductContext = createContext({
  products: [
    {
      id: "123adc",
      inventoryRemain: 15,
      name: "red bull",
      description: "energy drink",
      category: "drink",
    },
  ],
  deals: ["123adc"],
});

function productReducer(state, action) {
  switch (action.type) {
    case INITIALIZE_PRODUCTS: {
      // action is of form {type: INITIALIZE_PRODUCTS, payload: {products: []}}
      return action.payload.products;
    }
    case UPDATE_ALL_PRODUCTS: {
      // action is of form {type: INITIALIZE_PRODUCTS, payload: {products: []}}
      return action.payload.products;
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}

function ProductProvider({ children }) {
  const [state, dispatch] = React.useReducer(productReducer, {
    products: [{id: '352'}],
    deals: [],
  });
  
  const value = { state, dispatch };
  return (
    <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
  );
}


function useAddToCart(item){
  const {state: userState, dispatch: userDispatch} = useContext(UserContext)
  const db = useContext(AppContext)

  

}

export default ProductProvider;
export {ProductContext}
