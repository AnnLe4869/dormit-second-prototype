import React, { createContext } from "react";
import { ACTIVATE_ALERT, DEACTIVATE_ALERT } from "../../constant";

export const AlertContext = createContext({
  dispatch: () => {},
  state: {
    type: null,
    message: "actual message will be passed through",
    isActive: false,
  },
});

function alertReducer(state, action) {
  switch (action.type) {
    // action must of form {type: string, payload: {type: string, message: string}}
    case ACTIVATE_ALERT:
      return {
        type: action.payload.type,
        message: action.payload.message,
        isActive: true,
      };

    // no need to pass action argument
    case DEACTIVATE_ALERT:
      return { ...state, message: null, isActive: false };

    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}

export default function AlertProvider({ children }) {
  const [state, dispatch] = React.useReducer(alertReducer, {
    type: null,
    message: null,
    isActive: false,
  });

  const value = { state, dispatch };
  return (
    <AlertContext.Provider value={value}>{children}</AlertContext.Provider>
  );
}
