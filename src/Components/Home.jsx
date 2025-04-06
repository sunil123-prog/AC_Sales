import React, { useEffect, useState, useRef } from 'react';
import Data from '../Components/Data.json';
import { toast } from 'react-toastify';
import { Button } from '@mui/material';
import aboutimg from '../assets/images/aboutimg.jpg'
import abImage from '../assets/images/abimage.jpg'
import service1 from '../assets/images/service1.jpg';
import service2 from '../assets/images/service2.jpg';
import service3 from '../assets/images/service3.jpg';
import service4 from '../assets/images/service4.jpg';
import service5 from '../assets/images/service5.jpeg'
import service7 from '../assets/images/service7.jpg';
import service8 from '../assets/images/service8.png';
import service9 from '../assets/images/service9.jpg';
import service10 from '../assets/images/service9.jpeg';
import '../Styles/Home.css'; 
import '../Styles/Services.css'
import Testimonials from './Testinomials';
import Brands from './Brands';
import Footer from './Footer';
const Home = () => {
  const [next, setNext] = useState(0);
  const ref = useRef(null);

  const [showModal, setShowModal] = useState(false);
  const [selectedService, setSelectedService] = useState(null);


  


  const handleNext = () => {
    setNext((prevVal) => (prevVal < Data.length - 1 ? prevVal + 1 : 0));
  };

  const handlePrev = () => {
    setNext((prevVal) => (prevVal === 0 ? Data.length - 1 : prevVal - 1));
  };

  useEffect(() => {
    ref.current = setInterval(handleNext, 3000); 
    return () => {
      clearInterval(ref.current);
    };
  }, []);



  // Services Section Here

  // updated services array
const services = [
  {
    title: "AC Installation",
    description: "Professional AC installation with quality assurance.",
    image: service1,
    price: "₹1,500",
    features: [
      "Indoor & outdoor unit setup",
      "Copper piping up to 10ft",
      "Stabilizer connection"
    ],
    button:'Booknow'
  },
  {
    title: "AC Repair",
    description: "Quick and reliable AC repair services for all brands.",
    image: service2,
    price: "₹500 - ₹1,200",
    features: [
      "Fan/motor replacement",
      "PCB repair",
      "Water leakage fix"
    ],
    button:'Booknow'
  },
  {
    title: "AC Sales",
    description: "Get the best deals on new air conditioners.",
    image: service3,
    price: "Starting ₹22,000",
    features: [
      "Split & window ACs available",
      "Free delivery",
      "Brand warranty included"
    ],
    button:'Booknow'
  },
  {
    title: "Spare Parts",
    description: "High-quality spare parts for all AC models.",
    image: service4,
    price: "₹200 - ₹3,000",
    features: [
      "Genuine brand parts",
      "Compressor & capacitor",
      "Fan motors & PCBs"
    ],
    button:'Booknow'
  },
  {
    title: "Gas Refilling",
    description: "Refill your AC gas for better cooling efficiency.",
    image: service5,
    price: "₹1,000 - ₹2,000",
    features: [
      "R22/R32/R410 gas available",
      "Leakage check",
      "Cooling test included"
    ],
    button:'Booknow'
  },
  {
    title: "AC Maintenance",
    description: "Regular maintenance to ensure optimal performance.",
    image: service7,
    price: "₹499",
    features: [
      "Filter & coil cleaning",
      "Gas pressure check",
      "Noise level inspection"
    ],
    button:'Booknow'
  },
  {
    title: "AC Cleaning",
    description: "Thorough cleaning for better air quality.",
    image: service8,
    price: "₹350",
    features: [
      "Indoor unit deep clean",
      "Jet pump wash",
      "Drain pipe clean"
    ],
    button:'Booknow'
  },
  {
    title: "AC Tune-up",
    description: "Comprehensive check-up and performance tuning.",
    image: service9,
    price: "₹599",
    features: [
      "Cooling check",
      "Electrical connection test",
      "Overall efficiency boost"
    ],
    button:'Booknow'
  },
  {
    title: "AC Inspection",
    description: "Detailed inspection to ensure system efficiency.",
    image: service10,
    price: "₹299",
    features: [
      "Thermostat evaluation",
      "Fan & motor check",
      "Voltage & current testing"
    ],
    button:'Booknow'
  }
];

const handleBookNow = (service) => {
  setSelectedService(service);
  setShowModal(true);
};



  return (
    <>
    <div className="carousel-container">
      <button className="nav-btn left-btn" onClick={handlePrev}>{"<"}</button>

      <div className="carousel">
        <img src={Data[next].download_url} alt='image' className="carousel-image" />
        
      </div>

      <button className="nav-btn right-btn" onClick={handleNext}>{">"}</button>
    </div>

    <div className="services">
      <h2 style={{"font-size":"30px","textAlign":"center","marginTop":"30px","color":"pink"}}>Our Services</h2>


      <div className="cards-container">
      {services.map((service, index) => (
        <div className="card" key={index}>
          <img src={service.image} alt={service.title} className="card-image" />
          <div className="card-content">
            <h3>{service.title}</h3>
            <p>{service.description}</p>
            <p><strong>Price:</strong> {service.price}</p>
            <ul style={{ paddingLeft: '20px' }}>
  {service.features.map((feature, idx) => (
    <li key={idx} style={{ listStyle: 'none', margin: '6px 0', display: 'flex', alignItems: 'center' }}>
      <span style={{ color: 'green', marginRight: '8px', minWidth: '25px' }}>
        ✔️ {idx + 1}.
      </span>
      <span>{feature}</span>
    </li>
  ))}
</ul>


{service.button && (
  <Button 
    variant="contained" 
    color="primary" 
    onClick={() => handleBookNow(service)} 
    style={{ marginTop: '10px', backgroundColor: '#e91e63', color: '#fff' }}
  >
    {service.button}
  </Button>
)}



          </div>
        </div>
      ))}
    </div>
      
    {showModal && (
  <div className="modal-overlay">
    <div className="modal">

    <button
    style={{"borderRadius":"20px","width":"fit-content","padding":"10px"}}
        className="modal-close"
        onClick={() => setShowModal(false)}
      >
        &times;
      </button>
      <h2>Book a Service</h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          toast.success("Service booked successfully!");
          setShowModal(false);
        }}
      >
        <label>Service Type:</label>
        <select required defaultValue={selectedService?.title || ""}>
          <option value="">-- Select Service --</option>
          <option value="AC Installation">AC Installation</option>
          <option value="AC Repair">AC Repair</option>
          <option value="AC Sales">AC Sales</option>
          <option value="Spare Parts">Spare Parts</option>
          <option value="Gas Refilling">Gas Refilling</option>
          <option value="AC Maintenance">AC Maintenance</option>
          <option value="AC Cleaning">AC Cleaning</option>
          <option value="AC Tune-up">AC Tune-up</option>
          <option value="AC Inspection">AC Inspection</option>
        </select>



        <label>Name:</label>
        <input type="text" required />

        <label>Email:</label>
        <input type="email" required />

        <label>Phone:</label>
        <input type="tel" required />

        <label>Address:</label>
        <textarea
          required
          rows="3"
          placeholder="Enter full address including area, city, and pincode"
        ></textarea>

        <label>Preferred Date:</label>
        <input type="date" required />

        <button type="submit">Confirm Booking</button>
        <button
          type="button"
          onClick={() => setShowModal(false)}
          className="close-btn"
        >
          Cancel
        </button>
      </form>
    </div>
  </div>
)}


