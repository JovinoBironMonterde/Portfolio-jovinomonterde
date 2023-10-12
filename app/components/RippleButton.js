"use client";
import React, { useState } from 'react';
import '../../public/assets/css/globals.css'


const RippleButton = ({ label, duration }) => {
const [ripple, setRipple] = useState({ x: 0, y: 0, active: false });

  const handleClick = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = e.clientX - rect.left - size / 2;
    const y = e.clientY - rect.top - size / 2;
    setRipple({ x, y, active: true });

    setTimeout(() => {
      setRipple({ x: 0, y: 0, active: false });
    }, 500); // Adjust the duration as needed
  };

  return (
    <button className="ripple-button" onClick={handleClick}>
      <span className={`ripple ${ripple.active ? 'active' : ''}`} style={{ left: ripple.x, top: ripple.y }}></span>
      Click Me 
    </button>
  );
};

export default RippleButton;
