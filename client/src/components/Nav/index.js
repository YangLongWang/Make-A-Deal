import React from "react";
import { Button, Container, Navbar, Modal } from "react-bootstrap";
import { Link } from "react-router-dom";
import Auth from "../../utils/auth";

const Nav = () => {
  return (
    // <nav className="navbar">
    //   {Auth.loggedIn() ? (
    //     <>
    //       <div>
    //         <Link to="/">View Listings</Link>
    //         <Link to="/dashboard">My Listings</Link>
    //       </div>
    //       <div>
    //         <button type="button">Cart 0 Items</button>
    //       </div>
    //     </>
    //   ) : (
    //     <>
    //       <Link to="/">View Listings</Link>
    //     </>
    //   )}
    // </nav>

    <Navbar expand="sm">
      <Navbar.Brand href="/">E-commerce Store</Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse className="justify-content-end">
        <Button>Cart 0 Items</Button>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Nav;
