import React, { useState } from "react";
import "./bestsellers.css";
import Bestsellers1 from "../../static/images/bestsellers1.jfif";
import Bestsellers2 from "../../static/images/bestsellers2.jfif";
import Bestsellers3 from "../../static/images/bestsellers3.jfif";
import Bestsellers4 from "../../static/images/bestsellers4.jpg";

import LongArrow from "../../static/svg/longArrow.svg";
import ProductList from "../ProductList/ProductList";

export default function Bestsellers() {
  const [products, setProducts] = useState([
    { id: 1, name: "Sofa Francesca", price: "300$", image: Bestsellers1 },
    { id: 2, name: "Sofa Francesca", price: "300$", image: Bestsellers2 },
    { id: 3, name: "Sofa Francesca", price: "300$", image: Bestsellers3 },
    { id: 4, name: "Sofa Francesca", price: "300$", image: Bestsellers4 },
    { id: 4, name: "Sofa Francesca", price: "300$", image: Bestsellers4 },
  ]);

  return (
    <div className="bestsellers">
      <p className="fctm bestsellersTitle">Bestsellers</p>
      <ProductList data={products} />
      <div className="seeMore">
        <p className="fctm">see more</p>
        <img className="seeArrow" alt="longArrow" src={LongArrow}></img>
      </div>
    </div>
  );
}
