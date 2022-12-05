import React, { useState } from "react";
import ItemList from "../components/ItemList";
import { Row, Col } from "react-bootstrap";

const Home = () => {
  return (
    <Col>
      <Row>
        <h1 align="center" className="p-3">
          Welcome to the store!
        </h1>
      </Row>

      <ItemList />

      {/* <Row xs={1} md={3} className="g-4">
        {productsArray.map((product, index) => (
          <Col align="center" key={index}>
            <ProductCard product={product} />
            <ItemList product={product} />
          </Col>
        ))}
      </Row> */}
    </Col>
  );
};

export default Home;
