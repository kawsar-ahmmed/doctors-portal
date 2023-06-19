import React from 'react';
import clock from '../../../assets/icons/clock.svg'
import marker from '../../../assets/icons/marker.svg'
import phone from '../../../assets/icons/phone.svg'
import InfoCard from './InfoCard';
const Info = () => {

    return (
        <div className=' -z-10 container mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-col-3 gap-10 justify-center px-5'>
            <InfoCard
                bgClass="bg-gradient-to-r from-[#19D3AE] to-[#0FCFEC]"
                title='Opening Hours'
                description='Lorem Ipsum is simply dummy text of the pri'
                img={clock}
            ></InfoCard>
            <InfoCard
                bgClass="bg-[#3A4256] text-white"
                title='Visit our location'
                description='Brooklyn, NY 10036, United States'
                img={marker}
            ></InfoCard>
            <InfoCard
                bgClass="bg-gradient-to-r from-[#19D3AE] to-[#0FCFEC]"
                title='Contact us now'
                description='+000 123 456789'
                img={phone}
            ></InfoCard>
        </div>
    );
};

export default Info;