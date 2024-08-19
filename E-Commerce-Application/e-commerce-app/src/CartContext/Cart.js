import React, { useContext, useEffect } from "react";
import { CartContext } from "./CartContext";

const Cart = () => {
  const { cartItems, removeFromCart, checkout } = useContext(CartContext);

  useEffect(() => {
    console.log("Current cart items:", cartItems);
  }, [cartItems]);

  return (
    <div className="mb-5 container">
      <h2 className="mt-5 pt-5 mx-5">Cart</h2>
      {cartItems.length === 0 ? (
        <p className="mx-5">Your cart is empty.</p>
      ) : (
        <div className="row">
          {cartItems.map((product) => (
            <div className="product-card col-md-4 mb-4">
              <img
                src={product.image}
                className="product-image"
                alt={product.title}
                style={{ height: "300px", width: "300px" }}
              />
              <div className="product-info">
                <h3 className="product-title">{product.title}</h3>
                <p className="product-price">${product.price}</p>
                <p className="product-category">{product.category}</p>
                <p className="product-description">{product.description}</p>
                <button
                  className="btn btn-outline-danger"
                  onClick={() => removeFromCart(product)}
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
      {cartItems.length > 0 && (
        <a
          className="btn btn-outline-danger"
          onClick={checkout}
          style={{ marginLeft: "500px" }}
          href="/CheckOut"
        >
          Proceed to Checkout
        </a>
      )}
    </div>
  );
};

export default Cart;
