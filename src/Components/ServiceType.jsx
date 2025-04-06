import React from 'react';
import '../Styles/Services.css'

const services = [
  {
    id: 1,
    name: "Jet Foam AC Service (Window)",
    image: "https://acvado.com/wp-content/uploads/2019/07/AC-jetjpg.jpg",
    description: "Indoor unit deep cleaning with foam & jet spray. Filters and coils cleaned thoroughly. Free gas checkup included.",
   
    available: true,
    rating: 4.5,
    reviews: [
      { user: "Rahul", comment: "Excellent service!", rating: 5 },
      { user: "Priya", comment: "Very professional staff.", rating: 4 }
    ]
  },
  {
    id: 2,
    name: "Jet Foam AC Service (Split)",
    image: "https://5.imimg.com/data5/OR/AT/SM/SELLER-30908111/split-ac-repairing.jpg",
    description: "Indoor unit deep cleaning with foam & jet spray. Filters and coils cleaned thoroughly. Free gas checkup included.",
    
    available: true,
    rating: 4.7,
    reviews: [
      { user: "Amit", comment: "Quick and efficient service.", rating: 5 },
      { user: "Sneha", comment: "Highly recommend!", rating: 5 }
    ]
  },
  {
    id: 3,
    name: "Anti-Rust Spray Foam Service",
    image: "https://www.tsourosmarine.gr/49656-large_default/ac-90-lubricant-and-anti-rust-spray.jpg",
    description: "Deep cleaning with foam & jet spray. Prevents rust, boosts cooling, extends lifespan, and reduces gas leaks. Reduces energy consumption.",
   
    available: true,
    rating: 4.6,
    reviews: [
      { user: "Vikram", comment: "Noticed improved cooling after the service.", rating: 4.5 },
      { user: "Anjali", comment: "Worth the price.", rating: 4.5 }
    ]
  },
  {
    id: 4,
    name: "Window AC Installation",
    image: "https://houseandfamilytips.com/wp-content/uploads/2020/11/Untitled-4.jpg",
    description: "Installation of Window AC unit. Includes fixing of AC stand, connecting inlet assembly, and checking functions after installation.",
    
    available: true,
    rating: 4.8,
    reviews: [
      { user: "Manish", comment: "Smooth installation process.", rating: 5 },
      { user: "Kavita", comment: "Technicians were very knowledgeable.", rating: 4.5 }
    ]
  },
  {
    id: 5,
    name: "Split AC Installation Service",
    image: "https://s42814.pcdn.co/wp-content/uploads/2019/12/03_heat_pump-scaled.jpg.optimal.jpg",
    description: "Includes fixing of AC stand on wall, connecting inlet assembly, and checking functions after installation.",
    
    available: true,
    rating: 4.9,
    reviews: [
      { user: "Suresh", comment: "Very professional installation.", rating: 5 },
      { user: "Neha", comment: "Highly satisfied with the service.", rating: 5 }
    ]
  },
  {
    id: 6,
    name: "Window AC Uninstallation",
    image: "https://tse4.mm.bing.net/th?id=OIP.Afun6zJ9pQXlZCEDaNoZMAHaEK&pid=Api&P=0&h=180",
    description: "Dismantling of Window AC unit. Includes disconnecting inlet assembly and packing the unit.",
    
    available: true,
    rating: 4.3,
    reviews: [
      { user: "Arjun", comment: "Quick and hassle-free uninstallation.", rating: 4 },
      { user: "Meera", comment: "Good service.", rating: 4.5 }
    ]
  },
  {
    id: 7,
    name: "Split AC Uninstallation Service",
    image: "https://5.imimg.com/data5/SELLER/Default/2024/6/427672117/OR/OC/GW/12915947/hi-wall-split-ac-repairing-service-500x500.jpg",
    description: "Dismantling of Split AC unit. Includes disconnecting inlet assembly and packing the unit.",
   
    available: true,
    rating: 4.4,
    reviews: [
      { user: "Rohan", comment: "Efficient uninstallation.", rating: 4.5 },
      { user: "Pooja", comment: "Satisfied with the service.", rating: 4.5 }
    ]
  },
  {
    id: 8,
    name: "Window AC Less/No Cooling Repair",
    image: "https://keyvendors.com/blogs/wp-content/uploads/2023/04/why-ac-is-not-cooling-1.jpg",
    description: "Professional inspection of Window AC for less or no cooling issues. Free gas checkup and repair quote provided.",
    
    available: true,
    rating: 4.2,
    reviews: [
      { user: "Sahil", comment: "Issue resolved promptly.", rating: 4 },
      { user: "Anita", comment: "Technician was knowledgeable.", rating: 4.5 }
    ]
  },
  {
    id: 9,
    name: "Split AC Less/No Cooling Repair",
    image: "https://irp.cdn-website.com/69ec0d74/dms3rep/multi/How+Often+Should+HVAC+Be+Serviced.jpg",
    description: "Professional inspection of Split AC for less or no cooling issues. Free gas checkup and repair quote provided.",
    
    available: true,
    rating: 4.3,
    reviews: [
      { user: "Karan", comment: "Fixed the issue quickly.", rating: 4.5 },
      { user: "Simran", comment: "Good service overall.", rating: 4 }
    ]
  }
];



const OurACServices = () => {
    return (
      <div className="containers">
        <h1>Our AC Services Types</h1>
  
        <div className="grid">
          {services.map(service => (
            <div key={service.id} className="card">
              <img src={service.image} alt={service.name} />
              <h2>{service.name}</h2>
              <p>{service.description}</p>
             
              <p><strong>Rating:</strong> {service.rating} ⭐</p>
             
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default OurACServices;