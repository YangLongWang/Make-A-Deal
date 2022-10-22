import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { LOGIN } from "../utils/mutations";
import Auth from "../utils/auth";
import { Link } from "react-router-dom";
import Logo from "../assets/images/favicon (2).ico";

function Login() {
  const [formState, setFormState] = useState({
    email: "",
    password: "",
  });
  const [login, { error }] = useMutation(LOGIN);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await login({
        variables: {
          // email: formState.email,
          // password: formState.password,
          ...formState,
        },
      });
      const token = response.data.login.token;
      Auth.login(token);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="login-signup">
      <form className="form-box" onSubmit={handleFormSubmit}>
        <div className="login-box">
          <h1>login</h1>
          <input
            type="email"
            placeholder="email"
            name="email"
            onChange={handleChange}
          />
          <input
            type="password"
            placeholder="password"
            name="password"
            onChange={handleChange}
          />
          <button>Login</button>
        </div>
        {error ? (
          <div>
            <p className="error-text">The provided credentials are incorrect</p>
          </div>
        ) : null}
      </form>
      <div className="con-box right">
        <h2>
          Welcome to <span>TradeWay</span>
        </h2>
        <p>
          Come and look your exciting <span>items</span>
        </p>
        <img src={Logo} alt="logo" />
        <p>Don't have an account</p>
        <button id="register">
          <Link to="/signup">Go Signup</Link>
        </button>
      </div>
    </div>
  );
}

export default Login;
