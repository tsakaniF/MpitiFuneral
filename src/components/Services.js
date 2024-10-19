import React from 'react';
import './Services.css'; // Import CSS for styling

const servicesList = [
  { title: 'Funeral Schemes and Arrangements', description: 'Comprehensive plans to suit your needs.' },
  { title: 'Wedding Arrangements', description: 'Beautiful setups for your special day.' },
  { title: 'Tent Hire', description: 'Quality tents for all occasions.' },
  { title: 'Burial Scheme', description: 'Affordable burial plans available.' },
  { title: 'Public Address Systems', description: 'High-quality sound systems for events.' },
  { title: 'Exhumations', description: 'Professional exhumation services.' },
  { title: 'Decorations and Catering', description: 'Elegant decorations and delicious catering.' },
  { title: 'Fresh Flowers', description: 'Beautiful floral arrangements for any occasion.' },
  { title: 'Stages', description: 'Custom stages for events and ceremonies.' },
  { title: 'Chairs and Programmes', description: 'Comfortable seating and printed programmes.' },
];

const Services = () => {
  return (
    <div className="services-container">
      <h1>Our Services</h1>
      <div className="services-grid">
        {servicesList.map((service, index) => (
          <div className="service-card" key={index}>
            <h2>{service.title}</h2>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
