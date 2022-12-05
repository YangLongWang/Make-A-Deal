import React from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useStoreContext } from "../../utils/GlobalState";
import { ADD_TO_CART } from "../../utils/actions";
import { idbPromise } from "../../utils/helpers";
import Auth from "../../utils/auth";
import "./index.css";

function ProductCard(props) {
  const [state, dispatch] = useStoreContext();
  const { image, name, _id, price, desc } = props;
  const { cart } = state;

  const addToCart = () => {
    const itemInCart = cart.find((cartItem) => cartItem._id === _id);
    if (itemInCart) {
      idbPromise("cart", "put", {
        ...itemInCart,
        purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1,
      });
    } else {
      dispatch({
        type: ADD_TO_CART,
        product: { ...props, purchaseQuantity: 1 },
      });
      idbPromise("cart", "put", { ...props, purchaseQuantity: 1 });
    }
  };

  return (
    <Card style={{ width: "14rem" }} className="mx-auto text-center">
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
          <Button variant="primary" onClick={addToCart}>
            Add to Cart
          </Button>
        ) : null}
      </Card.Body>
    </Card>
  );
}

export default ProductCard;
