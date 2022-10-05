import React from "react";
import { useLoaderData } from "react-router-dom";
import Product from "../Product/Product";
const Decoration = () => {
  const productsApi = useLoaderData();
  const items = productsApi.products;
  let decorationItem = [];
  for (const singleDecoration of items) {
    if (singleDecoration.category === "home-decoration") {
      decorationItem.push(singleDecoration);
    }
  }
  return (
    <div>
      <h3>All products</h3>
      {decorationItem.map((decoration) => (
        <Product key={decoration.id} product={decoration}></Product>
      ))}
    </div>
  );
};

export default Decoration;
