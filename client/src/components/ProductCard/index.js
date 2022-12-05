import React, { useContext } from "react";
import { Card, Button } from "react-bootstrap";

import { Link } from "react-router-dom";
import Auth from "../../utils/auth";
import "./index.css";

function ProductCard(props) {
  const { image, name, _id, price, desc } = props;

  return (
    <Card style={{ width: "17rem" }} className="mx-auto text-center">
      <Card.Body>
        <Link to={`/products/${_id}`}>
          <img
            alt={name}
            src={`data:image/png;base64, ${image}`}
            className="image-size"
          />
          <Card.Title>{name}</Card.Title>
        </Link>
        <div className="">
          <Card.Text>{desc}</Card.Text>
          <Card.Text>${price}</Card.Text>
        </div>
        {Auth.loggedIn() ? (
          <Button variant="primary">Add to Cart</Button>
        ) : null}
      </Card.Body>
    </Card>
  );
}

export default ProductCard;
