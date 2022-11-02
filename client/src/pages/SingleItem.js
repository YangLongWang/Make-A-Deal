// import { useMutation } from '@apollo/client';
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { QUERY_ITEM } from "../utils/queries";
import Auth from "../utils/auth";
import { Row, Col, Button, Card } from "react-bootstrap";

function SingleItem() {
  const { id } = useParams();

  // const [currentProduct, setCurrentProduct] = useState({});

  const { loading, data } = useQuery(QUERY_ITEM, {
    variables: { _id: id },
  });
  // console.log(id, data);

  const product = data?.item || [];

  // useEffect(() => {
  //   if (product.length) {
  //     setCurrentProduct(product.find((product) => product._id === id));
  //   }
  // }, [product, id]);

  return (
    <Row className="justify-content-sm-center">
      {product ? (
        <Col sm="auto" xs="auto">
          <Card border="dark" style={{ width: "18rem" }} className="">
            <Card.Body>
              <Card.Title>{product.itemName}</Card.Title>
              <Card.Img
                variant="top"
                src={`data:image/png;base64, ${product.itemImage}`}
                alt={product.itemName}
              />
              <Card.Text>{product.itemDesc}</Card.Text>
              <Card.Text>
                <strong>Price:</strong>${product.itemPrice}{" "}
                {Auth.loggedIn() ? (
                  <Button>Add to Cart</Button>
                ) : (
                  <Card.Text>
                    You must be logged in to purchase an item!
                  </Card.Text>
                )}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ) : loading ? (
        <h2>Loading...</h2>
      ) : (
        <div>
          <h2>No items</h2>
        </div>
      )}
    </Row>
  );
}

export default SingleItem;
