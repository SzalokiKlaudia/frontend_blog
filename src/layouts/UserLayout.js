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
      <Nav>
        <div className="ml-auto flex gap-4 items-center">
          <span>⭐Hello {user.name}</span>
          <LogRegBtn>
            <Link to="/user">Profile</Link>
          </LogRegBtn>

          <LogRegBtn logOut={logOut}>Logout</LogRegBtn>
        </div>
      </Nav>
      <main className="main-user">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
