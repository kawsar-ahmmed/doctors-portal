import React from 'react';
import quote from '../../../assets/icons/quote.svg'
import Review from './Review';
import img1 from '../../../assets/images/people1.png'
import img2 from '../../../assets/images/people2.png'
import img3 from '../../../assets/images/people3.png'

const Testimonial = () => {
    const reviews = [
        {
            _id: 1,
            name:'Winson Herry',
            location: 'California',
            description:'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            profile: img1
        },
        {
            _id: 3,
            name:'Winson Herry',
            location: 'California',
            description:'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            profile: img2
        },
        {
            _id: 2,
            name:'Winson Herry',
            location: 'California',
            description:'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            profile: img3
        }
    ]
    return (
        <section className=' lg:py-[80px] py-8'>
            <div className='container mx-auto flex justify-between items-center px-5'>
                <div className="review-info">
                    <h3 className='text-primary text-xl'>Testimonial</h3>
                    <h2 className=' text-accent lg:text-4xl text-2xl'>What Our Patients Says</h2>
                </div>
                <div>
                    <img className='lg:w-[193px] w-[130px]' src={quote} alt="" />
                </div>
            </div>
            <div className='container mx-auto grid gird-cols lg:grid-cols-3 md:grid-cols-2 gap-10 px-5 my-[40px]'>
                {
                    reviews.map(review => <Review
                    key={review._id}
                    review = {review}
                    ></Review>)
                }
            </div>
        </section>
    );
};

export default Testimonial;