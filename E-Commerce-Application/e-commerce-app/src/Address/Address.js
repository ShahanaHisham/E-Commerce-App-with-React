import "./Address.css";

function Address() {
  return (
    <div className="mt-5 pt-5">
      <h2 className="text-center mb-4">Address Form</h2>
      <form className="px-5">
        <div className="form-group mb-4">
          <label for="name">Name</label>
          <input
            type="text"
            className="form-control form-control-lg"
            id="name"
            placeholder="Enter your name"
          />
        </div>
        <div className="form-group mb-4">
          <label for="address1">Address 1</label>
          <input
            type="text"
            className="form-control  form-control-lg"
            id="address1"
            placeholder="Enter address"
          />
        </div>
        <div className="form-group mb-4">
          <label for="address2">Address 2</label>
          <input
            type="text"
            className="form-control  form-control-lg"
            id="address2"
            placeholder="Enter additional address"
          />
        </div>
        <div className="row">
          <div className="col-md-6">
            <div className="form-group mb-4">
              <label for="city">City</label>
              <input
                type="text"
                className="form-control  form-control-lg"
                id="city"
                placeholder="Enter city"
              />
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group mb-4">
              <label for="state">State</label>
              <select className="form-control form-control-lg" id="state">
                <option>KERALA</option>
                <option>KARNATAKA</option>
                <option>TAMIL NADU</option>
              </select>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <div className="form-group mb-4">
              <label for="pin">Pin Code</label>
              <input
                type="text"
                className="form-control  form-control-lg"
                id="pin"
                placeholder="Enter pin code"
              />
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group mb-4">
              <label for="country">Country</label>
              <select className="form-control  form-control-lg" id="country">
                <option>India</option>
                <option>UAE</option>
                <option>U K</option>
              </select>
            </div>
          </div>
        </div>
        <div className="form-group mb-4">
          <label for="phone">Phone</label>
          <input
            type="tel"
            className="form-control  form-control-lg"
            id="phone"
            placeholder="Enter phone number"
          />
        </div>
        <a
          type="submit"
          className="btn btn-primary btn-block mt-4 mb-5 justify-content-center"
          href="/"
        >
          Submit
        </a>
      </form>
    </div>
  );
}

export default Address;
