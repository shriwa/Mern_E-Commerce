import React, { useContext, useState } from "react";
import "./CSS/LoginSignUp.css";
import { AuthContext } from "../Context/Authcontext";

const LoginSignUp = () => {
  const [state, setState] = useState("Login");
  const [formData, setFormData] = useState({
    name: "",
    password: "",
    email: "",
  });
  const [error, setError] = useState("");

  const { login, signup } = useContext(AuthContext);

  const changeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleLogin = async () => {
    try {
      await login(formData.email, formData.password);
      window.location.replace("/");
    } catch (error) {
      setError(error.message);
    }
  };

  const handleSignup = async () => {
    try {
      await signup(formData.name, formData.email, formData.password);
      window.location.replace("/");
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="loginSignUp">
      <div className="loginSignUp-container">
        <h1>{state}</h1>
        <div className="loginSignUp-fields">
          {state === "Sign Up" ? (
            <input
              name="name"
              onChange={changeHandler}
              value={formData.username}
              type="text"
              autoCapitalize="off"
              placeholder="Name"
            />
          ) : (
            <></>
          )}
          <input
            name="email"
            value={formData.email}
            onChange={changeHandler}
            type="email"
            placeholder="Email"
            autoCapitalize="off"
          />
          <input
            name="password"
            value={formData.password}
            onChange={changeHandler}
            type="password"
            placeholder="Password"
            autoCapitalize="off"
          />
        </div>
        {error && <div className="text-red-500 mb-5">{error}</div>}
        <button
          onClick={() => {
            state === "Login" ? handleLogin() : handleSignup();
          }}
        >
          Continue
        </button>
        {state === "Sign Up" ? (
          <p className="loginSignUp-login">
            Already have an account?{" "}
            <span
              onClick={() => {
                setState("Login");
                setFormData({ email: "", password: "", name: "" });
              }}
            >
              Login
            </span>
          </p>
        ) : (
          <p className="loginSignUp-login">
            Don't have an account?{" "}
            <span
              onClick={() => {
                setState("Sign Up");
                setFormData({ email: "", password: "", name: "" });
              }}
            >
              SignUp
            </span>
          </p>
        )}

        <div className="loginSignUp-agree">
          <input type="checkbox" name="" id="" />
          <p>By continuing, I agree to the terms of use & privacy policy</p>
        </div>
      </div>
    </div>
  );
};

export default LoginSignUp;
