import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import Appoinmentservice from './Appoinmentservice';
import BookingModal from './BookingModal';

const AvailableAppoinments = ({ date }) => {
    // const [services, setServices] = useState([]);
    const [treatment, setTreatment] = useState(null);

    const formattedDate = format(date, 'PP');
    const { data: services, isLoading, refetch } = useQuery(['available', formattedDate], () => fetch(`http://localhost:5001/available?date=${formattedDate}`)
            .then(res => res.json())
            )

            if(isLoading){
                return <Loading></Loading>
            }

    // useEffect(() => {
    //     fetch(`http://localhost:5001/available?date=${formattedDate}`)
    //         .then(res => res.json())
    //         .then(data => setServices(data));
    // }, [formattedDate]);

    return (
        <div>
            <h4 className='text-secondary text-center text-xl'>Available Appointments on {format(date, 'PP')};</h4>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-5'>
                {
                    services?.map(appoinmentService => <Appoinmentservice
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
                refetch={refetch}
            </BookingModal>}
        </div>
    );
};

export default AvailableAppoinments;