import { useContext } from "react";
import {
  ACTIVATE_ALERT,
  DEACTIVATE_ALERT,
  ERROR_TYPE,
  INFO_TYPE,
  SUCCESS_TYPE,
  WARNING_TYPE,
} from "../../constant";
import { AlertContext } from "./alert-context";

export function useActivateInfoAlert() {
  const { dispatch } = useContext(AlertContext);

  return (message, callback = () => {}) => {
    dispatch({
      type: ACTIVATE_ALERT,
      payload: {
        type: INFO_TYPE,
        message,
      },
    });
    callback();
  };
}

export function useActivateWarningAlert() {
  const { dispatch } = useContext(AlertContext);

  return (message, callback = () => {}) => {
    dispatch({
      type: ACTIVATE_ALERT,
      payload: {
        type: WARNING_TYPE,
        message,
      },
    });
    callback();
  };
}

export function useActivateSuccessAlert() {
  const { dispatch } = useContext(AlertContext);

  return (message, callback = () => {}) => {
    dispatch({
      type: ACTIVATE_ALERT,
      payload: {
        type: SUCCESS_TYPE,
        message,
      },
    });
    callback();
  };
}

export function useActivateErrorAlert() {
  const { dispatch } = useContext(AlertContext);

  return (message, callback = () => {}) => {
    dispatch({
      type: ACTIVATE_ALERT,
      payload: {
        type: ERROR_TYPE,
        message,
      },
    });
    callback();
  };
}

export function useDeactivateAlert() {
  const { dispatch } = useContext(AlertContext);

  return (callback = () => {}) => {
    dispatch({
      type: DEACTIVATE_ALERT,
    });
    callback();
  };
}
