import React from "react";
import '../Styles/Services.css'
import Footer from "./Footer";
import ServicesType from '../Components/ServiceType'
import FAQ from "../Components/FAQ";

const services = [
  {
    id: 1,
    name: "AC Installation",
    image: "https://modernize.com/wp-content/uploads/2016/09/ductless-installation.jpg",
    description: "We provide professional AC installation services for all types of air conditioners including split, window, and centralized systems.",
    available: true,
  },
  {
    id: 2,
    name: "AC Repair",
    image: "https://www.thestyleinspiration.com/wp-content/uploads/2020/07/Air-Conditioning-Repair-Tips.jpg",
    description: "Quick and reliable repair services to fix cooling issues, noises, gas leakage, or electrical problems.",
    available: true,
  },
  {
    id: 3,
    name: "AC Gas Refill",
    image: "https://1000fix.com/wp-content/uploads/2024/04/AC-Gas-Refill-service.webp",
    description: "We offer R-22, R-410A, and other refrigerant gas refill services for split and window AC units.",
    available: true,
  },
  {
    id: 4,
    name: "AC Maintenance",
    image: "https://applianceguard.com/wp-content/uploads/2015/09/air-conditioner-repair-hvac.jpg",
    description: "Comprehensive maintenance services to improve AC efficiency and extend unit lifespan.",
    available: true,
  },
  {
    id: 5,
    name: "Central AC Servicing",
    image: "https://www.acsystemsinc.com/wp-content/uploads/2021/05/Central-Air-Conditioning-Installation.jpg",
    description: "We currently do not provide servicing for large-scale central AC systems in commercial buildings.",
    available: false,
  },
  {
    id: 6,
    name: "AC Remote Replacement",
    image: "https://m.media-amazon.com/images/I/51VG6fnLvzL._AC_SL1000_.jpg",
    description: "Get your damaged or lost AC remotes replaced with compatible, branded units.",
    available: true,
  },
  {
    id: 7,
    name: "Old AC Disposal",
    image: "https://goloadup.com/wp-content/uploads/2019/01/proper-ac-unit-disposal.jpg",
    description: "Eco-friendly disposal and recycling of outdated or damaged air conditioners.",
    available: false,
  },
  {
    id: 8,
    name: "AC Duct Cleaning",
    image: "https://www.jusoorfm.com/wp-content/uploads/2024/01/ac-duct-cleaning.png",
    description: "This service is temporarily unavailable due to staffing constraints.",
    available: true,
  },
];

const OurACServices = () => {
  return (

    <>
    <div className="services-container">
      <h2 style={{"textAlign":"center"}}>Our Services</h2>
      <p>
        We offer a wide range of air conditioning services for residential and
        commercial customers. Below is the list of our services and their
        current availability.
      </p>
      <div className="services-grid">
        {services.map((service) => (
          <div key={service.id} className="service-card">
            <img
              src={service.image}
              alt={service.name}
              className="service-image"
            />
            <div className="service-content">
              <h3>{service.name}</h3>
              <p>{service.description}</p>
              <span
                className={`status-badge ${
                  service.available ? "available" : "unavailable"
                }`}
              >
                {service.available ? "Available" : "Unavailable"}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>

<ServicesType />

<FAQ />
<Footer />
    </>
  );
};

export default OurACServices;
