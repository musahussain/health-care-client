import React from "react";
import { Link } from "react-router-dom";
import chair from '../../assets/images/chair.png';
import PrimaryButton from "../../SharedComponent/PrimaryButton";

const Banner = () => {
  return (
    <div className="hero min-h-screen">
      <div className="hero-content flex-col lg:flex-row">
        <img
          src={chair}
          className="max-w-sm rounded-lg shadow-2xl"
        alt="" />
        <div>
          <h1 className="text-5xl font-bold">No Compromise For Health</h1>
          <p className="py-6">
            Your health is the most important thing in your life. Your Health matters the most. Hence the proverb "Health is Wealth" 
          </p>
          <Link className="btn btn-primary text-white" to="/appointment">Get Started</Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
