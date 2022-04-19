import React, { createContext } from "react";
import { ACTIVATE_ALERT, DEACTIVATE_ALERT } from "../constant";

const AlertContext = createContext({
  type: "INFO",
  message: "actual message will be passed through",
  isActive: false,
});

function alertReducer(state, action) {
  switch (action.type) {
    // action must of form {type: string, message: string}
    case ACTIVATE_ALERT:
      return { ...action, isActive: true };

    // no need to pass action argument
    case DEACTIVATE_ALERT:
      return { ...state, isActive: false };

    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}

function AlertProvider({ children }) {
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

export default AlertProvider;
