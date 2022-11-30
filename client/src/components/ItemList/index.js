import React from "react";
import { useQuery } from "@apollo/client";
import { Row, Col } from "react-bootstrap";
import ProductCard from "../ProductCard";
import { QUERY_ALL_ITEMS } from "../../utils/queries";

function ItemList() {
  const { data } = useQuery(QUERY_ALL_ITEMS);
  // console.log(data);
  const items = data?.items || [];
  return (
    <>
      <Row xs={1} md={3} className="g-3 ">
        {items.map((item) => (
          <Col>
            <ProductCard
              key={item._id}
              _id={item._id}
              name={item.itemName}
              price={item.itemPrice}
              image={item.itemImage}
              desc={item.itemDesc}
            />
          </Col>
        ))}
      </Row>
    </>
  );
}

export default ItemList;
