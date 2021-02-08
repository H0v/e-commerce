import React from "react";
import item1 from "../../static/images/bestsellers1.jfif";
import item2 from "../../static/images/bestsellers2.jfif";
import "./cart.css";

export default function Cart() {
  return (
    <div className="cart">
      <div className="singleCartItem">
        <img alt="img" src={item1}></img>
        <div className="buyBlock">
          <div className="buyInfo">
            <p className="itemTitle fctm">Sofa Francesca</p>
            <p className="itemPrice fctm">300$</p>
          </div>
          <button className="buyButton fctm">Buy Now</button>
        </div>
      </div>
      <div className="singleCartItem">
        <img alt="img" src={item2}></img>
        <div className="buyBlock">
          <div className="buyInfo">
            <p className="itemTitle fctm">Sofa Francesca</p>
            <p className="itemPrice fctm">300$</p>
          </div>
          <button className="buyButton fctm">Buy Now</button>
        </div>
      </div>
    </div>
  );
}
