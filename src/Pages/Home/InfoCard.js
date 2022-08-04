import React from 'react';

const InfoCard = ({cardImg, cardTitle, cardDesc}) => {
    return (
        <div className={`hero rounded-lg" bg-neutral rounded-xl`}>
  <div className="hero-content flex-col lg:flex-row">
    <img src={cardImg} className="max-w-sm rounded-lg shadow-2xl" alt='' />
    <div>
      <h1 className="text-xl font-bold text-white">{cardTitle}</h1>
      <p className="py-6 text-white">{cardDesc}</p>
    </div>
  </div>
</div>
    );
};

export default InfoCard;