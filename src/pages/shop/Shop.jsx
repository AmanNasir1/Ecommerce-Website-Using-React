import React from "react";
import { PRODUCT } from "../../product";
import Product from "./Product";
import "./shop.css"

const Shop = () => {
  return (
    <div className="shop">
      <div>
        <h1 style={{ textAlign: "center", color: "cadetblue" }}>
          E-commerce Website
        </h1>
      </div>
      <div className="products">{PRODUCT.map((product,key)=>
         <Product data = {product} />)}</div>
    </div>
  );
};

export default Shop;
