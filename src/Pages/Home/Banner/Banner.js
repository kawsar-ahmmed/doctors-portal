import React from 'react';
import bannerImg from '../../../assets/images/chair.png'

const Banner = () => {
    return (
        <section className='container mx-auto px-5'>
            <div className=' flex flex-col lg:flex-row-reverse items-center gap-10 lg:min-h-screen justify-center h-[650px]	sm:min-h-screen md:min-h-screen'>
                <div className="banner-img">
                    <img src={bannerImg} alt="" />
                </div>
                <div className="banner-info">
                    <h1 className=' text-accent text-[46px] leading-[52px] font-bold pb-4'>Your New Smile Starts Here</h1>
                    <p className=' lg:w-5/6 pb-5'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the</p>
                    <button className="btn btn-active bg-gradient-to-r from-primary to-secondary text-white border-none">Primary</button>

                </div>
            </div>
        </section>
    );
};

export default Banner;