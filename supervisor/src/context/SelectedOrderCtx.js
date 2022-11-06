import { createContext, useState } from "react";

export const SelectedOrderCtx = createContext();

const SelectedOrderProvider = (props) => {
  const [selectedOrder, setSelectedOrder] = useState('');
  
  return (
    <SelectedOrderCtx.Provider value={[selectedOrder, setSelectedOrder]}>
      {props.children}
    </SelectedOrderCtx.Provider>
  );
};

export default SelectedOrderProvider;
