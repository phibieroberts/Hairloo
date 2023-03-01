import React from "react";
import {productsArray} from "../productsStore";
import "./Products.css";
import Product from "./Product";
function Products() {
  return (
    <div className="products">
      {productsArray.map((product) => {
        return (
          <Product product={product} />
        );
      })}
    </div>
  );
}

export default Products;
