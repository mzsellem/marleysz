// components/Bumblebee.js
import React, { useEffect, useState } from 'react';

const Bumblebee = ({ onHoverLink }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [trailPosition, setTrailPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      setPosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setTrailPosition((prevPosition) => ({
        x: prevPosition.x + (position.x - prevPosition.x) * 0.1,
        y: prevPosition.y + (position.y - prevPosition.y) * 0.1,
      }));
    }, 16); // Approximately 60 frames per second

    return () => clearInterval(interval);
  }, [position]);

  useEffect(() => {
    const checkHover = () => {
      const element = document.elementFromPoint(trailPosition.x, trailPosition.y);
      if (element && element.tagName === 'A') {
        onHoverLink(trailPosition.x, trailPosition.y);
      }
    };

    const interval = setInterval(checkHover, 100); // Check for hover every 100ms

    return () => clearInterval(interval);
  }, [trailPosition, onHoverLink]);

  const beeStyle = {
    position: 'absolute',
    top: trailPosition.y,
    left: trailPosition.x,
    transition: 'top 0.1s, left 0.1s',
    width: '50px', // Adjust size as needed
    height: '50px',
    backgroundImage: 'url("/beee.png")', // Correct path to your bee image
    backgroundSize: 'cover',
    pointerEvents: 'none', // Ensure the bee doesn't interfere with cursor interactions
  };

  return <div style={beeStyle}></div>;
};

export default Bumblebee;
