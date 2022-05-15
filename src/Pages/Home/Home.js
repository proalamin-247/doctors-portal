import React from 'react';
import Banner from './Banner';
import Info from './Info';
import Services from './Services';
import MiddleBanner from './MiddleBanner';

const Home = () => {
    return (
        <div className='px-12'>
            <Banner></Banner>
            <Info></Info>
            <Services></Services>
            <MiddleBanner></MiddleBanner>
        </div>
    );
};

export default Home;