import { useLocation } from "react-router-dom";
import Logo from "../components/Logo";

function Nav({ children }) {
  const location = useLocation();


  const AuthpPage = location.pathname === "/login" || location.pathname === "/register"

  return (
    <nav className="flex bg-[var(--nav-bar)] w-full items-center pl-4 pr-4">
      <Logo />
      {!AuthpPage && children}
    </nav>
  );
}

export default Nav;
