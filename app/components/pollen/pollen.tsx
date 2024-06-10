import React, { useEffect } from 'react';
import "./pollen.css";

export type PollenProps = {
    x: number,
    y: number,
    onComplete: () => void,
}

const Pollen = ({ x, y, onComplete }: PollenProps) => {
    useEffect(() => {
        const timeout = setTimeout(onComplete, 1000); // Duration of the pollen animation in milliseconds
        return () => clearTimeout(timeout);
    }, [onComplete]);

    const pollenStyle: React.CSSProperties = {
        position: 'absolute',
        top: y,
        left: x,
        width: '27px', 
        height: '27px',
        backgroundColor: '#ffdc62d9',
        borderRadius: '50%',
        boxShadow: '10px 10px 10px 10px #ffdc62d9',
        opacity: 0.8,
        animation: 'poof 1s ease-out forwards',
        pointerEvents: 'none',
    };

    return <div style={pollenStyle}></div>;
};

export default Pollen;
