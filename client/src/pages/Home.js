import React, { useState } from "react";
import ItemList from "../components/ItemList";
import { Row, Col } from "react-bootstrap";
import { productsArray } from "../productsStore";
import ProductCard from "../components/ProductCard";

const Home = () => {
  return (
    <Col>
      <Row>
        <h1 align="center" className="p-3">
          Welcome to the store!
        </h1>
      </Row>
      <Row xs={2} md={4} className="g-3 justify-content-center ">
        <ItemList />
      </Row>
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
