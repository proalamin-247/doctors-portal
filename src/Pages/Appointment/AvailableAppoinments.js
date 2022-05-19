import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import Service from '../Home/Service';
import Appoinmentservice from './Appoinmentservice';

const AvailableAppoinments = ({date}) => {
    const [services, setServices] = useState([]);
    useEffect(()=>{
        fetch('service.json')
        .then(res=> res.json())
        .then(data=> setServices(data));
    }, [])

    return (
        <div>
            <h4 className='text-secondary text-center text-xl'>Available Appointments on {format(date, 'PP')};</h4>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-5'>
                {
                    services.map(appoinmentService=><Appoinmentservice
                        key={appoinmentService._id}
                        appoinmentService={appoinmentService}
                    ></Appoinmentservice>)
                }
            </div>
        </div>
    );
};

export default AvailableAppoinments;