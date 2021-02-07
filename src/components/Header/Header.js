import React from "react";
import "./header.css";
import Logo from "../../static/svg/Logo.svg";
import CartIcon from "../../static/svg/CartIcon.svg";
import SearchIcon from "../../static/svg/SearchIcon.svg";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <div className="headerBox">
        <Link to="/">
          <img className="logo" alt="Logo" src={Logo}></img>
        </Link>
        <div className="navBar">
          <Link to="/furniture">
            <button className="navItem fctm">Furniture</button>
          </Link>
          <Link to="/lightning">
            <button className="navItem fctm">Lightning</button>
          </Link>
          <Link to="/decor">
            <button className="navItem fctm">Decor</button>
          </Link>
          <Link to="/tablewear">
            <button className="navItem fctm">Tablewear</button>
          </Link>
          <Link to="/cart">
            <button className="navItem">
              <img alt="CartIcon" src={CartIcon}></img>
            </button>
          </Link>
          <button className="navItem">
            <img alt="SearchIcon" src={SearchIcon}></img>
          </button>
        </div>
      </div>
    </header>
  );
}
