import { Link, Outlet, useLocation } from "react-router-dom";
import useAuthContext from "../context/AuthContext";
import Nav from "../components/Nav";
import LogRegBtn from "../components/LogRegBtn";

export default function GuestLayout() {
  const location = useLocation();

  return (
    <div className="container">
      {location.pathname === "/login" || location.pathname === "/register" ? (
        <Nav />
      ) : (
        <Nav>
          <LogRegBtn>
            <Link to="/login">Login</Link>
          </LogRegBtn>
          <LogRegBtn>
            <Link to="/register">Register</Link>
          </LogRegBtn>
        </Nav>
      )}

      <Outlet />
    </div>
  );
}
