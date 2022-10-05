import React from "react";
import { useLoaderData } from "react-router-dom";
import Product from "../Product/Product";
const Groceries = () => {
  const productsApi = useLoaderData();
  const items = productsApi.products;
  let groceriesItem = [];
  for (const singleGroceries of items) {
    if (singleGroceries.category === "groceries") {
      groceriesItem.push(singleGroceries);
    }
  }
  return (
    <div>
      <h3>All products</h3>
      {groceriesItem.map((groceries) => (
        <Product key={groceries.id} product={groceries}></Product>
      ))}
    </div>
  );
};

export default Groceries;
