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

  return (message) => {
    dispatch({
      type: ACTIVATE_ALERT,
      payload: {
        type: INFO_TYPE,
        message,
      },
    });
  };
}

export function useActivateWarningAlert() {
  const { dispatch } = useContext(AlertContext);

  return (message) => {
    dispatch({
      type: ACTIVATE_ALERT,
      payload: {
        type: WARNING_TYPE,
        message,
      },
    });
  };
}

export function useActivateSuccessAlert() {
  const { dispatch } = useContext(AlertContext);

  return (message) => {
    dispatch({
      type: ACTIVATE_ALERT,
      payload: {
        type: SUCCESS_TYPE,
        message,
      },
    });
  };
}

export function useActivateErrorAlert() {
  const { dispatch } = useContext(AlertContext);

  return (message) => {
    dispatch({
      type: ACTIVATE_ALERT,
      payload: {
        type: ERROR_TYPE,
        message,
      },
    });
  };
}

export function useDeactivateAlert() {
  const { dispatch } = useContext(AlertContext);

  return () => {
    dispatch({
      type: DEACTIVATE_ALERT,
    });
  };
}
