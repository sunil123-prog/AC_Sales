import React, { useState } from "react";
import "../Styles/Contact.css";
import contactimg from '../assets/images/contact.jpg'
import Footer from "./Footer";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [toastVisible, setToastVisible] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.includes("@")) newErrors.email = "Valid email is required";
    if (!formData.message.trim()) newErrors.message = "Message cannot be empty";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    console.log("Message sent:", formData);
    setToastVisible(true);
    setFormData({ name: "", email: "", message: "" });
    setErrors({});

    setTimeout(() => {
      setToastVisible(false);
    }, 3000);
  };

  return (
    <>
    <div className="contact-page">
      <div className="left">
        <h2>Contact Us</h2>
        <form onSubmit={handleSubmit} noValidate>
          <div className="form-group">
            <label>Name</label>
            <input
              name="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
            />
            {errors.name && <span className="error">{errors.name}</span>}
          </div>
          <div className="form-group">
            <label>Email</label>
            <input
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && <span className="error">{errors.email}</span>}
          </div>
          <div className="form-group">
            <label>Phonenumber</label>
            <input
              name="phone"
              type="tel"
              value={formData.tel}
              onChange={handleChange}
            />
            {errors.email && <span className="error">{errors.email}</span>}
          </div>
          <div className="form-group">
            <label>Message</label>
            <textarea
              name="message"
              rows="4"
              value={formData.message}
              onChange={handleChange}
            ></textarea>
            {errors.message && <span className="error">{errors.message}</span>}
          </div>
          <button type="submit">Send</button>
        </form>
      </div>

      <div className="right">
        <img src={contactimg} alt="no" />
        <h3>Contact Info</h3>
        <p style={{"textAlign":"start"}}><strong>Phone:</strong> +91 98765 43210</p><br />
        <p style={{"textAlign":"start"}}><strong>Email:</strong> support@example.com</p><br />
        <p style={{"textAlign":"start"}}><strong>Address:</strong> 9WHM+RX3, Near APSRTC Bus Stand, Opp. Current Office,
        Highway, Giddalur, Kurnool, Andhra Pradesh 523357</p>
       
      </div>

      {toastVisible && (
        <div className="toast">Your message has been sent!</div>
      )}
    </div>

    <div className="map">
 


<iframe 
src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3846.94423419474!2d78.9349098!3d15.3795062!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb4e703de3a54bd%3A0xc1b3123b1d1a8b04!2sSRI%20RAJESWARI%20AIR%20CONDITIONERS!5e0!3m2!1sen!2sin!4v1743849378192!5m2!1sen!2sin"
title="Google Map"
width="100%"
height="250"
style={{ border: 0, borderRadius: "10px" }}
loading="lazy"
 referrerpolicy="no-referrer-when-downgrade">

 </iframe>
    </div>

    <Footer />

    </>
  );
};

export default Contact;
