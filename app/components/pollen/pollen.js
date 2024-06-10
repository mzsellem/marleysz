import React, { useEffect } from 'react';
import "./pollen.css";

const Pollen = ({ x, y, onComplete }) => {
    useEffect(() => {
        const timeout = setTimeout(onComplete, 1000); // Duration of the pollen animation in milliseconds
        return () => clearTimeout(timeout);
    }, [onComplete]);

    const pollenStyle = {
        position: 'absolute',
        top: y,
        left: x,
        width: '27px', // Adjust size as needed
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
