import React from 'react';

export const Background = () => {
  return (
    <div className="absolute inset-0 overflow-hidden -z-10">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-white to-purple-50">
        {/* Mathematical Symbols Layer */}
        <div className="absolute inset-0 opacity-[0.03]">
          {[...Array(50)].map((_, i) => (
            <span
              key={i}
              className="absolute text-indigo-900 text-opacity-50 select-none"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                transform: `rotate(${Math.random() * 360}deg)`,
                fontSize: `${Math.random() * 20 + 10}px`
              }}
            >
              {['+', '−', '×', '÷', '=', 'π', '∑', '∫', 'α', 'β', 'Δ', '√'][Math.floor(Math.random() * 12)]}
            </span>
          ))}
        </div>
        
        {/* Alphabet Layer */}
        <div className="absolute inset-0 opacity-[0.02]">
          {[...Array(50)].map((_, i) => (
            <span
              key={i}
              className="absolute text-purple-900 text-opacity-50 font-serif select-none"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                transform: `rotate(${Math.random() * 360}deg)`,
                fontSize: `${Math.random() * 20 + 10}px`
              }}
            >
              {String.fromCharCode(65 + Math.floor(Math.random() * 26))}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};