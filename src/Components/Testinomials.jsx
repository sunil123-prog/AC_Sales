import React, { useState } from "react";
import "../Styles/Home.css"

const testimonialsData = [
  {
    name: "Amit Sharma",
    photo: "https://randomuser.me/api/portraits/men/32.jpg",
    review: "Excellent AC repair service! Quick response and very professional.",
    rating: 5,
    verified: true,
  },
  {
    name: "Neha Verma",
    photo: "https://randomuser.me/api/portraits/women/44.jpg",
    review: "Affordable pricing and great installation work. Highly recommended!",
    rating: 4,
    verified: true,
  },
  {
    name: "Rahul Sen",
    photo: "https://randomuser.me/api/portraits/men/58.jpg",
    review: "The technician was friendly and explained everything clearly.",
    rating: 5,
    verified: false,
  },
];

const Testimonials = () => {
  const [current, setCurrent] = useState(0);
  const length = testimonialsData.length;

  const nextTestimonial = () => {
    setCurrent((prev) => (prev + 1) % length);
  };

  const prevTestimonial = () => {
    setCurrent((prev) => (prev - 1 + length) % length);
  };

  return (
    <div className="testimonials-section">
      <h2 style={{"textAlign":"center"}}>What Our Customers Say</h2>
      <div className="testimonial-carousel">
        <button className="arrow left" onClick={prevTestimonial} style={{"width":"20px","padding":"10px"}}>←</button>

        <div className="testimonial-card">
          <img src={testimonialsData[current].photo} alt={testimonialsData[current].name} className="testimonial-photo" />
          <h4>
            {testimonialsData[current].name}
            {testimonialsData[current].verified && <span className="verified-badge">✔ Verified</span>}
          </h4>
          <p className="testimonial-review">"{testimonialsData[current].review}"</p>
          <div className="testimonial-rating">
            {Array.from({ length: testimonialsData[current].rating }, (_, i) => (
              <span key={i}>⭐</span>
            ))}
          </div>
        </div>

        <button className="arrow right" onClick={nextTestimonial}>→</button>
      </div>

      <div className="testimonial-form">
        <h3>Share Your Experience</h3>
        <form>
          <input type="text" placeholder="Your Name" required />
          
          <textarea rows="3" placeholder="Your Feedback" required></textarea>
          <select required>
            <option value="">Your Rating</option>
            {[1,2,3,4,5].map((r) => (
              <option key={r} value={r}>{r} Star{r > 1 ? "s" : ""}</option>
            ))}
          </select>
          <button type="submit">Submit Review</button>
        </form>
      </div>
    </div>
  );
};

export default Testimonials;
