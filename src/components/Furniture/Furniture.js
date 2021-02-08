import React from "react";
import Filters from "../Filters/Filters";
import ProductList from "../ProductList/ProductList";
import "./furniture.css";
export default function Furniture() {
  return (
    <div className="furniture fctm">
      <Filters />
      <ProductList />
    </div>
  );
}
