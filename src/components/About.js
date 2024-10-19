import React from 'react';
import './About.css'; // Import CSS for styling

const About = () => {
  return (
    <div className="about-container">
      <h1>About Us</h1>
      <p className="about-description">
        MPITI’S FUNERAL HOME is dedicated to providing compassionate and professional services to families in their time of need.
      </p>
      <h2>Our Mission</h2>
      <p className="mission-statement">
        Our mission is to honor the lives of those we serve by providing personalized and dignified funeral services that reflect their unique lives.
      </p>
      <h2>Meet Our Team</h2>
      <div className="team-container">
        <div className="team-member">
          <h3>MRS. B MPITI</h3>
          <p>Director</p>
        </div>
        <div className="team-member">
          <h3>MR. J SMITH</h3>
          <p>Funeral Director</p>
        </div>
        <div className="team-member">
          <h3>MS. L JOHNSON</h3>
          <p>Administrative Assistant</p>
        </div>
      </div>
    </div>
  );
};

export default About;
