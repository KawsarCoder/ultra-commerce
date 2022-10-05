import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div className="header-wrapper font-medium text-lg py-4 text-amber-300 bg-cyan-600">
      <Link to={"home"}>Home</Link>
      <Link to={"mobile"}>Mobile</Link>
      <Link to={"laptop"}>Laptop</Link>
      <Link to={"cosmetics"}>Cosmetics</Link>
      <Link to={"groceries"}>Groceries</Link>
      <Link to={"decoration"}>Decoration</Link>
      <Link to={"about"}>About</Link>
    </div>
  );
};

export default Header;
