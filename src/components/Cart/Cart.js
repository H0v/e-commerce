import React, { useState } from "react";
import item1 from "../../static/images/bestsellers1.jfif";
import item2 from "../../static/images/bestsellers2.jfif";
import Bestsellers1 from "../../static/images/bestsellers1.jfif";
import Bestsellers2 from "../../static/images/bestsellers2.jfif";
import "./cart.css";

export default function Cart() {
  const [cartItems, setCartItems] = useState([
    { id: 1, name: "Sofa Francesca", price: "300$", image: Bestsellers1 },
    { id: 2, name: "Sofa Francesca", price: "300$", image: Bestsellers2 },
  ]);
  return (
    <div className="cart">
      {cartItems.map((el) => {
        return (
          <div key={"product"+el.id}className="singleCartItem">
            <img alt="img" src={el.image}></img>
            <div className="buyBlock">
              <div className="buyInfo">
                <p className="itemTitle fctm">{el.name}</p>
                <p className="itemPrice fctm">{el.price}</p>
              </div>
              <button className="buyButton fctm">Buy Now</button>
            </div>
          </div>
        );
      })}
    </div>
  );
}
