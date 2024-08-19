import React, { useState } from "react";
import Header from "./Header/Header";
import Banner from "./Banner/Banner";
import ProductList from "./ProductList/ProductList";
import Footer from "./Footer/Footer";
import ContactUs from "./Contact Us/ContactUs";
import AboutUs from "./About Us/AboutUs";
import Address from "./Address/Address";
import Profile from "./Profile/Profile";
import { CartProvider } from "./CartContext/CartContext";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Cart from "./CartContext/Cart";
import Checkout from "./CheckOut/CheckOut";
import ProductDetail from "./ProductDetail/ProductDetail";

function App() {
  const [searchText, setSearchText] = useState("");

  return (
    <CartProvider>
      <Router>
        <>
          <div>
            <Header onSearchChange={setSearchText} />
            <Routes>
              <Route path="/" element={<Banner />} />
              <Route
                path="/Products"
                element={<ProductList searchText={searchText} />}
              />
              <Route path="/Products/:id" element={<ProductDetail />} />
              <Route path="/ContactUs" element={<ContactUs />} />
              <Route path="/AboutUs" element={<AboutUs />} />
              <Route path="/Address" element={<Address />} />
              <Route path="/Profile" element={<Profile />} />
              <Route path="/Cart" element={<Cart />} />
              <Route path="/CheckOut" element={<Checkout />} />
            </Routes>
            <Footer />
          </div>
        </>
      </Router>
    </CartProvider>
  );
}

export default App;
