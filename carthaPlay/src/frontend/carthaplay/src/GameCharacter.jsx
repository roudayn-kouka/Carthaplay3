import React, { useState, useEffect } from 'react';
import IdleImage from './assets/idle.png';
import JumpImage from './assets/jump.png';
import GotHitImage from './assets/got-hit.png';
import Frame1 from './assets/frame-1.png';
import Frame2 from './assets/frame-2.png';
import Frame3 from './assets/frame-3.png';
import Frame4 from './assets/frame-4.png';
import Frame5 from './assets/frame-5.png';
import Frame6 from './assets/frame-6.png';

const GameCharacter = ({ position, characterState, direction }) => {
  const [frameIndex, setFrameIndex] = useState(0);
  const runningFrames = [Frame1, Frame2, Frame3, Frame4, Frame5, Frame6];
  const sprites = {
    idle: IdleImage,
    running: runningFrames[frameIndex],
    jump: JumpImage,
    'got-hit': GotHitImage,
  };

  useEffect(() => {
    if (characterState === 'running') {
      const interval = setInterval(() => {
        setFrameIndex((prevIndex) => (prevIndex + 1) % runningFrames.length); 
      }, 100); 
      return () => clearInterval(interval);
    } else {
      setFrameIndex(0); 
    }
  }, [characterState, runningFrames.length]);

  return (
    <div
      className="absolute"
      style={{
        left: `${position.x}%`,
        bottom: '10%',
        transform: `translateX(-50%) ${direction == 'left' ? 'scaleX(-1)' : ''}`,
      }}
    >
      <img src={sprites[characterState]} alt="Game Character" className="w-16 h-16 z-1000" />
    </div>
  );
};

export default GameCharacter;
