// components/Pollen.js
import React, { useEffect } from 'react';

const Pollen = ({ x, y, onComplete }) => {
  useEffect(() => {
    const timeout = setTimeout(onComplete, 1000); // Duration of the pollen animation in milliseconds
    return () => clearTimeout(timeout);
  }, [onComplete]);

  const pollenStyle = {
    position: 'absolute',
    top: y,
    left: x,
    width: '20px', // Adjust size as needed
    height: '20px',
    backgroundColor: 'yellow',
    borderRadius: '50%',
    boxShadow: '0 0 10px 10px yellow',
    opacity: 0.8,
    animation: 'poof 1s ease-out forwards',
    pointerEvents: 'none',
  };

  return <div style={pollenStyle}></div>;
};

export default Pollen;

// Add the following CSS to your global styles (e.g., in globals.css)
// @keyframes poof {
//   0% { transform: scale(1); opacity: 1; }
//   100% { transform: scale(2); opacity: 0; }
// }
