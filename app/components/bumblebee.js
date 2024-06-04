import React, { useEffect, useState, useRef } from 'react';
import Pollen from './pollen';

const Bumblebee = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [trailPosition, setTrailPosition] = useState({ x: 0, y: 0 });
  const [pollenCloud, setPollenCloud] = useState([]);

  // Bee dimensions 
  const beeWidth = 50;
  const beeHeight = 50;

  const offsetX = 20;
  const offsetY = 20;

  // A ref to track if pollen should be created
  const shouldCreatePollen = useRef(false);

  useEffect(() => {
    const handleMouseMove = (event) => {
      // Calculate cursor position relative to the viewport
      const xRelativeToViewport = event.clientX;
      const yRelativeToViewport = event.clientY;
  
      // Adjust cursor position based on scroll position
      const x = xRelativeToViewport + window.scrollX;
      const y = yRelativeToViewport + window.scrollY;
  
      setPosition({ x: x + offsetX, y: y + offsetY });
      shouldCreatePollen.current = true;
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setTrailPosition((prevPosition) => ({
        x: prevPosition.x + (position.x - prevPosition.x) * 0.6, 
        y: prevPosition.y + (position.y - prevPosition.y) * 0.6, 
      }));

      if (shouldCreatePollen.current) {
        // Adjust pollen creation to be from the bee's butt
        setPollenCloud((prevPollens) => [
          ...prevPollens,
          {
            id: Date.now(),
            x: trailPosition.x + beeWidth / 2,
            y: trailPosition.y + beeHeight,
          },
        ]);
        shouldCreatePollen.current = false;
      }
    }, 16); 

    return () => clearInterval(interval);
  }, [position, trailPosition]);

  const beeStyle = {
    position: 'absolute',
    top: trailPosition.y,
    left: trailPosition.x,
    transition: 'top 0.4s, ease out, left 0.4s ease out', 
    width: `${beeWidth}px`,
    height: `${beeHeight}px`,
    backgroundImage: 'url("/bee.png")', 
    backgroundSize: 'cover',
    pointerEvents: 'none', // Ensure the bee doesn't interfere with cursor interactions
  };

  const removePollen = (id) => {
    setPollenCloud((prevPollens) => prevPollens.filter(pollenCloud => pollenCloud.id !== id));
  };

  return (
    <>
      <div style={beeStyle}></div>
      {pollenCloud.map(pollenCloud => (
        <Pollen
          key={pollenCloud.id}
          x={pollenCloud.x}
          y={pollenCloud.y}
          onComplete={() => removePollen(pollenCloud.id)}
        />
      ))}
    </>
  );
};

export default Bumblebee;
