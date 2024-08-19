import React, { useContext, useState } from "react";
import { CartContext } from "../CartContext/CartContext";

const Checkout = () => {
  const { cartItems, checkout } = useContext(CartContext);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    cardNumber: "",
    cardExpiry: "",
    cardCVC: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
    checkout();
  };

  return (
    <div className="container mt-5 pt-5">
      <h2>Checkout</h2>
      <div className="row">
        <div className="col-md-6">
          <h4>Shipping Information</h4>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Name</label>
              <input
                type="text"
                name="name"
                className="form-control form-control-lg"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                name="email"
                className="form-control form-control-lg"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label>Address</label>
              <input
                type="text"
                name="address"
                className="form-control form-control-lg"
                value={formData.address}
                onChange={handleChange}
                required
              />
            </div>
            <h4>Payment Information</h4>
            <div className="form-group">
              <label>Card Number</label>
              <input
                type="number"
                name="cardNumber"
                className="form-control form-control-lg"
                value={formData.cardNumber}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label>Expiry Date</label>
              <input
                type="date"
                name="cardExpiry"
                className="form-control form-control-lg"
                value={formData.cardExpiry}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label>CVC</label>
              <input
                type="number"
                name="cardCVC"
                className="form-control form-control-lg"
                value={formData.cardCVC}
                onChange={handleChange}
                required
              />
            </div>
            <button type="submit" className="btn btn-outline-danger mb-4 mt-5">
              Complete Purchase
            </button>
          </form>
        </div>
        <div className="col-md-6">
          <h4>Order Summary</h4>
          {cartItems.length === 0 ? (
            <p>Your cart is empty.</p>
          ) : (
            <ul className="list-group">
              {cartItems.map((product) => (
                <li className="list-group-item" key={product.id}>
                  {product.title} - ${product.price}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default Checkout;
