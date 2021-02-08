import React from "react";
import "./checkout.css";
import Mastercard from "../../static/svg/mastercard.svg";
import CardLines from "../../static/svg/cardLines1.svg";
import LongCardLines from "../../static/svg/longCardLines.svg";

export default function Checkout() {
  return (
    <div className="checkout">
      <div className="card">
        <div className="cardDesign">
          <img className="mastercard" alt="mastercard" src={Mastercard}></img>
          <img className="lines" alt="lines" src={CardLines}></img>
        </div>
        <div className="cardInfo fctm">
          <label className="cardLabel">
            <p>Card Number</p>
            <input required placeholder="0123-4567-8901-2345"></input>
          </label>
          <label className="cardLabel">
            <p>Name</p>
            <input required placeholder="Tom Thompson"></input>
          </label>
          <div className="dateCvcBlock">
            <label className="cardLabel">
              <p>Exp. Date</p>
              <input required placeholder="12/21"></input>
            </label>
            <label className="cardLabel">
              <p>CVC</p>
              <input required placeholder="123"></input>
            </label>
          </div>
        </div>
        <img className="longLines" alt="longLines" src={LongCardLines}></img>
      </div>
      <div className="itemInfoBlock">
        <p className="itemTitle fctm">Sofa Francesca</p>
        <p className="itemPrice fctm">300$</p>
        <button className="acceptButton fctm">Accept</button>
      </div>
    </div>
  );
}
