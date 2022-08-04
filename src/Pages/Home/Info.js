import React from 'react';
import InfoCard from './InfoCard';
import clock from '../../assets/icons/clock.svg';
import marker from '../../assets/icons/marker.svg'
import phone from '../../assets/icons/phone.svg';

const Info = () => {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-10'>
            <InfoCard cardDesc="Kindly call us to book your appointment" cardTitle="Opening Hours" bgColor="primary" cardImg={clock}></InfoCard>
            <InfoCard cardDesc="We have branches in every city" cardTitle="Our Locations" bgColor="accent" cardImg={marker}></InfoCard>
            <InfoCard cardDesc="Need more detail, contact" cardTitle="Our Contacts" bgColor="secondary" cardImg={phone}></InfoCard>
        </div>
    );
};

export default Info;