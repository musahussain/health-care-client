import React from 'react';
import notFound from '../assets/images/not-found.png';

const NotFound = () => {
    return (
        <div className='h-screen flex justify-center items-center'>
            <img className='lg:max-w-lg' src={notFound} alt="page not found" />
        </div>
    );
};

export default NotFound;