import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useAuthContext from "../context/AuthContext";

function Registration() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password_confirmation, setPasswordConfirmation] = useState("");
  const { loginReg, error } = useAuthContext();
  const [showNoValidEmail, setShowNovalidEmail] = useState(false);
  const isValidateEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,3}$/;
  const navigate = useNavigate();

  const handleChange = (e) => {
    const value = e.target.value;
    setEmail(value);
  };

  const handleValidate = (e) => {
    if (email.length > 0) {
      setShowNovalidEmail(!isValidateEmail.test(email));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("ready");

    const data = {
      name: name,
      email: email,
      password: password,
      password_confirmation: password_confirmation,
    };
    console.log(data);

    loginReg(data, "/register");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="">
          <label htmlFor="name" className="form-label"></label>
          <input
            type="text"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
            className="form-control reg-input"
            id="name"
            placeholder="Username"
            name="name"
          />
          <div></div>
        </div>

        <div className="">
          <label htmlFor="email" className="form-label"></label>
          <input
            type="email"
            value={email}
            onChange={handleChange}
            className="form-control reg-input"
            id="email"
            placeholder="email"
            name="email"
          />
          <div></div>
        </div>

        <div className="mb-3 mt-3">
          <label htmlFor="pwd" className="form-label"></label>
          <input
            type="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            onBlur={handleValidate}
            className="form-control reg-input"
            id="pwd"
            placeholder="password"
            name="pwd"
          />
        </div>

        <div className="mb-3 mt-3">
          <label htmlFor="pwd2" className="form-label"></label>
          <input
            type="password"
            value={password_confirmation}
            onChange={(e) => {
              setPasswordConfirmation(e.target.value);
            }}
            className="form-control reg-input"
            id="pwd2"
            placeholder="password confirmation"
            name="pwd2"
          />
        </div>

        <div className="mb-3 mt-5 reg-btn-cont">
          <button type="submit" className="log-reg-btn">
            Join now
          </button>
        </div>
      </form>
    </div>
  );
}

export default Registration;
