import React from 'react';

const InfoCard = ({ img, cardTitle,bgClass, cardBody }) => {
    return (
        <div>
            <div className={`card lg:card-side bg-base-100 shadow-xl text-white ${bgClass}`}>
                <figure className='pl-5 pt-5'>
                    <img src={img} alt="Album" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{cardTitle}</h2>
                    <p>{cardBody}</p>
                </div>
            </div>
        </div>
    );
};

export default InfoCard;