import React from 'react';
import PrimaryButton from '../../SharedComponent/PrimaryButton';
import baby from '../../assets/images/treatment.png';

const BabySection = () => {
    return (
        <div className="hero">
  <div className="hero-content flex-col lg:flex-row">
    <img src={baby} className="max-w-sm rounded-lg shadow-2xl" alt='' />
    <div>
      <h1 className="text-5xl font-bold">Exceptional Dental Care, on Your Terms</h1>
      <p className="py-6">Birth to 12 months: Keep your baby's mouth clean by gently wiping the gums with a clean baby washcloth. Once you see the first teeth, gently brush using a soft baby toothbrush and a smear (grain of rice) of fluoride toothpaste. 12 to 36 months: Brush your child's teeth 2 times per day for 2 minutes</p>
      <PrimaryButton>Get Started</PrimaryButton>
    </div>
  </div>
</div>
    );
};

export default BabySection;