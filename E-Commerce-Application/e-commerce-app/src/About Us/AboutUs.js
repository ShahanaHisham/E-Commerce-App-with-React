import React from "react";
import "./AboutUs.css"; // Import your CSS file for styling
import image1 from "./image1.jpeg";
import image2 from "./image2.jpeg";
import image3 from "./image3.jpg"

const AboutUs = () => {
  return (
    <div className="about-us mt-5 pt-5 text-center">
      <h1 className="fw-bold">About Us</h1>

      <section className="journey mt-5">
        <h2>Our Journey</h2>
        <p>
          At <strong>ELEANOR</strong>, we believe that shopping should be an
          experience, not just a transaction. Founded in <strong>Year</strong>,
          our journey began with a simple idea: to provide high-quality products
          that bring joy and satisfaction to our customers. What started as a
          small venture has transformed into a thriving e-commerce platform,
          where passion meets innovation.
        </p>
      </section>

      <section className="mission">
        <h2>Our Mission</h2>
        <p>
          Our mission is to revolutionize the way you shop online. We strive to
          curate a diverse selection of products that cater to your needs while
          ensuring an enjoyable shopping experience. We are committed to
          sustainability, quality, and customer satisfaction, making every
          purchase a step toward a better future.
        </p>
      </section>

      <img src={image1} alt="image1" width={800} height={400} className="mx-5 px-5"/>

      <section className="offerings mt-5">
        <h2>What We Offer</h2>
        <ul>
          <li>
            <strong>Exceptional Quality:</strong> We source products from
            trusted suppliers, ensuring you receive only the best.
          </li>
          <li>
            <strong>Unmatched Variety:</strong> Whether you're looking for
            specific items or other items, we have something for everyone.
          </li>
          <li>
            <strong>Customer-Centric Service:</strong> Our dedicated support
            team is here to assist you, ensuring your shopping experience is
            smooth and enjoyable.
          </li>
        </ul>
      </section>

      <img src={image2} alt="image2" width={800} height={400} className="mx-5 px-5"/>

      <section className="values mt-5">
        <h2>Our Values</h2>
        <ol>
          <li>
            <strong>Integrity:</strong> We believe in honest business practices
            and transparency with our customers.
          </li>
          <li>
            <strong>Innovation:</strong> We are constantly evolving, embracing
            new technologies and ideas to enhance your shopping experience.
          </li>
          <li>
            <strong>Community:</strong> We support local artisans and
            businesses, giving back to the community that supports us.
          </li>
        </ol>
      </section>

      <img src={image3} alt="image3" width={800} height={400} className="mx-5 px-5"/>

      <section className="community mt-5">
        <h2>Join Our Community</h2>
        <p>
          We invite you to join our community of satisfied customers. Follow us
          on <a href="your-social-media-link">Social Media</a> for the latest
          updates, promotions, and behind-the-scenes looks at our operations.
          Your feedback is invaluable to us, and we encourage you to share your
          thoughts and experiences.
        </p>
      </section>

      <section className="testimonials">
        <h2>Testimonials</h2>
        <blockquote>
          <p>
            "Shopping with ELEANOR has been a delightful experience. The quality
            of the products is unmatched!" - Customer Name
          </p>
        </blockquote>
        <blockquote>
          <p>
            "I love the variety and the ease of shopping online. Highly
            recommend!" - Customer Name
          </p>
        </blockquote>
      </section>

      <section className="contact">
        <h2>Get in Touch</h2>
        <p>
          Have questions or suggestions? We’d love to hear from you! Reach out
          to us at{" "}
          <a href="mailto:contact@yourbrand.com">contact@yourbrand.com</a> or
          visit our <a href="/faq">FAQ page</a> for more information.
        </p>
      </section>
    </div>
  );
};

export default AboutUs;
