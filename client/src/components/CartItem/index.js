import React from "react";
import { Row, Col, Button } from "react-bootstrap";
import { useStoreContext } from "../../utils/GlobalState";
import { REMOVE_FROM_CART } from "../../utils/actions";
import { idbPromise } from "../../utils/helpers";

const CartItem = ({ item }) => {
  const [, dispatch] = useStoreContext();

  const removeFromCart = (item) => {
    dispatch({
      type: REMOVE_FROM_CART,
      _id: item._id,
    });
    idbPromise("cart", "delete", { ...item });
  };

  return (
    <>
      <Row className="mb-4">
        <Col>
          <img
            src={`data:image/png;base64, ${item.image}`}
            alt="item pic"
            style={{ width: "120px" }}
          />
        </Col>
        <Col>
          <Row>
            <Col>{item.name}:</Col>
            <Col>${item.price}</Col>
          </Row>
          <Row>
            <Col>
              <p>Qty: 1</p>
            </Col>
            <Col>
              <Button
                variant="outline-light"
                role="img"
                aria-label="trash"
                onClick={() => removeFromCart(item)}
              >
                🗑️
              </Button>
            </Col>
          </Row>
        </Col>
      </Row>
      <hr />
    </>
  );
};

export default CartItem;
