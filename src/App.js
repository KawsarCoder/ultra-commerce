import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import About from "./component/About/About";
import Home from "./component/Home/Home";
import Items from "./component/Mobile/Mobile";
import Laptop from "./component/Laptop/Laptop";
import Main from "./component/Main/Main";
import Cosmetics from "./component/Cosmetics/Cosmetics";
import Groceries from "./component/Groceries/Groceries";
import Decoration from "./component/Decoration/Decoration";
import Buynow from "./component/Buynow/Buynow";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: "/",
          loader: async () => {
            return fetch("https://dummyjson.com/products");
          },
          element: <Home></Home>,
        },
        {
          path: "home",
          loader: async () => {
            return fetch("https://dummyjson.com/products");
          },
          element: <Home></Home>,
        },
        {
          path: "mobile",
          loader: async () => {
            return fetch("https://dummyjson.com/products");
          },
          element: <Items></Items>,
        },
        {
          path: "laptop",
          loader: async () => {
            return fetch("https://dummyjson.com/products");
          },
          element: <Laptop></Laptop>,
        },
        {
          path: "cosmetics",
          loader: async () => {
            return fetch("https://dummyjson.com/products");
          },
          element: <Cosmetics></Cosmetics>,
        },
        {
          path: "groceries",
          loader: async () => {
            return fetch("https://dummyjson.com/products");
          },
          element: <Groceries></Groceries>,
        },
        {
          path: "decoration",
          loader: async () => {
            return fetch("https://dummyjson.com/products");
          },
          element: <Decoration></Decoration>,
        },
        {
          path: "buy/:productId",
          loader: async ({ params }) => {
            // console.log(params);
            return fetch(`https://dummyjson.com/products/${params.productId}`);
          },
          element: <Buynow></Buynow>,
        },
        {
          path: "about",
          element: <About></About>,
        },
      ],
    },
    { path: "*", element: <div> Error: This path is not available</div> },
  ]);
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
