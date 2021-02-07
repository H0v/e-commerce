import React from "react";
import Furniture from "../../static/images/furniture.jpg";
import Arrow from "../../static/svg/arrow.svg";
import "./main.css";

export default function Main() {
  return (
    <div className="main">
      <img className="mainImage" alt="mainImage" src={Furniture}></img>
      <div className="mainInfo">
        <p className="mainTitle fctm">Create your comfort zone.</p>
        <button className="fctm shopButton" onClick={() => alert("hi")}>
          Shop now
        </button>
        <img className="arrow" alt="arrow" src={Arrow}></img>
      </div>
    </div>
  );
}
