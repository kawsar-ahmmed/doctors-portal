import React from 'react';

const InfoCard = ({ title, description, img, bgClass }) => {
    return (
        <div>
            <div className="card lg:w-mx-lg bg-base-100 shadow-xl">
                <div className={`card-body ${bgClass} flex flex-row px-[40px] py-[52px] text-white space-x-3 rounded-lg items-center`}>
                    <figure>
                        <img src={img} alt="" />
                    </figure>
                    <div>
                        <h2 className="card-title">{title}</h2>
                        <p>{description}</p>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default InfoCard;