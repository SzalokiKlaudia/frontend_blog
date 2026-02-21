import { useState } from "react";
import FormButton from "./FormButton";
import useAuthContext from "../context/AuthContext";

function LoginForm() {
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
    console.log("elküldtem");
  };
  return (
    <form className="pt-5 login-reg-form" onSubmit={handleSubmit}>
      <div className="mb-3">
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
      <div className="mb-3">
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
      <div>
        <FormButton variant="log-reg-btn-container">Login</FormButton>
      </div>
    </form>
  );
}

export default LoginForm;
