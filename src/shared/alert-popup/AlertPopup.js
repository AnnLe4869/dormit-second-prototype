import { Box } from "@mui/material";
import Alert from "@mui/material/Alert";
import Snackbar from "@mui/material/Snackbar";
import { useContext } from "react";
import { DEACTIVATE_ALERT } from "../../constant";
import { AlertContext } from "../../context/alert/alert-context";

export default function AlertPopup() {
  const { state, dispatch } = useContext(AlertContext);

  const TIMEOUT = 1000 * 5;

  const deactivateAlert = () => {
    dispatch({
      type: DEACTIVATE_ALERT,
    });
  };

  return (
    <Box>
      <Snackbar
        open={state.isActive}
        autoHideDuration={TIMEOUT}
        onClose={deactivateAlert}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert
          onClose={deactivateAlert}
          severity={state.type}
          sx={{ width: "100%" }}
        >
          {state.message}
        </Alert>
      </Snackbar>
    </Box>
  );
}
