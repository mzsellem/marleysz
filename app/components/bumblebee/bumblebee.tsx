import React, { useEffect, useState, useRef } from 'react';
import Pollen from '../pollen/pollen';

export type PollenCloud = {
  id: number,
  x: number,
  y: number,
}

const Bumblebee = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [trailPosition, setTrailPosition] = useState({ x: 0, y: 0 });
  const [pollenCloud, setPollenCloud] = useState<PollenCloud[]>([]);

  const beeWidth = 50;
  const beeHeight = 50;

  const offsetX = 20;
  const offsetY = 20;

  const shouldCreatePollen = useRef(false);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
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

  const removePollen = (id: number) => {
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
