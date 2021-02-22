import React from "react";
import "./bestsellers.css";

import { connect } from "react-redux";

import LongArrow from "../../static/svg/longArrow.svg";
import ProductList from "../ProductList/ProductList";

export function Bestsellers({ products }) {
  return (
    <div className="bestsellers">
      <p className="fctm bestsellersTitle">Bestsellers</p>
      <ProductList data={products} />
      <div className="seeMore">
        <p className="fctm">see more</p>
        <img className="seeArrow" alt="longArrow" src={LongArrow}></img>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return { products: state.products };
};

export default connect(mapStateToProps, null)(Bestsellers);
