import React from "react";
import { useLoaderData } from "react-router-dom";
import Product from "../Product/Product";
const Cosmetics = () => {
  const productsApi = useLoaderData();
  const items = productsApi.products;
  console.log(items);
  let cosmeticsItem = [];
  for (const cosmeticLaptop of items) {
    if (
      cosmeticLaptop.category === "fragrances" ||
      cosmeticLaptop.category === "skincare"
    ) {
      cosmeticsItem.push(cosmeticLaptop);
    }
  }
  return (
    <div>
      <h3>All products</h3>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-4">
        {cosmeticsItem.map((cosmetics) => (
          <Product key={cosmetics.id} product={cosmetics}></Product>
        ))}
      </div>
    </div>
  );
};

export default Cosmetics;
