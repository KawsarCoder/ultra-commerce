import React from "react";
import { useLoaderData } from "react-router-dom";
import Product from "../Product/Product";

const Mobile = () => {
  const productsApi = useLoaderData();
  const items = productsApi.products;
  console.log(items);
  let phoneItem = [];
  for (const singleItem of items) {
    if (singleItem.category === "smartphones") {
      phoneItem.push(singleItem);
    }
  }
  // console.log(laptopItem);
  return (
    <div className="container">
      <h3>All products</h3>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-4">
        {phoneItem.map((phone) => (
          <Product key={phone.id} product={phone}></Product>
        ))}
      </div>
    </div>
  );
};

export default Mobile;
