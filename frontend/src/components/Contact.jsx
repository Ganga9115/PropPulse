import React, { useState } from "react";
import "../styles/Contact.css";
import { FaMapMarkerAlt, FaEnvelope, FaPhone } from "react-icons/fa";
import contactBanner from "../assets/contact-banner.png";

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted: ", formData);
    alert("Message sent successfully!");
    setFormData({ firstName: "", lastName: "", email: "", phone: "", message: "" });
  };

  return (
    <div className="contact-container">
      <div className="contact-header">
        <h1>Hello Tenant!</h1>
        <p>Access all your rental details, payment history, and support in one place</p>
      </div>

      <div className="contact-banner">
        <img src={contactBanner} alt="contact" />
      </div>

      <div className="contact-body">
        {/* Contact Info */}
        <div className="contact-info">
          <h3>Let’s Connect with Us</h3>

          <div className="info-item">
            <FaMapMarkerAlt className="icon" />
            <p>No. 24, Green Tech Park,<br />Anna Nagar,<br />Chennai – 600040</p>
          </div>

          <div className="info-item">
            <FaEnvelope className="icon" />
            <p>deepikaanandhan2@gmail.com</p>
          </div>

          <div className="info-item">
            <FaPhone className="icon" />
            <p>+91 86681 46558</p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="contact-form">
          <form onSubmit={handleSubmit}>
            <div className="name-fields">
              <input
                type="text"
                name="firstName"
                placeholder="Name*"
                value={formData.firstName}
                onChange={handleChange}
                required
              />
              <input
                type="text"
                name="lastName"
                placeholder="LastName*"
                value={formData.lastName}
                onChange={handleChange}
                required
              />
            </div>

            <input
              type="email"
              name="email"
              placeholder="Email*"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="phone"
              placeholder="Phone Number*"
              value={formData.phone}
              onChange={handleChange}
              required
            />
            <textarea
              name="message"
              placeholder="Message*"
              value={formData.message}
              onChange={handleChange}
              required
            />
            <button type="submit">Send</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
