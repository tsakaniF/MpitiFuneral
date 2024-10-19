// components/Carousel.js
import React, { useState, useEffect } from 'react';
import './Carousel.css'; // Optional: Create a CSS file for additional styling

const images = [
  { src: '/images/mpitibgimage1.jpg', 
    title: "Welcome to Mpiti's Funeral Home",
    subtitle: "Providing compassionate and professional services to our community."} ,
  { src: '/images/mpitibgimage2.jpg',
    title: "Honoring Lives with Dignity",
    subtitle: "We celebrate the lives of those we have lost." },
  { src: '/images/mpitibgimage3.jpg',
    title: "Comprehensive Funeral Services",
    subtitle: "Tailored arrangements to meet your needs." },
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="carousel">
      <img src={images[currentIndex].src} alt={images[currentIndex].text} className="carousel-image" />
      <div className="carousel-text">{images[currentIndex].text}</div>
    </div>
  );
};

export default Carousel;
