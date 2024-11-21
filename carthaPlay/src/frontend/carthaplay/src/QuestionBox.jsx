import React from 'react';
import fireball from './assets/fireball.png'
const QuestionBox = ({ question, answers, y }) => {
  return (
    <div className="py-8">
      <p className="text-xl font-bold text-center text-white mb-2 bg-purple-500 p-4 rounded-lg max-w-max mx-auto">
        {question}
      </p>

      {answers.map((answer, index) => (
        <div
          key={index}
          className=" text-lg question-box absolute text-center text-white py-4 font-semibold"
          style={{
            top: `${y}px`,
            left: `calc(${answer.x}% - 2rem)`,
            transition: 'top 0.5s linear',
            width: '80px',
            height: '80px',
            backgroundImage: `url(${fireball})`,
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            textAlign: 'center',
            lineHeight: '80px',
            color: 'white',
            fontWeight: 'bold',
          }}
        >
          {answer.text}
        </div>
      ))}
    </div>
  );
};

export default QuestionBox;


