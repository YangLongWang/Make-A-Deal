import React, { useState, useContext } from "react";
import { Button, Navbar, Modal } from "react-bootstrap";
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

  const checkout = async () => {
    await fetch("http://localhost:3000/checkout", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ items: cart.items }),
    })
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        if (response.url) {
          window.location.assign(response.url);
        }
      });
  };

  return (
    <>
      {Auth.loggedIn() ? (
        <Navbar expand="xl" className="bg-success">
          <Navbar>
            <Navbar.Brand href="/">All Products</Navbar.Brand>
            <Navbar.Brand href="/dashboard">My Listings</Navbar.Brand>
          </Navbar>
          <Navbar className="justify-content-end">
            <Button variant="info" onClick={handleShow}>
              Cart ({productsCount} Items)
            </Button>
          </Navbar>
        </Navbar>
      ) : (
        <Navbar expand="xl" className="bg-success">
          <Navbar.Brand href="/">All Products</Navbar.Brand>
        </Navbar>
      )}

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

              <Button variant="success" onClick={checkout}>
                Purchase items!
              </Button>
            </>
          ) : (
            <h2>There are no items in your cart!</h2>
          )}
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Nav;
