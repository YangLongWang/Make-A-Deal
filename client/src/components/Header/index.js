import React from "react";
import { Link } from "react-router-dom";

import { Stack, Button } from "react-bootstrap";

import Auth from "../../utils/auth";
import "./index.css";

const Header = () => {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };

  return (
    <Stack direction="horizontal" gap={3}>
      <div className="title">
        <Link to="/">
          <h1>Make A Deal</h1>
        </Link>
      </div>

      {Auth.loggedIn() ? (
        <div className="ms-auto">
          <Button variant="info" onClick={logout}>
            <Link to="/">Logout</Link>
          </Button>
        </div>
      ) : (
        <>
          <Button variant="info" className="ms-auto">
            <Link to="/login">Login</Link>
          </Button>
          <div className="vr" />
          <Button variant="info">
            <Link to="/signup">Signup</Link>
          </Button>
        </>
      )}
    </Stack>
  );
};

export default Header;
