import "./App.css";
import NavBar from "./components/NavBar";
import { UserProvider } from "./context/UserContext";
import AppRoutes from "./routes/AppRoutes";

function app() {
  return (
    <UserProvider>
      <NavBar />
      <AppRoutes />
    </UserProvider>
  );
}

export default app;
