import React from "react";
import { Link } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { Card, Col, Row } from "react-bootstrap";
import { QUERY_ME } from "../../utils/queries";
import "./index.css";

function MyItem() {
  const { data } = useQuery(QUERY_ME);
  let user;

  if (data) {
    user = data.me;
  }

  return (
    <div className="my-item">
      <Link to="/">← Back to Products</Link>

      {user ? (
        <>
          <h2>Product for {user.username}</h2>
          <Row xs={1} md={2} lg={3} className="g-2">
            {user.items.map((item) => (
              <Col key={item._id} className="card-site">
                <Card>
                  <Card.Img
                    variant="top"
                    alt={item.itemName}
                    src={`data:image/jpg;base64, ${item.itemImage}`}
                    className="image-size"
                  />
                  <Card.Body>
                    <Card.Title>{item.itemName}</Card.Title>
                    <Card.Text>${item.itemPrice}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </>
      ) : null}
    </div>
  );
}

export default MyItem;
