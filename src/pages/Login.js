import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useAuthContext from "../context/AuthContext";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { loginReg, error } = useAuthContext();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      email: email,
      password: password,
    };

    loginReg(data, "/login");
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="">
        <label htmlFor="email" className="form-label"></label>
        <input
          type="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          className="form-control log-input"
          id="email"
          placeholder="email"
          name="email"
          required
        />
      </div>
      <div className="">
        <label htmlFor="pwd" className="form-label"></label>
        <input
          type="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          className="form-control log-input"
          id="pwd"
          placeholder="password"
          name="pwd"
          required
        />
      </div>
      <div className="">
        <button type="submit" className="log-reg-btn">
          Login
        </button>
      </div>
    </form>
  );
}

export default Login;
