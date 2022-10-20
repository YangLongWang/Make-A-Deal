import React from "react";
import { Link } from "react-router-dom";
import Auth from "../../utils/auth";

function ProductItem(item) {
  const { image, name, _id, price, desc } = item;
  console.log(image);
  const purchase = () => {};

  return (
    <div className="item-border">
      <Link to={`/products/${_id}`}>
        <img alt={name} src={`data:image/png;base64, ${image}`} />
        <h3>{name}</h3>
      </Link>
      <div className="item-detail">
        <p>{desc}</p>
        <span>Total: ${price}</span>
      </div>
      {Auth.loggedIn() ? <button onClick={purchase}>Purchase</button> : null}
    </div>
  );
}

export default ProductItem;
