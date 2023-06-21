import React, { useEffect, useState } from 'react';
import { format } from 'date-fns';
import Service from './Service';
import AppointmentModal from './AppointmentModal';

const AvailableAppointment = ({ date }) => {
    const [services, setServices] = useState([]);
    const [ treatment, setTreatment] = useState(null);
    useEffect(() => {
        fetch('http://localhost:5001/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <section className='px-5'>
            <div className='container mx-auto pb-[90px]'>
                <h2 className=' lg:text-4xl text-3xl text-secondary text-center'>Available slots for Teeth Orthodontics.{format(date, 'PP')} </h2>
            </div>
            <div className=' container mx-auto grid grid-cols lg:grid-cols-3 gap-10 text-center '>
                {
                    services.map(service => <Service
                    key={service._id}
                    service={service}
                    setTreatment={setTreatment}
                    ></Service>)
                }
                {treatment && <AppointmentModal
                treatment = {treatment}
                ></AppointmentModal>}
            </div>
        </section>
    );
};

export default AvailableAppointment;