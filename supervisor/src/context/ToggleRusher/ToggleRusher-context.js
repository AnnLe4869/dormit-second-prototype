import { createContext, useState } from "react";

export const ToggleRusherContext = createContext();

const ToggleRusherProvider = (props) => {
  const [rusherStatus, setRusherStatus] = useState("");

  return (
    <ToggleRusherContext.Provider value={[rusherStatus, setRusherStatus]}>
      {props.children}
    </ToggleRusherContext.Provider>
  );
};
export default ToggleRusherProvider;
