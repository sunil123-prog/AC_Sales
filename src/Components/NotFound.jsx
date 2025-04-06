import React from 'react';
import { Link } from 'react-router-dom';
import '../Styles/NotFound.css';

const NotFound = () => {
  return (
    <div className="not-found-container">
      <img
        src="https://res.cloudinary.com/diouplxlw/images/w_1024,h_576,c_scale/c_fill/f_auto,q_auto/v1699003646/Broken-Links-on-Your-Websites-SEO-image-1-1/Broken-Links-on-Your-Websites-SEO-image-1-1.jpg?_i=AA"
        alt="Page Not Found"
        className="not-found-image"
      />
      <h1>404 - Page Not Found</h1>
      <p>Sorry! We couldn’t find the page you’re looking for.</p>
      <Link to="/" className="back-home-btn">Go Back Home</Link>
    </div>
  );
};

export default NotFound;
