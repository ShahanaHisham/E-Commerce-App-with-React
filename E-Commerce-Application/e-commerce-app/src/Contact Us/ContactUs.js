import React from "react";

const ContactUs = () => {
  return (
    <div className="contact-us mt-5 pt-5 text-center">
      <h1>Contact Us</h1>
      <p>
        We're here to help! Whether you have questions about your order, need
        assistance with our products, or want to provide feedback, feel free to
        reach out to us.
      </p>

      <section className="contact-info">
        <h2>Get in Touch</h2>
        <p>
          <strong>Customer Support Hours:</strong>
        </p>
        <p>
          Monday to Friday: 9 AM - 6 PM (EST)
          <br />
          Saturday: 10 AM - 4 PM (EST)
          <br />
          Sunday: Closed
        </p>

        <h3>Contact Information</h3>
        <ul>
          <li>
            <strong>Email:</strong>{" "}
            <a href="mailto:support@yourstore.com">eleanor@mystore.com</a>
          </li>
          <li>
            <strong>Phone:</strong> 8976045032
          </li>
          <li>
            <strong>Live Chat:</strong> Available on our website during business
            hours
          </li>
        </ul>
      </section>

      <section className="contact-form">
        <h2>Contact Form</h2>
        <p>
          Please fill out the form below, and we will get back to you as soon as
          possible.
        </p>

        <form className="px-5">
          <div class="mb-4">
            <input
              class="form-control form-control-lg"
              type="text"
              placeholder="Full Name"
              aria-label=".form-control-lg example"
            />
          </div>
          <div class="mb-4">
            <input
              class="form-control form-control-lg"
              type="email"
              placeholder="E-mail Address"
              aria-label=".form-control-lg example"
            />
          </div>
          <div class="mb-4">
            <input
              class="form-control form-control-lg"
              type="text"
              placeholder="Phone Number"
              aria-label=".form-control-lg example"
            />
          </div>
          <div class="mb-4">
            <input
              class="form-control form-control-lg"
              type="email"
              placeholder="Order Number"
              aria-label=".form-control-lg example"
            />
          </div>
          <div className="mb-4">
            <textarea
              className="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
              placeholder="Message :"
            ></textarea>
          </div>

          <button className="btn btn-primary" type="submit">
            Submit
          </button>
        </form>
      </section>

      <section className="faqs pt-5">
        <h2>Frequently Asked Questions (FAQs)</h2>
        <p>
          Before contacting us, you may want to check our FAQs for quick answers
          to common questions. <a href="/faqs">Link to FAQs</a>
        </p>
      </section>

      <section className="social-media">
        <h2>Follow Us on Social Media</h2>
        <p>Stay connected with us for updates, promotions, and more!</p>
        <ul>
          <li>
            <a href="/facebook" className="text-decoration-none fs-5">Facebook</a>
            <i className="fab fa-facebook"></i>
          </li>
          <li>
            <a href="/instagram" className="text-decoration-none fs-5">Instagram</a>
            <i className="fab fa-instagram"></i>
          </li>
          <li>
            <a href="/twitter" className="text-decoration-none fs-5">Twitter</a>
            <i className="fab fa-twitter"></i>
          </li>
          <li>
            <a href="linkedin" className="text-decoration-none fs-5">LinkedIn</a>
            <i className="fab fa-linkedin"></i>
          </li>
        </ul>
      </section>

      <section className="store-location">
        <h2>Visit Our Store</h2>
        <p>
          If you prefer to speak to someone in person, visit us at:
          <br />
          <strong>Address:</strong>
          <br />
          ELEANOR
          <br />
          Shop City, ST 12345
        </p>
      </section>
    </div>
  );
};

export default ContactUs;
