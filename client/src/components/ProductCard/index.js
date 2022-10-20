import React, { useContext } from "react";
import { Card, Button, Form, Row, Col } from "react-bootstrap";
import { CartContext } from "../../CartContext";
import { Link } from "react-router-dom";
import Auth from "../../utils/auth";

function ProductCard(props) {
  // const { image, name, _id, price, desc } = props.item;
  const product = props.product;
  const cart = useContext(CartContext);
  const productQuantity = cart.getProductQuantity(product.id);
  console.log(cart.items);
  return (
    <Card className="item-border">
      <Card.Body>
        <Link to={`/products/${product._id}`}>
          {/* <img
            alt={product.name}
            src={`data:image/png;base64, ${product.image}`}
          /> */}
          <Card.Title>{product.name}</Card.Title>
        </Link>
        <div className="item-detail">
          {/* <p>{product.desc}</p> */}
          <Card.Text>${product.price}</Card.Text>
        </div>
        {/* {Auth.loggedIn() ? (
          <Button
            variant="primary"
            onClick={() => cart.addOneToCart(product.id)}
          >
            Add to Cart
          </Button>
        ) : null} */}
        {productQuantity > 0 ? (
          <>
            <Form as={Row}>
              <Form.Label column="true" sm="6">
                In Cart: {productQuantity}
              </Form.Label>
              <Col sm="6">
                <Button
                  sm="6"
                  onClick={() => cart.addOneToCart(product.id)}
                  className="mx-2"
                >
                  +
                </Button>
                <Button
                  sm="6"
                  onClick={() => cart.removeOneFromCart(product.id)}
                  className="mx-2"
                >
                  -
                </Button>
              </Col>
            </Form>
            <Button
              variant="danger"
              className="my-2"
              onClick={() => cart.deleteFromCart(product.id)}
            >
              Remove from cart
            </Button>
          </>
        ) : (
          <Button
            variant="primary"
            onClick={() => cart.addOneToCart(product.id)}
          >
            Add to Cart
          </Button>
        )}
      </Card.Body>
    </Card>
  );
}

export default ProductCard;
