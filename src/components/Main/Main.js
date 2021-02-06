import React from "react";
import Furniture from "./furniture.jpg";
import Arrow from "./arrow.svg";
import "./main.css";

export default function Main() {
  return (
    <div className="main">
      <img className="mainImage" alt="mainImage" src={Furniture}></img>
      <div className="mainInfo">
        <p className="mainTitle fctm">Create your comfort zone.</p>
        {/* <div className="shopButtonWrapper"> */}
        <button className="fctm shopButton" onClick={() => alert("hi")}>
          Shop now
        </button>
        <img className="arrow" alt="arrow" src={Arrow}></img>
        {/* </div> */}
      </div>
    </div>
  );
}
