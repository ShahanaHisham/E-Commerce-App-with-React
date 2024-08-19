function Profile() {
  return (
    <div className="container mt-5 pt-5">
      <div className="row">
        <div className="col-md-3">
          <h2>Profile</h2>
          <nav className="nav flex-column">
            <a className="nav-link active" href="/">
              Account Information
            </a>
            <a className="nav-link" href="/">
              Order History
            </a>
            <a className="nav-link" href="/">
              Shipping Addresses
            </a>
            <a className="nav-link" href="/">
              Wishlist
            </a>
          </nav>
        </div>
        <div className="col-md-9">
          <div className="card mb-3">
            <div className="card-body">
              <h5 className="card-title">John Doe</h5>
              <p className="card-text">Email: johndoe@example.com</p>
              <p className="card-text">Phone: (123) 456-7890</p>
              <a className="btn btn-primary" href="/Address">
                Edit Profile
              </a>
            </div>
          </div>
          <h4>Order History</h4>
          <div className="row">
            <div className="col-md-4 mb-3">
              <div className="card">
                <img
                  src="https://staranddaisy.in/wp-content/uploads/2022/04/204627fsd.jpg"
                  className="card-img-top"
                  alt="card img"
                  height={300}
                />
                <div className="card-body">
                  <h5 className="card-title">Order #1001</h5>
                  <h6 className="card-subtitle mb-2 text-muted">
                    Date: August 1, 2024
                  </h6>
                  <p className="card-text">
                    Shipping Address: 123 Main St, Cityville, ST 12345
                  </p>
                  <p className="card-text">Status: Shipped</p>
                  <a href="/" className="btn btn-info">
                    Track Order
                  </a>
                  <a href="/" className="btn btn-danger">
                    Cancel Order
                  </a>
                </div>
              </div>
            </div>

            <div className="col-md-4 mb-3">
              <div className="card">
                <img
                  src="https://rukminim2.flixcart.com/image/850/1000/l4iscy80/dress/u/w/8/xl-zm106-maroon-zamaisha-original-imagfecxfnt3sdfa.jpeg?q=90&crop=false"
                  className="card-img-top"
                  alt="card img2"
                />
                <div className="card-body">
                  <h5 className="card-title">Order #1002</h5>
                  <h6 className="card-subtitle mb-2 text-muted">
                    Date: August 5, 2024
                  </h6>
                  <p className="card-text">
                    Shipping Address: 456 Elm St, Townsville, ST 67890
                  </p>
                  <p className="card-text">Status: Delivered</p>
                  <a href="/" className="btn btn-info">
                    Track Order
                  </a>
                  <a href="/" className="btn btn-danger">
                    Cancel Order
                  </a>
                </div>
              </div>
            </div>

            <div className="col-md-4 mb-3">
              <div className="card">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRA6V0szGBNvz0sOu0rdw9gMivUUTMfSbdsQg&s"
                  className="card-img-top"
                  alt="card img3"
                  height={300}
                />
                <div className="card-body">
                  <h5 className="card-title">Order #1003</h5>
                  <h6 className="card-subtitle mb-2 text-muted">
                    Date: August 10, 2024
                  </h6>
                  <p className="card-text">
                    Shipping Address: 789 Oak St, Villageville, ST 11223
                  </p>
                  <p className="card-text">Status: Processing</p>
                  <a href="/" className="btn btn-info">
                    Track Order
                  </a>
                  <a href="/" className="btn btn-danger">
                    Cancel Order
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
