import React from 'react';

const Service = ({service}) => {
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title">{service.title}</h2>
                    <p>{service.description}</p>
                    <div className="card-actions justify-end">
                    <img src={service.img} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Service;