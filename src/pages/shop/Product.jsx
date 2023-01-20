import React from "react";
import { Card } from "antd";
const Product = (props) => {
  const { id, productName, price, productImage } = props.data;
  return (
      <div  className="product">
        <Card
          className="card"
          style={{
            width: 400,
          }}
        >
          <div className="cardImage">
            <img src={productImage} />
          </div>
          <hr />
          <div className="description">
            <h2>{productName}</h2>
            <p>Rs.{price}</p>
            <button className="button-34">Add To Cart</button>
          </div>
        </Card>
      </div>
  );
};

export default Product;
