

// ClockApp.js

import React from 'react';
import Clock from './Clock';
import image1 from './AC.jpg'; 
import image2 from './pillow.jpg';
import image3 from './washing.jpg';
import image4 from './table.jpg';
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
        <p>При покупки кондиционера, сервис бесплатный...</p>
        <p><b>155 000тг</b></p>
      </div>
      <div className="image-container">
        <img src={image2} alt="Image 2" className="background-image" width="230px"  />
        <div className="clock-overlay">
          <Clock saleDate={saleDate} />
        </div>
        <p>Успей купить подушку как в отеле, о которой ты так мечтала...</p>
        <p><b>11 000тг</b></p>
      </div>
      <div className="image-container">
    <img src={image3}  alt="Image 3" className="background-image" width="250px" height="345px"  />
      <div className="clock-overlay">
          <Clock saleDate={saleDate} />
        </div>
        <p>Сегодня только это скидка на стиральную машину от LG </p>
        <p><b>240 000тг</b></p>
      </div>

      <div className="image-container">
    <img src={image4}  alt="Image 4" className="background-image" width="250px" height="345px"  />
      <div className="clock-overlay">
          <Clock saleDate={saleDate} />
        </div>
        <p>Только сегодня, можешь купить этот замечательный стол... </p>
        <p><b>80 000тг</b></p>
      </div>
    </div>
  );
};

export default ClockApp;
