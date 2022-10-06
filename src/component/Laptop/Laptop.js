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
      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-4">
        {laptopItem.map((laptop) => (
          <Product key={laptop.id} product={laptop}></Product>
        ))}
      </div>
    </div>
  );
};

export default Laptop;
