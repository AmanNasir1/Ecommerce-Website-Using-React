import React, { useContext } from "react";
import { PRODUCT } from "../../product";
import { ShopContext } from "../../context/ShopContext";
import CartItem from "./CartItem";
import "./cart.css";
import { Button } from "antd";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { cartItems, getTotalCartAmount } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();
  const navigate = useNavigate();
  return (
    <div className="cart">
      
      <div className="cartItems">
        {PRODUCT.map((product, key) => {
          if (cartItems[product.id] !== 0) {
            return <CartItem data={product} key={key} />;
          }
        })}

        {totalAmount > 0 ?
        <div className="checkout">
          <p>Subtotal : ${totalAmount}</p>
          <Button
            style={{
              margin: "0 10px",
              backgroundColor: "black",
              color: "white",
            }}
            onClick={() => navigate("/")}
          >
            Continue Shopping
          </Button>
          <Button
            style={{
              margin: "0 10px",
              backgroundColor: "black",
              color: "white",
            }}
          >
            Checkout
          </Button>
        </div> : <h1>Your Cart Is Empty</h1>
        }
      </div>
    </div>
  );
};

export default Cart;
