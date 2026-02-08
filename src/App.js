import logo from "./logo.svg";
import "./App.css";
import useAuthContext from "./context/AuthContext";
import { Route, Routes } from "react-router-dom";
import GuestLayout from "./layouts/GuestLayout";
import Home from "./pages/Home";
import UserLayout from "./layouts/UserLayout";
import Login from "./pages/Login";
import Registration from "./pages/Registration";

function App() {
  const { user } = useAuthContext();

  return (
    <div className="App">
      <Routes>
        {user !== null ? (
          <Route element={<UserLayout />}>
            <Route index element={<Home />} />
          </Route>
        ) : (
          <Route element={<GuestLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Registration />} />
          </Route>
        )}
      </Routes>
    </div>
  );
}

export default App;
