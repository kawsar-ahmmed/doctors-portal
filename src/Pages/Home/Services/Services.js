import React from 'react';
import cavity from '../../../assets/images/cavity.png'
import fluoride from '../../../assets/images/fluoride.png'
import whitening from '../../../assets/images/whitening.png'
import Service from './Service';
import ServiceInfo from './ServiceInfo';
import Appointment from './AppointmentSection';
import AppointmentSection from './AppointmentSection';

const Services = () => {
    const services = [
        {
            _id: '1',
            title: 'Fluoride Treatment',
            description: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
            serviceIcon: cavity

        },
        {
            _id: '2',
            title: 'Cavity FillingCavity Filling',
            description: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
            serviceIcon: fluoride

        },
        {
            _id: '3',
            title: 'Teeth Whitening',
            description: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
            serviceIcon: whitening

        },
    ]
    return (
        <section>
            <div className='container mx-auto lg:py-[100px]'>
                <div className=' text-center pb-[70px]'>
                    <h3 className=' text-primary text-xl'>OUR SERVICES</h3>
                    <h2 className=' text-accent text-3xl'>Services We Provide</h2>
                </div>
                <div className='grid grid-cols lg:grid-cols-3 md:grid-cols-2 gap-10 px-5'>
                    {
                        services.map(service => <Service
                            key={service._id}
                            service={service}
                        ></Service>)
                    }
                </div>
                <div className=' lg:py-[120px] py-[80px] px-5'>
                    <ServiceInfo></ServiceInfo>
                </div>
            </div>
            <div className=''>
                    <AppointmentSection></AppointmentSection>
            </div>
        </section>
    );
};

export default Services;