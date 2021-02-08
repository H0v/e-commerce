import React from "react";
import "./bestsellers.css";

import LongArrow from "../../static/svg/longArrow.svg";
import ProductList from "../ProductList/ProductList";

export default function Bestsellers() {
  return (
    <div className="bestsellers">
      <p className="fctm bestsellersTitle">Bestsellers</p>
      <ProductList />
      <div className="seeMore">
        <p className="fctm">see more</p>
        <img className="seeArrow" alt="longArrow" src={LongArrow}></img>
      </div>
    </div>
  );
}
