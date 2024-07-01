import React, { useEffect, useState, useRef } from 'react';
import Pollen from '../pollen/pollen';

export type PollenCloud = {
  id: number,
  x: number,
  y: number,
}

const Bumblebee = () => {
  const [trailPosition, setTrailPosition] = useState({ x: 0, y: 0 });
  const [pollenCloud, setPollenCloud] = useState<PollenCloud[]>([]);
  const lastPollenTime = useRef<number>(Date.now());
  const pollenIdCounter = useRef(0);  // Use a ref to keep track of unique IDs
  const pollenIndex = useRef(0); // Keep track of the current pollen index for recycling

  const maxPollenCount = 5; // Maximum number of pollen divs to be created


  const beeWidth = 50;
  const beeHeight = 50;

  const offsetX = 20;
  const offsetY = 20;

  const lastMousePosition = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      const x = event.clientX + window.scrollX;
      const y = event.clientY + window.scrollY;
  
      lastMousePosition.current = { x: x + offsetX, y: y + offsetY };
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  //Animate the bee's movement and create pollen
  useEffect(() => {
    let animationFrameId: number;

    const animate = () => {
      setTrailPosition((prevPosition) => {
        const newX = prevPosition.x + (lastMousePosition.current.x - prevPosition.x) * 1.5;
        const newY = prevPosition.y + (lastMousePosition.current.y - prevPosition.y) * 1.5;
        
        // Clamp the new positions within the viewport boundaries
        const clampedX = Math.min(Math.max(newX, 0), document.body.scrollWidth - beeWidth);
        //get height of largest div and switch out window.innerHeight with it
        const clampedY = Math.min(Math.max(newY, 0), document.body.scrollHeight - beeHeight);
        
        // Check the time to create a new pollen
        const currentTime = Date.now();
        if (currentTime - lastPollenTime.current >= 100) {
          setPollenCloud((prevPollens) => {
            const newPollens = [...prevPollens];

            // Check if we need to add a new pollen or recycle an existing one
            if (newPollens.length < maxPollenCount) {
              newPollens.push({
                id: pollenIdCounter.current++,  // Increment the counter for a unique ID
                x: clampedX + beeWidth / 2,
                y: clampedY + beeHeight,
              });
            } else {
              // Recycle an existing pollen
              newPollens[pollenIndex.current] = {
                ...newPollens[pollenIndex.current],
                x: clampedX + beeWidth / 2,
                y: clampedY + beeHeight,
              };
              pollenIndex.current = (pollenIndex.current + 1) % maxPollenCount;
            }

            return newPollens;
          });
          lastPollenTime.current = currentTime;
        } 

        return { x: clampedX, y: clampedY };
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => cancelAnimationFrame(animationFrameId);
  }, []); // Empty dependency array to run only once

  const beeStyle: React.CSSProperties = {
    position: 'absolute',
    top: trailPosition.y,
    left: trailPosition.x,
    width: `${beeWidth}px`,
    height: `${beeHeight}px`,
    backgroundImage: 'url("/geo-bee.png")', 
    backgroundSize: 'cover',
    pointerEvents: 'none',
  };

  return (
    <>
      <div style={beeStyle}></div>
      {pollenCloud.map(pollenCloud => (
        <Pollen
          key={pollenCloud.id}
          x={pollenCloud.x}
          y={pollenCloud.y}
        />
      ))}
    </>
  );
};

export default Bumblebee;
