import React, { useEffect } from 'react';
import "./pollen.css";

export type PollenProps = {
    x: number,
    y: number,
}

const Pollen = ({ x, y }: PollenProps) => {
  
    const pollenStyle: React.CSSProperties = {
        position: 'absolute',
        top: y,
        left: x,
        width: '20px', 
        height: '20px',
        backgroundColor: '#ffdc62d9',
        borderRadius: '50%',
        boxShadow: '8px 8px 8px 8px #ffdc62d9',
        opacity: 0.8,
        animation: 'poof 1s ease-out forwards',
        pointerEvents: 'none',
    };

    return <div style={pollenStyle}></div>;
};

export default Pollen;
