import React, { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    console.log("Adding to cart:", product);
    setCartItems((prevItems) => [...prevItems, product]);
  };

  const removeFromCart = (product) => {
    console.log("Removing from cart:", product);
    setCartItems((prevItems) =>
      prevItems.filter((item) => item.id !== product.id)
    );
  };

  const checkout = () => {
    if (cartItems.length === 0) {
      console.log("Cart is empty. Cannot proceed to checkout.");
      return;
    }

    console.log("Proceeding to checkout with items:", cartItems);

    setCartItems([]);
    console.log("Checkout complete. Cart has been cleared.");
  };

  return (
    <CartContext.Provider
      value={{ cartItems, addToCart, removeFromCart, checkout }}
    >
      {children}
    </CartContext.Provider>
  );
};
