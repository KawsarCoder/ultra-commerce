import React from "react";
import { useLoaderData } from "react-router-dom";
import Product from "../Product/Product";
import "./Home.css";
const Home = () => {
  const productsApi = useLoaderData();
  const products = productsApi.products;
  // console.log(products);
  return (
    <div className="container">
      <h1>Home page</h1>
      <div className="grid lg:grid-cols-4 md:grid-cols-3 gap-4">
        {products.map((product) => (
          <Product key={product.id} product={product}></Product>
        ))}
      </div>
    </div>
  );
};

export default Home;
