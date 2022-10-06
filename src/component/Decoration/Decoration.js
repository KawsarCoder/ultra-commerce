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
      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-4">
        {decorationItem.map((decoration) => (
          <Product key={decoration.id} product={decoration}></Product>
        ))}
      </div>
    </div>
  );
};

export default Decoration;
