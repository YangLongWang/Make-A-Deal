import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { ADD_USER } from "../utils/mutations";
import Auth from "../utils/auth";
import { Link } from "react-router-dom";
import Logo from "../assets/images/favicon (2).ico";

function Signup(props) {
  const [formState, setFormState] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [addUser, { error }] = useMutation(ADD_USER);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
    console.log(name, value);
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await addUser({
        variables: {
          // username: formState.username,
          // email: formState.email,
          // password: formState.password,
          ...formState,
        },
      });
      console.log(response);
      const token = response.data.addUser.token;
      Auth.login(token);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="login-signup">
      <div className="form-box">
        <form className="register-box" onSubmit={handleFormSubmit}>
          <h1>register</h1>
          <input
            type="text"
            name="username"
            placeholder="username"
            onChange={handleChange}
          />
          <input
            type="email"
            name="email"
            placeholder="email"
            onChange={handleChange}
          />
          <input
            type="password"
            name="password"
            placeholder="password"
            onChange={handleChange}
          />
          <button>Signup</button>
        </form>
        {error && <div className="error-text">Sign up failed</div>}
      </div>

      <div className="con-box right">
        <h2>
          Welcome to <span>TradeWay</span>
        </h2>
        <p>
          Come and find exciting <span>items</span>
        </p>
        <img src={Logo} alt="logo" />
        <p>Already have an account</p>
        <button id="login">
          <Link to="/login">Go Login</Link>
        </button>
      </div>
    </div>
  );
}

export default Signup;
