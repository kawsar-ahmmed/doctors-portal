import React from 'react';

const Service = ({ service }) => {
    return (
        <div>
            <div className="card lg:max-w-lg bg-base-100 shadow-xl p-[40px]">
                <figure className="px-10 pt-10">
                    <img src={service.serviceIcon} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title text-accent">{service.title}</h2>
                    <p>{service.description}</p>
                </div>
            </div>
        </div>
    );
};

export default Service;