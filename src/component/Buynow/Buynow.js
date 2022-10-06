import React from "react";
import { useLoaderData } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Buynow = () => {
  const notify = () =>
    toast.success(
      "Your order is confirmed. Thanks for buying !! Always buy from Diamond Tech",
      {
        position: "top-left",
      }
    );
  const product = useLoaderData();
  const { title, thumbnail, stock, price, discountPercentage } = product;

  //   console.log(product);
  return (
    <div>
      <div className="grid lg:grid-cols-1  md:grid-cols-1 bg-blue-200 w-1/3 m-auto my-28 border-4 border-orange-500 rounded-lg p-8 grid-cols-1 font-bold justify-items-center">
        <img className="w-52 rounded-md" src={thumbnail} alt="" />
        <h3>Name: {title}</h3>
        <h5>Stock: {stock}</h5>
        <h5>Discount: {discountPercentage} %</h5>
        <h5>Price: {price} $</h5>
        <button
          onClick={notify}
          className="bg-sky-500 m-5 py-3 text-white hover:bg-orange-500  rounded-lg w-52"
        >
          Place Order
        </button>
      </div>
      <ToastContainer className="lg:m-20 md:m-8 m-3" />
    </div>
  );
};

export default Buynow;
