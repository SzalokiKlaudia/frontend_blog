import { Link, Outlet, useLocation } from "react-router-dom";
import Nav from "../components/Nav";
import useAuthContext from "../context/AuthContext";
import LogRegBtn from "../components/LogRegBtn";

export default function UserLayout() {
  const { user, logOut } = useAuthContext();
  const location = useLocation();

  return (
    <div className="user-container w-full">
      <Nav>
        <LogRegBtn logOut={logOut}>Logout</LogRegBtn>
      </Nav>
      <Outlet />
    </div>
  );
}
