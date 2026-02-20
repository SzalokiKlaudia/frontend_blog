import Logo from "../components/Logo";

function Nav({ children }) {
  return (
    <nav className="flex bg-[var(--nav-bar)] w-full items-center pl-4 pr-4">
      <Logo />
      {children}
    </nav>
  );
}

export default Nav;
