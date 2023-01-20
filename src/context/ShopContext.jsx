import React, { createContext, useState } from "react";
import { PRODUCT } from "../product";

export const ShopContext = createContext(null);

const ShopContextProvider = (props) => {
  const getDefaultCart = () => {
    let cart = {};
    for (let i = 1; i < PRODUCT.length + 1; i++) {
      cart[i] = 0;
    }
    return cart;
  };
  const [cartItems, setCartItems] = useState(getDefaultCart());

  const addToCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
  };

  const removeToCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };
  const updateCartItemCount = (newAmount,itemId)=>{
    setCartItems((prev)=>({...prev,[itemId]:newAmount}))
  }

  const getTotalCartAmount = ()=>{
    let totalAmount = 0
     for(const item in cartItems){
      if(cartItems[item]>0){
        let itemInfo = PRODUCT.find((product)=>product.id===Number(item))
        totalAmount += cartItems[item]*itemInfo.price
      }
     }
     return totalAmount
  }
  const contextValue = {
    cartItems,
    addToCart,
    removeToCart,
    updateCartItemCount,
    getTotalCartAmount
  };


  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
      
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
