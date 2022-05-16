import React from 'react';
import Banner from './Banner';
import Info from './Info';
import Services from './Services';
import MiddleBanner from './MiddleBanner';
import MakeAppointment from './MakeAppointment';
import Testimonial from './Testimonial';

const Home = () => {
    return (
        <div className=' lg:px-12'>
            <Banner></Banner>
            <Info></Info>
            <Services></Services>
            <MiddleBanner></MiddleBanner>
            <MakeAppointment></MakeAppointment>
            <Testimonial></Testimonial>
        </div>
    );
};

export default Home;