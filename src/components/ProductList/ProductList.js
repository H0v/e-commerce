import React from "react";
import CartIcon from "../../static/svg/CartIcon.svg";
import { connect } from "react-redux";
import "./productList.css";
import { addToCart } from "../../redux/actions";

function ProductList({ data, addToCart }) {
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
                <button
                  onClick={() => {
                    addToCart(el);
                  }}
                  id={"product" + el.id}
                  className="addButton fctm"
                >
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

const mapDispatchToProps = {
  addToCart,
};

export default connect(null, mapDispatchToProps)(ProductList);
