import React from "react";
import "../styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-page">
      <section className="contact-hero">
        <h1>Contact Us</h1>
        <p>We’d love to hear from you! Fill out the form below and we’ll get back to you as soon as possible.</p>
      </section>

      <section className="contact-form-section">
        <form className="contact-form">
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <input type="text" placeholder="Subject" required />
          <textarea placeholder="Your Message" rows="6" required></textarea>
          <button type="submit">Send Message</button>
        </form>

        <div className="contact-map">
          <iframe
            title="company-location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.086058832658!2d-122.41941568468142!3d37.77492977975964!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085814c5a8e5e55%3A0x2e0a0a1a8b8b9b8b!2sSan%20Francisco%2C%20CA!5e0!3m2!1sen!2sus!4v1692924382762!5m2!1sen!2sus"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </section>
    </div>
  );
};

export default Contact;
