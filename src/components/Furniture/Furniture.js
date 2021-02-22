import React from "react";
import { connect } from "react-redux";
import Filters from "../Filters/Filters";
import ProductList from "../ProductList/ProductList";
import "./furniture.css";

function Furniture({ products }) {
  return (
    <div className="furniture fctm">
      <Filters />
      <ProductList data={products} />
    </div>
  );
}

const mapStateToProps = (state) => {
  return { products: state.products };
};

export default connect(mapStateToProps, null)(Furniture);
