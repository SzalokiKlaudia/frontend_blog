function LogRegBtn({ children, logOut }) {
  return (
    <div
      className="btn-container px-6 py-2 rounded-lg
          transition-all duration-500
          hover:border-transparent
          hover:ring-2 hover:ring-white-500"
    >
      <button className="" onClick={logOut}>
        {children}
      </button>
    </div>
  );
}

export default LogRegBtn;
