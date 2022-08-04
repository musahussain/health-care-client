import React from 'react';
import BabySection from './BabySection';
import Banner from './Banner';
import HomeAppointment from './HomeAppointment';
import Info from './Info';
import Services from './Services';
import Testmonials from './Testmonials';

const Home = () => {
    return (
        <div className='px-10'> 
            <Banner></Banner>
            <Info></Info>
            <Services></Services>
            <BabySection></BabySection>
            <HomeAppointment></HomeAppointment>
            <Testmonials></Testmonials>
        </div>
    );
};

export default Home;