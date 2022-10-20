import React from "react";
import { Link } from "react-router-dom";
import Auth from "../../utils/auth";

const Nav = () => {
  return (
    <nav className="navbar">
      {Auth.loggedIn() ? (
        <>
          <div>
            <Link to="/">View Listings</Link>
            <Link to="/dashboard">My Listings</Link>
          </div>
          <div>
            <button type="button">Cart 0 Items</button>
          </div>
        </>
      ) : (
        <>
          <Link to="/">View Listings</Link>
        </>
      )}
    </nav>
  );
};

export default Nav;
