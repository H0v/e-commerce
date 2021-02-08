import React from "react";
import Bestsellers1 from "../../static/images/bestsellers1.jfif";
import Bestsellers2 from "../../static/images/bestsellers2.jfif";
import Bestsellers3 from "../../static/images/bestsellers3.jfif";
import Bestsellers4 from "../../static/images/bestsellers4.jpg";
import CartIcon from "../../static/svg/CartIcon.svg";
import "./productList.css";

export default function ProductList() {
  return (
    <div className="productsList">
      <div className="productsItem">
        <img className="itemImage" alt="item" src={Bestsellers1}></img>
        <div className="priceBlock">
          <div className="priceInfo">
            <p className="itemTitle fctm">Sofa Francesca</p>
            <p className="itemPrice fctm">300$</p>
            <button className="addButton fctm">
              <img id="cartIcon" alt="cartIcon" src={CartIcon}></img>
              Add
            </button>
          </div>
        </div>
      </div>
      <div className="productsItem">
        <img className="itemImage" alt="item" src={Bestsellers2}></img>
        <div className="priceBlock">
          <div className="priceInfo">
            <p className="itemTitle fctm">Sofa Francesca</p>
            <p className="itemPrice fctm">300$</p>
            <button className="addButton fctm">
              <img alt="cartIcon" src={CartIcon}></img>
              Add
            </button>
          </div>
        </div>
      </div>
      <div className="productsItem">
        <img className="itemImage" alt="item" src={Bestsellers3}></img>
        <div className="priceBlock">
          <div className="priceInfo">
            <p className="itemTitle fctm">Sofa Francesca</p>
            <p className="itemPrice fctm">300$</p>
            <button className="addButton fctm">
              <img alt="cartIcon" src={CartIcon}></img>
              Add
            </button>
          </div>
        </div>
      </div>
      <div className="productsItem">
        <img className="itemImage" alt="item" src={Bestsellers4}></img>
        <div className="priceBlock">
          <div className="priceInfo">
            <p className="itemTitle fctm">Sofa Francesca</p>
            <p className="itemPrice fctm">300$</p>
            <button className="addButton fctm">
              <img alt="cartIcon" src={CartIcon}></img>
              Add
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
