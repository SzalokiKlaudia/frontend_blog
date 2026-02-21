import { Link, Outlet } from "react-router-dom";
import Nav from "../components/Nav";
import LogRegBtn from "../components/LogRegBtn";
import Footer from "../components/Footer";

export default function GuestLayout() {
  return (
    <div className="guest-container w-full">
      <Nav>
        <div className="ml-auto flex gap-4">
          <LogRegBtn>
            <Link to="/login">Login</Link>
          </LogRegBtn>
          <LogRegBtn>
            <Link to="/register">Register</Link>
          </LogRegBtn>
        </div>
      </Nav>

      <main className="main-guest">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
