import React, { createContext } from "react";

import {
  ADD_TO_CART,
  DECREMENT_QUANTITY,
  INCREMENT_QUANTITY,
  INITIALIZE_USER_DETAILS,
  REMOVE_ITEM_FROM_CART,
  SET_CHECKOUT_ADDRESS,
  SET_CHECKOUT_PAYMENT,
  SIGN_IN_USER,
  SIGN_OUT_USER,
  SIGN_UP_USER,
} from "../../constant";

export const UserContext = createContext({
  isAuthenticated: false,
  isNewUser: false,
  cart: [{ id: "123adc", quantity: 3 }],
  checkout: {
    payment: {
      CCInfo: "Visa",
      CCNumber: "123456789",
    },
    deliveryAddress: "123 Special St",
  },
});

// all actions must be pure, no side-effect
// and we MUST NOT alter the state directly
// we have to return a new state only
// the shape of action depends on the type we pass to it
function userReducer(state, action) {
  switch (action.type) {
    case SIGN_IN_USER: {
      // action is {type: SIGN_IN_USER}
      return {
        ...state,
        isAuthenticated: true,
      };
    }
    case SIGN_UP_USER: {
      // action is {type: SIGN_UP_USER}
      return {
        ...state,
        isNewUser: true,
        isAuthenticated: true,
      };
    }

    case SIGN_OUT_USER: {
      return {
        isAuthenticated: false,
      };
    }

    /**
     * ----------------------------------------------------------------------------------------
     */

    case INITIALIZE_USER_DETAILS: {
      // action is {type: INITIALIZE_USER_DETAILS, payload: {user's detail fetched from firebase}}
      return {
        ...state,
        ...action.payload,
      };
    }

    /**
     * ----------------------------------------------------------------------------------------
     */
    case ADD_TO_CART: {
      // action is {type: ADD_TO_CART, payload: {id: string}}
      const { cart: originalCart } = state;
      const existingItemIndex = originalCart.findIndex(
        (item) => item.id === action.payload.id
      );

      if (existingItemIndex !== -1) {
        return {
          ...state,
          cart: [...originalCart, { id: action.payload.id, quantity: 1 }],
        };
      } else {
        return {
          ...state,
          cart: [
            ...originalCart.filter((_, index) => index !== existingItemIndex),
            {
              id: action.payload.id,
              quantity: originalCart[existingItemIndex].quantity + 1,
            },
          ],
        };
      }
    }

    /**
     * ----------------------------------------------------------------------------------------
     */
    case INCREMENT_QUANTITY: {
      // action is {type: INCREMENT_QUANTITY, payload: {id: string}}

      const { cart: originalCart } = state;
      const existingItemIndex = originalCart.findIndex(
        (item) => item.id === action.payload.id
      );

      if (existingItemIndex !== -1) {
        throw new Error("Incorrect product id is passed");
      } else {
        return {
          ...state,
          cart: [
            ...originalCart.filter((_, index) => index !== existingItemIndex),
            {
              id: action.payload.id,
              quantity: originalCart[existingItemIndex].quantity + 1,
            },
          ],
        };
      }
    }

    /**
     * ----------------------------------------------------------------------------------------
     */
    case DECREMENT_QUANTITY: {
      // action is {type: INCREMENT_QUANTITY, payload: {id: string}}

      const { cart: originalCart } = state;
      const existingItemIndex = originalCart.findIndex(
        (item) => item.id === action.payload.id
      );

      if (existingItemIndex !== -1) {
        throw new Error("Incorrect product id is passed");
      } else {
        const currentQuantity = originalCart[existingItemIndex];

        if (currentQuantity <= 1) {
          // we remove the item from the cart if this is the case
          return {
            ...state,
            cart: [
              ...originalCart.filter((_, index) => index !== existingItemIndex),
            ],
          };
        }

        return {
          ...state,
          cart: [
            ...originalCart.filter((_, index) => index !== existingItemIndex),
            {
              id: action.payload.id,
              quantity: originalCart[existingItemIndex].quantity - 1,
            },
          ],
        };
      }
    }

    /**
     * ----------------------------------------------------------------------------------------
     */

    case REMOVE_ITEM_FROM_CART: {
      // action is {type: INCREMENT_QUANTITY, payload: {id: string}}

      const { cart: originalCart } = state;
      const existingItemIndex = originalCart.findIndex(
        (item) => item.id === action.payload.id
      );

      if (existingItemIndex !== -1) {
        throw new Error("Incorrect product id is passed");
      } else {
        return {
          ...state,
          cart: [
            ...originalCart.filter((_, index) => index !== existingItemIndex),
          ],
        };
      }
    }

    /**
     * ----------------------------------------------------------------------------------------
     */

    case SET_CHECKOUT_ADDRESS: {
      // action is {type: SET_CHECKOUT_ADDRESS, payload: {address: string}}

      const address = action.payload.address;

      if (address === undefined) {
        throw new Error("You missing the address field");
      }

      return {
        ...state,
        checkout: {
          ...state.checkout,
          deliveryAddress: address,
        },
      };
    }

    /**
     * ----------------------------------------------------------------------------------------
     */

    case SET_CHECKOUT_PAYMENT: {
      // this will need future decision as we don't know whether we get all detail at once or not
      return;
    }

    /**
     * ----------------------------------------------------------------------------------------
     */
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}

export default function UserProvider({ children }) {
  const [state, dispatch] = React.useReducer(userReducer, {
    isAuthenticated: false,
    cart: [],
    checkout: {
      payment: {
        CCInfo: null,
        CCNumber: null,
      },
      deliveryAddress: null,
    },
  });

  const value = { state, dispatch };
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}
