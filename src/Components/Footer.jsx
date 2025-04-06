import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

import '../Styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Company Info */}
        <div className="footer-section">
          <h3>Sri Rajeshwari <br />Air Conditioners</h3>
          <p style={{"textAlign":"start"}}>
            Sri Rajeshwari Air Conditioners is one of the trusted & independent air conditioner service providers in India.
            We offer complete AC solutions including installation, repair, maintenance, spare parts, and AMC services
            for all major brands at affordable prices.
          </p>
        </div>

        {/* Useful Links */}
        <div className="footer-section">
          <h4>Useful Links</h4>
          <ul>
            <li><span>&rarr;</span>&nbsp;&nbsp;<a href="/">Home</a></li>
            <li><span>&rarr;</span>&nbsp;&nbsp;<a href="#aboutus">About Us</a></li>
            <li><span>&rarr;</span>&nbsp;&nbsp;<a href="/ac-sales">AC Sales</a></li>
            <li><span>&rarr;</span>&nbsp;&nbsp;<a href="/spare-parts">Spare Parts</a></li>
            <li><span>&rarr;</span>&nbsp;&nbsp;<a href="/services">AC Services</a></li>
            <li><span>&rarr;</span>&nbsp;&nbsp;<a href="/amc">AMC Plans</a></li>
            <li><span>&rarr;</span>&nbsp;&nbsp;<a href="/contact">Contact Us</a></li>
            <li><span>&rarr;</span>&nbsp;&nbsp;<a href="/enquiry">Enquiry</a></li>
          </ul>
        </div>

        {/* Services */}
        <div className="footer-section">
          <h4>Services We Provide</h4>
          <ul>
            <li><span>&rarr;</span>&nbsp;&nbsp;AC Installation</li>
            <li><span>&rarr;</span>&nbsp;&nbsp;AC Repair</li>
            <li><span>&rarr;</span>&nbsp;&nbsp;AC Gas Refilling</li>
            <li><span>&rarr;</span>&nbsp;&nbsp;AC Maintenance</li>
            <li><span>&rarr;</span>&nbsp;&nbsp;Spare Part Replacement</li>
            <li><span>&rarr;</span>&nbsp;&nbsp;AC Remote & PCB Repair</li>
            <li><span>&rarr;</span>&nbsp;&nbsp;Annual Maintenance Contract (AMC)</li>
            <li><span>&rarr;</span>&nbsp;&nbsp;New AC Sales</li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="footer-section">
          <h4>Contact Us</h4>
          <p style={{"textAlign":"start"}}>
            <strong>Location:</strong><br />
            9WHM+RX3, Near APSRTC Bus Stand, Opp. Current Office,<br />
            Highway, Giddalur, Kurnool, Andhra Pradesh 523357
          </p>
          <h4>Follow Us</h4>
          <div className="social-icons">
            <a href="#"><FontAwesomeIcon icon={faFacebook} /></a>
            <a href="#"><FontAwesomeIcon icon={faTwitter} /></a>
            <a href="#"><FontAwesomeIcon icon={faInstagram} /></a>
          </div>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Sri Rajeshwari Air Conditioners. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
