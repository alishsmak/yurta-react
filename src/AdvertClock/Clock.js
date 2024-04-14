// Clock.js

import React, { useState, useEffect } from "react";

const Clock = ({ saleDate }) => {
  const [remainingTime, setRemainingTime] = useState(calculateTimeRemaining());

  useEffect(() => {
    const timerID = setInterval(() => {
      setRemainingTime(calculateTimeRemaining());
    }, 1000);

    return () => clearInterval(timerID);
  }, [saleDate]);

  function calculateTimeRemaining() {
    const now = new Date();
    if (!saleDate) return 0;
    const diff = saleDate.getTime() - now.getTime();
    return Math.max(diff, 0);
  }

  function formatTime(time) {
    return (time < 10 ? "0" : "") + time;
  }

  const hours = Math.floor((remainingTime / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((remainingTime / (1000 * 60)) % 60);
  const seconds = Math.floor((remainingTime / 1000) % 60);

  return (
    <div className="clock-overlay">
      <div className="clock-face">
        <span>
          {"Осталось: "}
          {formatTime(hours)}:{formatTime(minutes)}:{formatTime(seconds)}
        </span>
      </div>
    </div>
  );
};

export default Clock;
