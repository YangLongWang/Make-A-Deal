// import { useMutation } from '@apollo/client';

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { QUERY_ITEM } from "../utils/queries";
import Auth from "../utils/auth";

function Buy() {
  const { id } = useParams();
  console.log(id);
  // const [currentProduct, setCurrentProduct] = useState({});

  const { data, error } = useQuery(QUERY_ITEM, {
    variables: { id },
  });

  // console.log(useQuery(QUERY_ITEM, { variables: id }));
  // console.log(error);
  // console.log(id, data);

  const products = data?.item || [];
  // console.log(products);

  // useEffect(() => {
  //   if (products.length) {
  //     setCurrentProduct(products.find((product) => product._id === id));
  //   }
  // }, [products, id]);

  return (
    <>
      {products ? (
        <div className="">
          <h2>{products.itemName}</h2>
          <img src={`/images/${products.image}`} alt={products.itemName} />
          <p>{products.itemDesc}</p>
          <p>
            <strong>Price:</strong>${products.itemPrice}{" "}
            {Auth.loggedIn() ? (
              <button>Purchase</button>
            ) : (
              <span> You must be logged in to purchase an item!</span>
            )}
            {/* <button>Buy it!</button> */}
          </p>
        </div>
      ) : (
        <div>
          <h2>No item</h2>
        </div>
      )}
    </>
  );
}

export default Buy;
