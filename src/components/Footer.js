import React from 'react';
import './Footer.css'; // Import the CSS file for styling
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa'; // Import social icons

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footerContent">
        <div className="info">
          <img src="/logo.png" alt="Logo" className="logo" /> {/* Add your logo here */}
          <p className="footerText">
            Mpiti is underwritten by GMNT, <br />
            Company Registration No: 2022/238931/07
          </p>
        </div>
        <div className="quickLinks">
          <h4 className="footerHeading">Quick Links</h4>
          <ul className="linkList">
            <li><a href="/" className="link">Home</a></li>
            <li><a href="/about" className="link">About Us</a></li>
            <li><a href="/services" className="link">Services</a></li>
            <li><a href="/contact" className="link">Contact</a></li>
          </ul>
        </div>
        <div className="contact">
          <h4 className="footerHeading">Get in Touch</h4>
          <p className="footerText">Erf 48, Fikile Mlomo Street, Mbizana, 4800</p>
          <p className="footerText">039 251 0331</p>
          <p className="footerText">mpitifunerals@gmail.com</p>
        </div>
        <div className="branches">
          <h4 className="footerHeading">Branches</h4>
          <ul className="linkList">
            <li>Winnie-Madikizela Mandela Local Municipality (head office)</li>
          </ul>
        </div>
      </div>
      {/* Social Links Section */}
      <div className="socialLinks">
        <h4 className="footerHeading">Follow Us</h4>
        <div className="socialIcons">
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="socialIcon">
            <FaFacebook />
          </a>
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="socialIcon">
            <FaTwitter />
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="socialIcon">
            <FaInstagram />
          </a>
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="socialIcon">
            <FaLinkedin />
          </a>
        </div>
      </div>
      <div className="privacy">
        <p className="footerText">© 2024 Mpiti Funeral Parlour. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
