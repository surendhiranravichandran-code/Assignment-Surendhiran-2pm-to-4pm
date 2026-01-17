import React from "react";
import "./Product.css"; 

function Product({ name, price }) {
  return (
    <div className="product-card">
      <h3 className="product-name">{name}</h3>
      <p className="product-price">Price: ${price}</p>
    </div>
  );
}

export default Product;
