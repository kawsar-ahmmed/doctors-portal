import React from 'react';
import './Appointment.css';

const Service = ({ service, setTreatment, date }) => {
    const { name, slots } = service;
    console.log(date)


    return (
        <div >
            <div className=' p-[40px] shadow-md  border-2 rounded-md border-secondary h-full space-y-2 '>
                <h2 className=' text-2xl text-secondary'>{name}</h2>
                <h3 className=' text-accent'>{slots.length} {slots.length > 0 ?
                    <span>
                        Slots Available
                        <p>{slots[0]}</p>
                    </span>
                    :
                    <span className=' text-red-500'> Slot Available</span>
                }  </h3>
                <button onClick={() => setTreatment(service)} disabled={slots.length === 0}>

                </button>

                <div className="card-actions justify-center">
                    <label 
                        
                        onClick={() => {
                            setTreatment(service);
                        }}
                        disabled={slots.length === 0}
                        className='btn btn-primary text-neutral' htmlFor="my_modal_6" >Book Appointment</label>
                </div>

            </div>
        </div>
    );
};

export default Service;