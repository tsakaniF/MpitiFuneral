import React from 'react';
import './About.css'; // Import CSS for styling

const About = () => {
  return (
    <div className="about-container">
      {/* Hero Section */}
      <div className="hero-section">
        <img src="/images/contact.jpg" alt="Hero" className="hero-image" />
        <div className="hero-text">
          <h1>About Us</h1>
          <p>Compassionate and Professional Services</p>
        </div>
      </div>

      <p className="about-description">
        MPITI’S FUNERAL HOME is dedicated to providing compassionate and professional services to families in their time of need.
      </p>
      <h2>Our Mission</h2>
      <p className="mission-statement">
        Our mission is to honor the lives of those we serve by providing personalized and dignified funeral services that reflect their unique lives.
      </p>

      {/* Team Members Section */}
      <h2>Meet Our Team</h2>
      <div className="team-container">
        <div className="team-member">
          <h3>MRS. B MPITI</h3>
          <p>Director</p>
          <p>With over 20 years of experience, Mrs. Mpiti leads our team with compassion and dedication.</p>
        </div>
        <div className="team-member">
          <h3>MR. J SMITH</h3>
          <p>Funeral Director</p>
          <p>Mr. Smith provides guidance and support to families during their time of need.</p>
        </div>
        <div className="team-member">
          <h3>MS. L JOHNSON</h3>
          <p>Administrative Assistant</p>
          <p>Ms. Johnson ensures that all operations run smoothly and efficiently.</p>
        </div>
      </div>
    </div>
  );
};

export default About;
