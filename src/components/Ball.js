import React from 'react';
import './Ball.css';

const Ball = ({ phase }) => {
  return (
    <div className={`ball ${phase}`}></div>
  );
}

export default Ball;
