import React, { useState } from "react";
import ItemList from "../components/ItemList";
import { Row, Col } from "react-bootstrap";
import { productsArray } from "../productsStore";
import ProductCard from "../components/ProductCard";

const Home = () => {
  return (
    <>
      {/* <main className="">
        <ItemList />
      </main> */}
      <h1 align="center" className="p-3">
        Welcome to the store!
      </h1>
      <Row xs={1} md={3} className="g-4">
        {productsArray.map((product, index) => (
          <Col align="center" key={index}>
            {/* <ProductCard product={product} /> */}
            <ItemList product={product} />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default Home;
