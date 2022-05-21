import React from 'react';
import PrimaryButton from '../Shared/PrimaryButton';

const Appoinmentservice = ({ appoinmentService, setTreatment }) => {
    const { name, slots } = appoinmentService;

    return (
        <div className="card w-96 bg-base-100 shadow-xl mt-2">
            <div className="card-body">
                <h2 className="card-title justify-center">{name}</h2>
                <p className='text-center'>{
                    slots.length > 0
                        ? <span>{slots[0]}</span>
                        :
                        <span>Try Next Day</span>
                }</p>
                <p className='text-center'>{slots.length} {slots.length > 1 ? 'spaces' : 'space'} available</p>
                <div className="card-actions justify-center">
                    <label
                        for="booking-modal"
                        onClick={() => setTreatment(appoinmentService)}
                        className='btn btn-secondary' disabled={slots.length === 0}>Book Appointment
                    </label>
                </div>
            </div>
        </div>
    );
};

export default Appoinmentservice;