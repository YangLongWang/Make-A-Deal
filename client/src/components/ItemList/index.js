import React from "react";
import { useQuery } from "@apollo/client";
import ProductCard from "../ProductCard";
import { QUERY_ALL_ITEMS } from "../../utils/queries";

function ItemList() {
  const { data } = useQuery(QUERY_ALL_ITEMS);
  console.log(data);
  const items = data?.items || [];
  return (
    <>
      {items.map((item) => (
        <ProductCard
          key={item._id}
          _id={item._id}
          name={item.itemName}
          price={item.itemPrice}
          image={item.itemImage}
          desc={item.itemDesc}
        />
      ))}
    </>
  );
}

export default ItemList;
