import React, { useContext } from "react";
import { Card, Button, Form, Row, Col } from "react-bootstrap";
import { CartContext } from "../../CartContext";
import { Link } from "react-router-dom";
import Auth from "../../utils/auth";
import "./index.css";

function ProductCard(props) {
  const { image, name, _id, price, desc } = props;
  // console.log(props);
  // const product = props.product;
  // console.log(product);
  const cart = useContext(CartContext);
  // const productQuantity = cart.getProductQuantity(_id);
  // console.log(cart.items);
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
          <Button variant="primary" onClick={() => cart.addOneToCart(_id)}>
            Add to Cart
          </Button>
        ) : null}

        {/* {productQuantity > 0 ? (
          <>
            <Form as={Row}>
              <Form.Label column="true" sm="6">
                In Cart: {productQuantity}
              </Form.Label>
              <Col sm="6">
                <Button
                  sm="6"
                  onClick={() => cart.addOneToCart(_id)}
                  className="mx-2"
                >
                  +
                </Button>
                <Button
                  sm="6"
                  onClick={() => cart.removeOneFromCart(_id)}
                  className="mx-2"
                >
                  -
                </Button>
              </Col>
            </Form>
            <Button
              variant="danger"
              className="my-2"
              onClick={() => cart.deleteFromCart(_id)}
            >
              Remove from cart
            </Button>
          </>
        ) : (
          <Button variant="primary" onClick={() => cart.addOneToCart(_id)}>
            Add to Cart
          </Button>
        )} */}
      </Card.Body>
    </Card>
  );
}

export default ProductCard;
