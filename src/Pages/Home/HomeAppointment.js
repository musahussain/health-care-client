import React from 'react';
import doctor from '../../assets/images/doctor.png';
import PrimaryButton from '../../SharedComponent/PrimaryButton';
import background from '../../assets/images/appointment.png';
import { Link } from 'react-router-dom';

const HomeAppointment = () => {
    return (
        <section style={{
            background: `url(${background})`
        }} className='flex justify-center items-center mt-28'> 
            <div className='flex-1 hidden lg:block'>
                <img className='mt-[-100px]' src={doctor} alt="" />
            </div>
            <div className='p-28 flex-1'>
                <h3 className='text-xl text-accent'>Appointment</h3>
                <h2 className='text-3xl text-white'>Make an Appointment today</h2>
                <p className='text-white mt-3 mb-3 text-justify lg:text-center'>If you have problems in your teeth, then don't wait more. Book a appointment now. Take advice from physician to keep your teeth healthy.</p>
                <Link className="btn btn-primary text-white" to="/appointment">Book Now</Link>
            </div>
        </section>
    );
};

export default HomeAppointment;