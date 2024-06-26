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

  useEffect(() => {
    let animationFrameId: number;

    const animate = () => {
      setTrailPosition((prevPosition) => {
        const newX = prevPosition.x + (lastMousePosition.current.x - prevPosition.x) * 1.5;
        const newY = prevPosition.y + (lastMousePosition.current.y - prevPosition.y) * 1.5;
        
        setPollenCloud((prevPollens) => [
          ...prevPollens,
          {
            id: Date.now(),
            x: newX + beeWidth / 2,
            y: newY + beeHeight,
          },
        ]);

        return { x: newX, y: newY };
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => cancelAnimationFrame(animationFrameId);
  }, []);

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
