import React, { useState } from "react";
import { connect } from "react-redux";
import "./cart.css";
import CartIcon from "../../static/svg/CartIcon.svg";

function Cart({ cartItems }) {
  return (
    <div className="cart">
      {cartItems.length !== 0 ? (
        cartItems.map((el) => {
          return (
            <div key={"product" + el.id} className="singleCartItem">
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
        })
      ) : (
        <div className="emptyCart">
          <img src={CartIcon}></img>
          <p className="fctm">Your Cart is Empty :(</p>
        </div>
      )}
    </div>
  );
}

const mapStateToProps = (state) => ({
  cartItems: state.cart,
});

export default connect(mapStateToProps, null)(Cart);