{/* About Section Starts Here */}

<section className="about-section">
      <div className="about-container">
        <div className="about-image">
          <img
          
            src={aboutimg}
            alt="AC Technician Working"
          />
        </div>
        <div className="about-content">
          <h2 id='aboutus'>About Us</h2>
          <p>
            <strong>Welcome to CoolAir Solutions</strong> – your trusted partner in air conditioning services. Established in 2014, we have been serving residential and commercial clients with top-notch HVAC solutions tailored to their comfort needs.
          </p>
          <p>
            We specialize in a variety of services including AC installation, maintenance, repair, gas refilling, and system upgrades. Our team of experienced professionals ensures high-quality service backed by genuine parts and prompt customer support.
          </p>
          <p>
            At CoolAir Solutions, we don’t just fix air conditioners—we enhance your indoor experience. Whether it’s summer heat or regular servicing, our goal is to keep your environment cool, clean, and energy-efficient all year round.
          </p>
          <p>
            We proudly work with all major brands including Daikin, LG, Voltas, Samsung, Hitachi, and Carrier. Each of our services is delivered with a focus on quality, honesty, and long-term performance.
          </p>

          <h4>Our Vision</h4>
          <p>
            To be the most trusted and recommended AC service provider by continuously delivering exceptional service and comfort to every household and business.
          </p>

                 </div>
      </div>
    </section>
    <div className="about-us-section">
      <div className="about-content">
        <h4>Our Mission</h4>
        <ul>
          <li> Provide reliable and affordable AC services for every customer.</li>
          <li> Build long-term relationships through honesty and transparency.</li>
          <li> Promote energy-efficient and eco-friendly cooling solutions.</li>
          <li> Offer innovative technologies and trained professionals.</li>
        </ul>

        <h4>Why People Trust Us:</h4>
        <ul>
          <li>✅ 2+ Years of Experience</li>
          <li>✅ 1000+ Happy Customers</li>
          <li>✅ Genuine Spare Parts</li>
          <li>✅ Transparent Pricing</li>
          <li>✅ Same-Day Service Available</li>
          <li>✅ Post-Service Follow-Up</li>
        </ul>

        <p>
          Whether it’s a quick repair or a full AC installation, we promise top-tier service with a smile. Your comfort is our priority.
        </p>

        <button className="learn-more-btn">Explore Our Services</button>
      </div>

      <div className="ab-image">
        <img src={abImage} alt="Our AC Team" />
      </div>
    </div>

    <Testimonials />

    <div className="promo-offer">
      <h2>🔥 Summer Special Offer 🔥</h2>
      <p>Get <span className="highlight">20% OFF</span> on all AC Servicing!</p>
      <button 
      
      className="book-now-btn"
      onClick={() => toast.info("Coming Soon")}
      >Coming Soon</button>
    </div>


    <Brands />


    <Footer />
    
    </div>


    </>
  );
};

export default Home;
