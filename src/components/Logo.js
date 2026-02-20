import { Link } from "react-router-dom";

function Logo() {
  return (
    <div
      className="px-6 py-2 rounded-lg
          transition-all duration-500
          hover:border-transparent
          hover:ring-2 hover:ring-white-500"
    >
      <Link to="/">Home</Link>
    </div>
  );
}

export default Logo;
