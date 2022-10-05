import React from "react";
import { useLoaderData } from "react-router-dom";
import Product from "../Product/Product";
const Home = () => {
  const productsApi = useLoaderData();
  const products = productsApi.products;
  console.log(products);
  return (
    <div>
      <h1>Home page</h1>
      {products.map((product) => (
        <Product key={product.id} product={product}></Product>
      ))}
    </div>
  );
};

export default Home;
