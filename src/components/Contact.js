import React, { useState } from 'react';
import './Contact.css'; // Import CSS for styling

const Contact = () => {
  // State variables for form inputs
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here (e.g., send data to an API)
    console.log('Form submitted:', { name, email, message });
    // Reset form fields
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <div className="contact-container">
      {/* Hero Section */}
      <div className="hero-section">
        <img src="/images/contact.jpg" alt="Hero" className="hero-image" />
        <div className="hero-text">
          <h1>We are here to assist you with any inquiries.</h1>
        </div>
      </div>

      {/* Contact Content Section */}
      <div className="contact-content">
        {/* Contact Information */}
        <div className="contact-info">
          <h2>Contact Information</h2>
          <h3 className="email-button">Enquiries</h3> {/* Add class for styling */}
          <p>
            <i className="fas fa-phone"></i> 083-488 3908
          </p>
          <p>
            <i className="fas fa-envelope"></i> mpitifunerals@gmail.com
          </p>
          <p>
            <i className="fas fa-clock"></i> <strong>Business Hours:</strong>
          </p>
          <p>07H00 - 19H00 Weekdays</p>
          <p>08H00 - 14H00 Saturdays</p>
          <p>(Closed on Public Holidays and Sundays)</p>
        </div>

        {/* Contact Form */}
        <form className="contact-form" onSubmit={handleSubmit}>
          <h2>Send Us a Message</h2>
          <h3 className="email-button">Email</h3> {/* Add class for styling */}
          <input 
            type="text" 
            placeholder="Your Name" 
            value={name} 
            onChange={(e) => setName(e.target.value)} 
            required 
          />
          <input 
            type="email" 
            placeholder="Your Email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            required 
          />
          <textarea 
            placeholder="Your Message" 
            value={message} 
            onChange={(e) => setMessage(e.target.value)} 
            required 
          />
          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
