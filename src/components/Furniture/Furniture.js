import React, { useState } from "react";
import Filters from "../Filters/Filters";
import ProductList from "../ProductList/ProductList";
import "./furniture.css";
import Bestsellers1 from "../../static/images/bestsellers1.jfif";
import Bestsellers2 from "../../static/images/bestsellers2.jfif";
import Bestsellers3 from "../../static/images/bestsellers3.jfif";
import Bestsellers4 from "../../static/images/bestsellers4.jpg";

export default function Furniture() {
  const [products, setProducts] = useState([
    { id: 1, name: "Sofa Francesca", price: "300$", image: Bestsellers1 },
    { id: 2, name: "Sofa Francesca", price: "300$", image: Bestsellers2 },
    { id: 3, name: "Sofa Francesca", price: "300$", image: Bestsellers3 },
    { id: 4, name: "Sofa Francesca", price: "300$", image: Bestsellers4 },
    { id: 4, name: "Sofa Francesca", price: "300$", image: Bestsellers4 },
  ]);
  return (
    <div className="furniture fctm">
      <Filters />
      <ProductList data={products} />
    </div>
  );
}
