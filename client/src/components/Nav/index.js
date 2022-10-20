import React, { useState, useContext } from "react";
import { Button, Container, Navbar, Modal } from "react-bootstrap";
import { CartContext } from "../../CartContext";
import CartProduct from "../CartProduct";
import { Link } from "react-router-dom";
import Auth from "../../utils/auth";

const Nav = () => {
  const cart = useContext(CartContext);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const productsCount = cart.items.reduce(
    (sum, product) => sum + product.quantity,
    0
  );

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
    <>
      <Navbar expand="sm">
        <Navbar.Brand href="/">E-commerce Store</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Button onClick={handleShow}>Cart ({productsCount} Items)</Button>
        </Navbar.Collapse>
      </Navbar>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Shopping Cart</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {productsCount > 0 ? (
            <>
              <p>Items in your cart:</p>
              {cart.items.map((currentProduct, index) => (
                <CartProduct
                  key={index}
                  id={currentProduct.id}
                  quantity={currentProduct.quantity}
                />
              ))}

              <h1>Total: {cart.getTotalCost().toFixed(2)}</h1>

              <Button variant="success">Purchase items!</Button>
            </>
          ) : (
            <h1>There are no items in your cart!</h1>
          )}
          <h1>This is the modal body</h1>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Nav;
