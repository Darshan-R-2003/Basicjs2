import React from 'react';


const Card = ({ title, age, image, profession }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg transition-transform transform hover:scale-105">
      <img className="w-full" src={image} alt="Card" />
      <div className="px-6 py-4 ">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-white-700 text-base">Age: {age}</p>
        <p className="text-white-700 text-base">{profession}</p>
      </div>
    </div>
  );
};

export default Card;
