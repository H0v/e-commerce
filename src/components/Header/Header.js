import React from "react";
import "./header.css";
import Logo from "../../static/svg/Logo.svg";
import CartIcon from "../../static/svg/CartIcon.svg";
import SearchIcon from "../../static/svg/SearchIcon.svg";

export default function Header() {
  return (
    <header>
      <div className="headerBox">
        <a href="/">
          <img className="logo" alt="Logo" src={Logo}></img>
        </a>
        <div className="navBar">
          <button className="navItem fctm">Furniture</button>
          <button className="navItem fctm">Lightning</button>
          <button className="navItem fctm">Decor</button>
          <button className="navItem fctm">Tablewear</button>
          <button className="navItem">
            <img alt="CartIcon" src={CartIcon}></img>
          </button>
          <button className="navItem">
            <img alt="SearchIcon" src={SearchIcon}></img>
          </button>
        </div>
      </div>
    </header>
  );
}
