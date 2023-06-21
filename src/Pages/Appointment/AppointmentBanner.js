import React from 'react';
import chair from '../../assets/images/chair.png'
import './Appointment.css'
import { DayPicker } from 'react-day-picker';

const AppointmentBanner = ({ date, setDate }) => {
    return (
        <section>
            <div className=' container mx-auto flex items-center flex-col-reverse lg:flex-row md:flex-row '>
                <div className=' flex-1 shadow-lg p-5 rounded-md lg:shadow-none'>
                    <DayPicker
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                    />
                </div>
                <div className=' flex-1'>
                    <img src={chair} alt="" />
                </div>
            </div>
        </section>
    );
};

export default AppointmentBanner;