import Logo from "../components/Logo";

function Nav({ children }) {
  return (
    <nav>
      <Logo />
      {children}
    </nav>
  );
}

export default Nav;
