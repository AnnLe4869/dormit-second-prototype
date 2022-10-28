import React from "react";
import { Tooltip } from "@mui/material";
import LeftPanel__Body from "../LeftPanel/components/LeftPanel__Body";

const OrderHover = React.forwardRef(LeftPanel__Body(props, ref) {
  //  Spread the props to the underlying DOM element.
  return (
    <div {...props} ref={ref}>
      Bin
    </div>
  );
});

// ...

<Tooltip title="Delete">
  <OrderHover />
</Tooltip>;
