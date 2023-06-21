import React from 'react';
import '../Home.css'
import doctor from '../../../assets/images/doctor.png'

const AppointmentSection = () => {
    return (
        <section className='appointment-bg'>
            <div className='container mx-auto grid grid-cols lg:grid-cols-2 items-center gap-10 my-8 px-5'>
                <div className=' mt-[-200px] hidden lg:block '>
                    <img src={doctor} alt="" />
                </div>
                <div className=' py-7'>
                    <h3 className='text-secondary text-xl'>Appointment</h3>
                    <h2 className='text-4xl text-white pb-3'>Make an appointment Today</h2>
                    <p className=' pb-6'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                    <button className="btn btn-active bg-gradient-to-r from-primary to-secondary text-white border-none">GET STARTED</button>
                </div>
            </div>
        </section>
    );
};

export default AppointmentSection;