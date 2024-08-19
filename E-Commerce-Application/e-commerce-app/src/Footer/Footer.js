import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="px-3">
      <div className="footer-top">
        <div className="footer-col">
          <h3>Navigation</h3>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/products">Products</a>
            </li>
            <li>
              <a href="/cart">Cart</a>
            </li>
            <li>
              <a href="/checkout">Checkout</a>
            </li>
            <li>
              <a href="/contactUs">Contact</a>
            </li>
          </ul>
        </div>
        <div className="footer-col">
          <h3>Legal</h3>
          <ul>
            <li>
              <a href="/terms">Terms of Service</a>
            </li>
            <li>
              <a href="/privacy">Privacy Policy</a>
            </li>
            <li>
              <a href="/returns">Returns Policy</a>
            </li>
          </ul>
        </div>
        <div className="footer-col">
          <h3>Contact</h3>
          <p>
            ELEANOR
            <br />
            cochin, KERALA 673659
            <br />
            <a href="tel:555-1234">9087654387</a>
            <br />
            <a href="mailto:info@example.com">eleanor@mystore.com</a>
          </p>
        </div>
        <div className="footer-col">
          <h3>Follow Us</h3>
          <ul className="social-links">
            <li>
              <a href="/">
                <i className="fab fa-facebook"></i>
              </a>
            </li>
            <li>
              <a href="/">
                <i className="fab fa-twitter"></i>
              </a>
            </li>
            <li>
              <a href="/">
                <i className="fab fa-instagram"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="newsletter">
          <h3>Newsletter</h3>
          <form>
            <input type="email" placeholder="Enter your email" required />
            <button type="submit">Sign Up</button>
          </form>
        </div>
        <div className="copyright">
          &copy; {new Date().getFullYear()} ELEANOR Store. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
