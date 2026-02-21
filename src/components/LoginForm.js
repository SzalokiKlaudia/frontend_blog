import { useState } from "react";
import FormButton from "./FormButton";

function LoginForm({ loginReg, error }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      email: email,
      password: password,
    };

    loginReg(data, "/login");
  };
  return (
    <form className="pt-5 login-form" onSubmit={handleSubmit}>
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
      <FormButton variant="log-reg-btn-container">Login</FormButton>
    </form>
  );
}

export default LoginForm;
