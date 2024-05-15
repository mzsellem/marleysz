import React, { useEffect, useState, useRef } from 'react';
import Pollen from './pollen';

const Bumblebee = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [trailPosition, setTrailPosition] = useState({ x: 0, y: 0 });
  const [pollens, setPollens] = useState([]);

  // Define the bee dimensions (adjust these values as needed)
  const beeWidth = 50;
  const beeHeight = 50;

  // Define the offset (adjust these values as needed)
  const offsetX = 20;
  const offsetY = 20;

  // A ref to track if pollen should be created
  const shouldCreatePollen = useRef(false);

  useEffect(() => {
    const handleMouseMove = (event) => {
      setPosition({ x: event.clientX + offsetX, y: event.clientY + offsetY });
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
        x: prevPosition.x + (position.x - prevPosition.x) * 0.6, // Increased from 0.3 to 0.6
        y: prevPosition.y + (position.y - prevPosition.y) * 0.6, // Increased from 0.3 to 0.6
      }));

      if (shouldCreatePollen.current) {
        // Adjust pollen creation to be from the bee's butt
        setPollens((prevPollens) => [
          ...prevPollens,
          {
            id: Date.now(),
            x: trailPosition.x + beeWidth / 2,
            y: trailPosition.y + beeHeight,
          },
        ]);
        shouldCreatePollen.current = false;
      }
    }, 16); // Decreased from 25ms to 16ms (approximately 60 FPS)

    return () => clearInterval(interval);
  }, [position, trailPosition]);

  const beeStyle = {
    position: 'absolute',
    top: trailPosition.y,
    left: trailPosition.x,
    transition: 'top 0.016s, left 0.016s', // Reduced transition duration for smoother movement
    width: `${beeWidth}px`, // Adjust size as needed
    height: `${beeHeight}px`,
    backgroundImage: 'url("/beee.png")', // Path to your bee image
    backgroundSize: 'cover',
    pointerEvents: 'none', // Ensure the bee doesn't interfere with cursor interactions
  };

  const removePollen = (id) => {
    setPollens((prevPollens) => prevPollens.filter(pollen => pollen.id !== id));
  };

  return (
    <>
      <div style={beeStyle}></div>
      {pollens.map(pollen => (
        <Pollen
          key={pollen.id}
          x={pollen.x}
          y={pollen.y}
          onComplete={() => removePollen(pollen.id)}
        />
      ))}
    </>
  );
};

export default Bumblebee;
