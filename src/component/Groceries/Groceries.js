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
      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-4">
        {groceriesItem.map((groceries) => (
          <Product key={groceries.id} product={groceries}></Product>
        ))}
      </div>
    </div>
  );
};

export default Groceries;
