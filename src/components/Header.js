import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Ensure you have react-router-dom installed
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa'; // Import icons
import './Header.css'; // Import CSS for styling

const Header = () => {
    const [activeLink, setActiveLink] = useState('');

    const handleLinkClick = (link) => {
        setActiveLink(link);
    };

    const handleAddressClick = () => {
        const address = 'Erf 48 Fikile Mlomo Street, Mbizana, 4800';
        const url = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;
        window.open(url, '_blank'); // Open in a new tab
    };

    const handlePhoneClick = () => {
        const phoneNumber = '(039) 251-0331';
        window.open(`tel:${phoneNumber.replace(/\D/g, '')}`); // Remove non-digit characters
    };

    const handleEmailClick = () => {
        const email = 'mpitifunerals@gmail.com';
        window.open(`mailto:${email}`);
    };

    return (
        <>
            <div className="contactInfo">
                <div className="contactItem" onClick={handleAddressClick}>
                    <FaMapMarkerAlt className="icon" />
                    <span>Erf 48 Fikile Mlomo Street, Mbizana, 4800</span>
                </div>
                <div className="contactItem" onClick={handlePhoneClick}>
                    <FaPhone className="icon" />
                    <span>(039) 251-0331</span>
                </div>
                <div className="contactItem" onClick={handleEmailClick}>
                    <FaEnvelope className="icon" />
                    <span>mpitifunerals@gmail.com</span>
                </div>
            </div>
            <header className="header">
                <div className="logo">
                    <Link to="/home">Logo</Link>
                </div>
                <nav className="nav">
                    <Link 
                        to="/home" 
                        className={activeLink === 'home' ? 'active' : ''} 
                        onClick={() => handleLinkClick('home')}
                    >
                        Home
                    </Link>
                    <Link 
                        to="/about" 
                        className={activeLink === 'about' ? 'active' : ''} 
                        onClick={() => handleLinkClick('about')}
                    >
                        About Us
                    </Link>
                    <Link 
                        to="/services" 
                        className={activeLink === 'services' ? 'active' : ''} 
                        onClick={() => handleLinkClick('services')}
                    >
                        Services
                    </Link>
                    <Link 
                        to="/contact" 
                        className={activeLink === 'contact' ? 'active' : ''} 
                        onClick={() => handleLinkClick('contact')}
                    >
                        Contact
                    </Link>
                </nav>
                <Link to="/contact" className="inquiriesButton">
                    Inquiries
                </Link>
            </header>
            <div className="green-line"></div>
        </>
    );
};

export default Header;

