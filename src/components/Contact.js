import React, { useState } from 'react';
import './Contact.css'; // Import CSS for styling

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

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
      <h1>Contact Us</h1>
      <div className="contact-info">
        <p><strong>ADDRESS:</strong> 160 Hope Street, Bizana, 4800</p>
        <p><strong>Director:</strong> MRS. B MPITI</p>
        <p><strong>Cell:</strong> 083-488 3908</p>
      </div>
      <form className="contact-form" onSubmit={handleSubmit}>
        <h2>Send Us a Message</h2>
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
  );
};

export default Contact;
