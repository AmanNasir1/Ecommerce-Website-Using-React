import React, { useContext } from "react";
import { Card } from "antd";
import { ShopContext } from "../../context/ShopContext";

const Product = (props) => {
  const { id, productName, price, productImage } = props.data;
  const { addToCart,cartItems } = useContext(ShopContext);
const cartItemAmount = cartItems[id]
  return (
    <div className="product">
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
          <p>${price}</p>
          <button className="button-34" onClick={() => addToCart(id  )}>
            Add To Cart {cartItemAmount > 0 && <>({cartItemAmount}) </>}
          </button>
        </div>
      </Card>
    </div>
  );
};

export default Product;
