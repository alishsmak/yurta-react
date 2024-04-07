

// ClockApp.js

import React from 'react';
import Clock from './Clock';
import image1 from './AC.jpg'; 
import image2 from './pillow.jpg';
import image3 from './washing.jpg';
import './styleClock.css'; 



const ClockApp = () => {
  const saleDate = new Date("September 30, 2024 05:04:00");

  return (
    <div className="app-container">
      <div className="image-container">
        <img src={image1} alt="Image 1" className="background-image"  width="250px" height="345px" />
        <div className="clock-overlay">
          <Clock saleDate={saleDate} />
        </div>
      </div>
      <div className="image-container">
        <img src={image2} alt="Image 2" className="background-image" width="230px"  />
        <div className="clock-overlay">
          <Clock saleDate={saleDate} />
        </div>
      </div>
      <div className="image-container">
    <img src={image3}  alt="Image 3" className="background-image" width="250px" height="345px"  />
      <div className="clock-overlay">
          <Clock saleDate={saleDate} />
        </div>
      </div>
    </div>
  );
};

export default ClockApp;
