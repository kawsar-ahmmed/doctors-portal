import React from 'react';
import '../Home.css'

const HomeForm = () => {
    return (
        <section className='home-form'>
            <div className=' py-12'>
                <div className=' text-center pb-[40px]'>
                    <h3 className=' text-xl text-primary'>Contact Us</h3>
                    <h2 className='text-white text-4xl font-light'>Stay connected with us</h2>
                </div>
                <div className=' container mx-auto text-center'>
                    <form className=' flex flex-col items-center space-y-6'>
                        <input type="email" placeholder="Type here" className=" bg-neutral border-none input input-bordered input-md w-full max-w-md" />
                        <input type="text" placeholder="Type here" className="bg-neutral border-none input input-bordered input-md w-full max-w-md" />
                        <textarea className="bg-neutral border-none w-full max-w-md textarea textarea-bordered" placeholder="Bio"></textarea>
                        <button className="btn btn-active bg-gradient-to-r from-primary to-secondary text-white border-none">GET STARTED</button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default HomeForm;