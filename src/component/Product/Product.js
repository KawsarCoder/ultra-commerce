import React from "react";
import "./Product.css";
import { Link } from "react-router-dom";

const Product = ({ product }) => {
  const {
    id,
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
      <div className="grid lg:grid-cols-2  md:grid-cols-6 grid-cols-6 font-bold m-auto">
        <button className="bg-sky-500 m-5 py-3 text-white hover:bg-orange-500  rounded-lg">
          Add to cart
        </button>
        <Link to={`/buy/${id}`}>
          <button className="bg-sky-500 m-5 py-3 px-6 text-white hover:bg-orange-500  rounded-lg">
            Buy Now
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Product;
