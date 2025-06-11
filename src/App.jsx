import Home from "./Pages/Home";
import Header from "./components/Header";
import { SidebarProvider } from "./components/ui/sidebar";
import SideBarMenu from "./components/Header/SideBarMenu";
import { useDispatch, useSelector } from "react-redux";
import {
  updateDeviceType,
  updateMainDivType,
} from "./store/slices/deviceSlice";
import { useEffect } from "react";
import useTrackWidth from "./utils/customHooks/useElementWidth";
import { Navigate, Route, Routes } from "react-router";
import { Transactions } from "./Pages/Transactions";
import { RecurringPayments } from "./Pages/RecurringPayments";
import { BorrowedLent } from "./Pages/BorrowedLent";
import { Wallets } from "./Pages/Wallets";
import { Reports } from "./Pages/Reports";
import { Settings } from "./Pages/Settings";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const handleResize = () => {
      dispatch(updateDeviceType(window.innerWidth));
    };

    handleResize(); // initial call
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, [dispatch]);

  const mainRef = useTrackWidth((width) => {
    dispatch(updateMainDivType(width));
  });

  const device = useSelector((state) => state.device.deviceType);
  const mainDiv = useSelector((state) => state.device.mainDivType);
  console.log("Device :::::::::::", device);
  console.log("Main :::::::::::", mainDiv);

  return (
    <SidebarProvider
      style={{
        "--sidebar-width": "20rem",
        "--sidebar-width-mobile": "26rem",
      }}
      defaultOpen={false}
    >
      <div className="min-h-screen w-screen flex font-roboto bg-gray-800 text-white">
        <SideBarMenu />
        <div ref={mainRef} className="flex-1">
          <Header />

          <main className="w-screen md:w-auto ">
            <Routes>
              <Route path="/home" element={<Home />} />
              <Route path="/transactions" element={<Transactions />} />
              <Route
                path="/recurring-payments"
                element={<RecurringPayments />}
              />
              <Route path="/borrowed-lent" element={<BorrowedLent />} />
              <Route path="/wallets" element={<Wallets />} />
              <Route path="/reports" element={<Reports />} />
              <Route path="/settings" element={<Settings />} />
              <Route path="/" element={<Navigate to="/home" replace />} />
              <Route path="*" element={<Navigate to="/home" replace />} />
            </Routes>
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
}

export default App;
