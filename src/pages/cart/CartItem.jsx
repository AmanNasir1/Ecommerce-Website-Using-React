import React,{useContext} from "react";
import { ShopContext } from "../../context/ShopContext";

const CartItem = (props) => {


  const { id, productName, price, productImage } = props.data;

const {cartItems,addToCart,removeToCart,updateCartItemCount} = useContext(ShopContext)

  return (
    <div className="cartItem">
     <div className="img">
        <img src={productImage} />
     </div>
     <div className="description">
        <h1>{productName}</h1>
        <p>Rs{price}</p>
        <div className="countHandler">
            <button onClick={()=>removeToCart(id)}>-</button>
            <input value={cartItems[id]} onChange={(e)=>updateCartItemCount(Number(e.target.value),id)}/>
            <button onClick={()=>addToCart(id)}>+</button>
        </div>
     </div>
     
    </div>
  );
};

export default CartItem;
