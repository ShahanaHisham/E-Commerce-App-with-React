import React, { useContext } from "react";
import { CartContext } from "../CartContext/CartContext";
import { useNavigate } from "react-router-dom";

const Header = (props) => {
  const { cartItems } = useContext(CartContext);
  const navigate = useNavigate();

  const onSearchChange = ($e) => {
    props.onSearchChange($e.target.value);
  };

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary bg-danger-subtle fixed-top">
      <div className="container-fluid">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="23"
          height="23"
          fill="currentColor"
          className="text-danger-emphasis"
          viewBox="0 0 16 16"
        >
          <path d="M7.657 6.247c.11-.33.576-.33.686 0l.645 1.937a2.89 2.89 0 0 0 1.829 1.828l1.936.645c.33.11.33.576 0 .686l-1.937.645a2.89 2.89 0 0 0-1.828 1.829l-.645 1.936a.361.361 0 0 1-.686 0l-.645-1.937a2.89 2.89 0 0 0-1.828-1.828l-1.937-.645a.361.361 0 0 1 0-.686l1.937-.645a2.89 2.89 0 0 0 1.828-1.828zM3.794 1.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387A1.73 1.73 0 0 0 4.593 5.69l-.387 1.162a.217.217 0 0 1-.412 0L3.407 5.69A1.73 1.73 0 0 0 2.31 4.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387A1.73 1.73 0 0 0 3.407 2.31zM10.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.16 1.16 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.16 1.16 0 0 0-.732-.732L9.1 2.137a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732z" />
        </svg>
        <a className="navbar-brand fst-italic fw-semibold text-danger" href="/">
          ELEANOR
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a
                className="nav-link active text-danger"
                aria-current="page"
                href="/"
              >
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-danger" href="/Products">
                Products
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-danger" href="/AboutUs">
                About Us
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-danger" href="/ContactUs">
                Contact Us
              </a>
            </li>
          </ul>

          <nav className="navbar bg-danger-emphasis">
            <div className="container-fluid">
              <form className="d-flex mx-3" role="search">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                  onChange={onSearchChange}
                />
                <button className="btn btn-outline-danger" type="button">
                  Search
                </button>
              </form>
            </div>
          </nav>

          <div className="d-flex justify-content-end align-items-center">
            <a
              className="btn btn-outline-danger mx-5"
              type="submit"
              href="/Address"
            >
              Address
              <i className="fa-solid fa-location-dot"></i>
            </a>

            <a
              type="button"
              className="btn btn-outline-danger mx-4"
              href="/Profile"
            >
              Profile
              <i className="fa-solid fa-user"></i>
            </a>

            <button
              type="button"
              className="btn btn-outline-danger mx-4"
              onClick={() => navigate("/Cart")}
            >
              Your Cart{" "}
              {cartItems.length > 0 && (
                <span className="badge bg-danger">{cartItems.length}</span>
              )}
              <i className="fa-solid fa-cart-shopping"></i>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
