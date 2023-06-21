import React from 'react';

const Review = ({ review }) => {
    return (
        <div className=' p-8 shadow-lg space-y-6 rounded-md text-accent my-10'>
            <p>{review.description}</p>
            <div className=' flex items-center gap-5'>
                <div className="avatar">
                    <div className="w-24 rounded-full border-4 border-primary stock-primary ring-primary ring-offset-2">
                        <img className='' src={review.profile} alt='' />
                    </div>
                </div>
                <div className="">
                    <h3 className=' font-bold text-2xl'>{review.name}</h3>
                    <h4>{review.location}</h4>
                </div>
            </div>
        </div>
    );
};

export default Review;