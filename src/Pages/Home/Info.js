import React from 'react';
import InfoCard from './InfoCard';
import clock from '../../assets/icons/clock.svg'
import marker from '../../assets/icons/marker.svg'
import phone from '../../assets/icons/phone.svg'

const Info = () => {

    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 px-12'>
            <InfoCard cardTitle="Opening Hours" bgClass="bg-gradient-to-r from-secondary to-primary" img={clock} cardBody="Lorem Ipsum is simply dummy text of the pri"></InfoCard>
            <InfoCard cardTitle="Visit our location" bgClass="bg-accent" img={marker} cardBody="Brooklyn, NY 10036, United States"></InfoCard>
            <InfoCard cardTitle="Contact us now" bgClass="bg-gradient-to-r from-secondary to-primary" img={phone} cardBody="+000 123 456789"></InfoCard>
        </div>
    );
};

export default Info;