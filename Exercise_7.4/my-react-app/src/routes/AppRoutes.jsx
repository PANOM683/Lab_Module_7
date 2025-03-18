import { Routes, Route } from "react-router-dom";
import Homepage from "../pages/Homepage";
import BitcoinRates from "../components/BitcoinRates";
import LoginForm from "../components/LoginForm";

export default function AppRoutes(props) {
  return (
    <Routes>
      <Route index element={<Homepage {...props} />} />
      <Route path="login" element={<LoginForm {...props} />} />
      <Route path="bitcoin" element={<BitcoinRates />} />
    </Routes>
  );
}
