import React, { useState } from "react";
import dotArrow from "../../static/svg/dotArrow.svg";
import "./select.css";

export default function Select({ data, title }) {
  const [closed, setClosed] = useState(true);

  return (
    <div className="select">
      <div onClick={() => setClosed(!closed)} className="closed">
        <span>{title ? title : data[0]}</span>
        <img
          alt="asd"
          className={closed ? "rotate" : null}
          src={dotArrow}
        ></img>
      </div>
      {!closed ? (
        <div className="opened">
          {data.map((el, index) => (
            <div key={el + index}>{el}</div>
          ))}
        </div>
      ) : null}
    </div>
  );
}
