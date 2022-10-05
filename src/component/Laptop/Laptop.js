import React from "react";
import { useLoaderData } from "react-router-dom";
import Product from "../Product/Product";

const Laptop = () => {
  const productsApi = useLoaderData();
  const laptopValue = productsApi.products;
  let laptopItem = [];
  for (const singleLaptop of laptopValue) {
    if (singleLaptop.category === "laptops") {
      laptopItem.push(singleLaptop);
    }
  }
  return (
    <div>
      <h3>All products</h3>
      {laptopItem.map((laptop) => (
        <Product key={laptop.id} product={laptop}></Product>
      ))}
    </div>
  );
};

export default Laptop;
