import React from "react";
import "./bestsellers.css";
import Bestsellers1 from "../../static/images/bestsellers1.jfif";
export default function Bestsellers() {
  return (
    <div className="bestsellers">
      <p className="fctm bestsellersTitle">Bestsellers</p>
      <div className="bestsellersList">
        <div className="bestsellersItem">
          <img alt="item" src={Bestsellers1}></img>
          <div className="priceBlock"></div>
        </div>
        <div className="bestsellersItem">
          <div className="priceBlock"></div>
        </div>
        <div className="bestsellersItem">
          <div className="priceBlock"></div>
        </div>
        <div className="bestsellersItem">
          <div className="priceBlock"></div>
        </div>
      </div>
    </div>
  );
}
