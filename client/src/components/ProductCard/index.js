import React from "react";
import { Card, Button, Form, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import Auth from "../../utils/auth";

function ProductCard(item) {
  // const { image, name, _id, price, desc } = item;
  const { name, price, _id, image, desc } = item.product;

  const purchase = () => {};

  return (
    <Card className="item-border">
      <Card.Body>
        <Link to={`/products/${_id}`}>
          <img alt={name} src={`data:image/png;base64, ${image}`} />
          <h3>{name}</h3>
        </Link>
        <div className="item-detail">
          <p>{desc}</p>
          <span>Total: ${price}</span>
        </div>
        {Auth.loggedIn() ? (
          <Button variant="primary" onClick={purchase}>
            Add to Cart
          </Button>
        ) : null}
      </Card.Body>
    </Card>
  );
}

export default ProductCard;
