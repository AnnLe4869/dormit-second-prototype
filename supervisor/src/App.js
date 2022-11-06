import LeftPanel from "./components/LeftPanel/LeftPanel";
import PhoneVerification from "./components/PhoneVerification/PhoneVerification";
import RightPanel from "./components/RightPanel/RightPanel";
import RusherOnlineRequest from "./components/RusherOnlineRequest/RusherOnlineRequest";
// context
import SelectedOrderProvider from "./context/SelectedOrderCtx";
import OrderProvider from "./context/OrdersCtx";

function App() {
  return (
    <div className="App">
      <SelectedOrderProvider>
        <OrderProvider>
          <LeftPanel />
          <RightPanel />
        </OrderProvider>
      </SelectedOrderProvider>
      {/* <RusherOnlineRequest /> */}
      {/* <PhoneVerification /> */}
    </div>
  );
}

export default App;
