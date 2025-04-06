// Brands.jsx
import React from 'react';
import '../Styles/Home.css';

const brands = [
  { name: 'Samsung', logo: 'https://upload.wikimedia.org/wikipedia/commons/2/24/Samsung_Logo.svg' },
  { name: 'LG', logo: 'https://www.lg.com/levant_en/images/microsites/LG-Article-Air-Conditioner-Energy/LG-Article-Air-Conditioner-Energy-01-D.jpg' },
  { name: 'Daikin', logo: 'https://perthaircon.com.au/wp-content/uploads/2021/05/Daikin-CORA-series-2-website-image.jpg' },
  { name: 'Voltas', logo: 'https://bl-i.thgim.com/public/companies/m43hkd/article54320380.ece/alternates/LANDSCAPE_1200/Voltasjpg' },
  { name: 'Blue Star', logo: 'https://arihantelectronics.org/wp-content/uploads/2020/08/bluestar-1ton-split.jpg' },
  { name: 'lloyd', logo: 'https://cdn1.smartprix.com/rx-iKHEN5CFN-w1200-h1200/lloyd-ls18i52wbel-1.jpg' },
];


const steps = [
    {
      title: "Book Online",
      description: "Choose your AC service, select a date, and confirm your booking in just a few clicks.",
      icon: "📅",
    },
    {
      title: "Get Expert Visit",
      description: "Our certified technician will arrive at your doorstep on time.",
      icon: "🛠️",
    },
    {
      title: "Enjoy Cool Comfort",
      description: "Sit back and relax while we take care of everything. Feel the difference!",
      icon: "❄️",
    },
  ];

const Brands = () => {
  return (
    <>
    <div className="brands-section">
      <h2>Brands We Service</h2>
      <div className="brands-logos">
        {brands.map((brand) => (
          <div key={brand.name} className="brand-item">
            <img src={brand.logo} alt={brand.name} className='brand-img' />
            <p>{brand.name}</p>
          </div>
        ))}
      </div>
    </div>


    <section className="how-it-works">
      <h2>How It Works</h2>
      <div className="steps-container">
        {steps.map((step, index) => (
          <div key={index} className="step-card">
            <div className="step-icon">{step.icon}</div>
            <h3>{step.title}</h3>
            <p>{step.description}</p>
          </div>
        ))}
      </div>
    </section>
    </>

    
  );
};




export default Brands;
