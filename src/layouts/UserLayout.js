import { Link, Outlet, useLocation } from "react-router-dom";
import Nav from "../components/Nav";
import useAuthContext from "../context/AuthContext";
import LogRegBtn from "../components/LogRegBtn";
import Footer from "../components/Footer";

export default function UserLayout() {
  const { user, logOut } = useAuthContext();
  const location = useLocation();

  return (
    <div className="user-container w-full">
      <Nav className="navbar-user">
        <span>⭐Hello {user.name}</span>
        <LogRegBtn logOut={logOut}>Logout</LogRegBtn>
      </Nav>
      <main className="main-user">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
