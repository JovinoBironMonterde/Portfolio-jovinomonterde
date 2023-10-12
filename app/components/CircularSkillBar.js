import React from 'react';

const CircularSkillBar = ({ percentage, text }) => {
  return (
    <div className="circular-skill-bar">
      <div className="circular-skill-bar__circle">
        <div className="circular-skill-bar__mask full">
          <div className="circular-skill-bar__fill"></div>
        </div>
        <div className="circular-skill-bar__mask half">
          <div className="circular-skill-bar__fill"></div>
          <div className="circular-skill-bar__fill fix"></div>
        </div>
        <div className="circular-skill-bar__inside-circle"></div>
      </div>
      <div className="circular-skill-bar__percentage">
        <span>{percentage}%</span>
      </div>
      <div className="circular-skill-bar__text">{text}</div>
    </div>
  );
};

export default CircularSkillBar;
