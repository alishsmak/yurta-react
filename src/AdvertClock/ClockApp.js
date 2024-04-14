// ClockApp.js

import React from "react";
import Clock from "./Clock";
import image1 from "./AC.jpg";
import image2 from "./pillow.jpg";
import image3 from "./washing.jpg";
import image4 from "./table.jpg";
import "./styleClock.css";

const ClockApp = () => {
  const saleDate = new Date("September 30, 2024 05:04:00");

  return (
    <div className="clock-container">
      <div className="clock-card">
        <img src={image1} alt="" />
        <Clock saleDate={saleDate} />
        <p>При покупки кондиционера, сервис бесплатный...</p>
        <p>
          <b>155 000тг</b>
        </p>
      </div>
      <div className="clock-card">
        <img src={image2} alt="" />
        <Clock saleDate={saleDate} />
        <p>Успей купить подушку как в отеле, о которой ты так мечтала...</p>
        <p>
          <b>11 000тг</b>
        </p>
      </div>
      <div className="clock-card">
        <img src={image3} alt="" />
        <Clock saleDate={saleDate} />
        <p>Сегодня только это скидка на стиральную машину от LG </p>
        <p>
          <b>240 000тг</b>
        </p>
      </div>

      <div className="clock-card">
        <img src={image4} alt="" />
        <Clock saleDate={saleDate} />
        <p>Только сегодня, можешь купить этот замечательный стол... </p>
        <p>
          <b>80 000тг</b>
        </p>
      </div>
    </div>
  );
};

export default ClockApp;
