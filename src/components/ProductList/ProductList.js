import React from "react";
import CartIcon from "../../static/svg/CartIcon.svg";
import "./productList.css";

export default function ProductList({ data }) {
  return (
    <div className="productsList">
      {data.slice(0, 4).map((el) => {
        return (
          <div key={"product" + el.id} className="productsItem">
            <img className="itemImage" alt="item" src={el.image}></img>
            <div className="priceBlock">
              <div className="priceInfo">
                <p className="itemTitle fctm">{el.name}</p>
                <p className="itemPrice fctm">{el.price}</p>
                <button id={"product" + el.id} className="addButton fctm">
                  <img id="cartIcon" alt="cartIcon" src={CartIcon}></img>
                  Add
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
