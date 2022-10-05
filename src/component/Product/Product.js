import React from "react";
import "./Product.css";

const Product = ({ product }) => {
  const {
    title,
    thumbnail,
    stock,
    description,
    rating,
    price,
    discountPercentage,
  } = product;
  return (
    <div className="product-wrapper">
      <img id="product-images" src={thumbnail} alt="" />
      <h1>Product Name: {title} </h1>
      <p>
        Details:{" "}
        {description.length < 50
          ? description
          : description.slice(0, 50) + "..."}
      </p>
      <h5>Rating: {rating}</h5>
      <h5>Stock: {stock}</h5>
      <h5>Discount: {discountPercentage} %</h5>
      <h5>Price: {price} $</h5>
    </div>
  );
};

export default Product;
