import React from 'react';
import treatment from '../../../assets/images/treatment.png'
const ServiceInfo = () => {
    return (
        <div>
            <div className=' flex flex-col lg:flex-row items-center space-y-5'>
                <figure className=' flex-1 lg:w-screen md:w-screen lg:h-[570px]'>
                    <img className=' m-auto w-screen-full h-full rounded-xl' src={treatment} alt="" />
                </figure>
                <div className=' flex-1'>
                    <h2 className='text-accent font-bold text-3xl lg:text-6xl lg:leading-[72px]'>Exceptional Dental Care, on Your Terms</h2>
                    <p className=' mt-4 mb-7'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                    <button className="btn btn-active bg-gradient-to-r from-primary to-secondary text-white border-none">GET STARTED</button>
                </div>
            </div>
        </div>
    );
};

export default ServiceInfo;