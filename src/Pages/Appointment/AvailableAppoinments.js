import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import Appoinmentservice from './Appoinmentservice';
import BookingModal from './BookingModal';

const AvailableAppoinments = ({ date }) => {
    const [services, setServices] = useState([]);
    const [treatment, setTreatment] = useState(null);

    useEffect(() => {
        // fetch('service.json')
        fetch('http://localhost:5000/service')
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])

    return (
        <div>
            <h4 className='text-secondary text-center text-xl'>Available Appointments on {format(date, 'PP')};</h4>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-5'>
                {
                    services.map(appoinmentService => <Appoinmentservice
                        key={appoinmentService._id}
                        appoinmentService={appoinmentService}
                        setTreatment={setTreatment}
                    ></Appoinmentservice>)
                }
            </div>
            {treatment && <BookingModal
                date={date}
                treatment={treatment}
                setTreatment={setTreatment}>
            </BookingModal>}
        </div>
    );
};

export default AvailableAppoinments;