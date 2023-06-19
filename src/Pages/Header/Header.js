import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../assets/images/logo.png'
import './Header.css'

const Header = ({ children }) => {
    const menuFull = <>
        <NavLink to='/home'>Home</NavLink>
        <NavLink to='/about'>About</NavLink>
        <NavLink to='/appointment'>Appointment</NavLink>
        <NavLink to='/reviews'>Reviews</NavLink>
        <NavLink to='/contact'>Contact Us</NavLink>
        <NavLink to='/login'>Login</NavLink>
    </>
    return (
        <div className='container mx-auto'>
            <div className="drawer-end \">
                <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col">
                    {/* Navbar */}
                    <div className="w-full navbar ">
                        <div className="flex-1">
                            <Link as={Link} to='/' className=' w-[200px]'> <img src={logo} alt="" /></Link>
                        </div>
                        <div className="flex-none lg:hidden">
                            <label htmlFor="my-drawer-3" className="btn btn-square btn-ghost">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                            </label>
                        </div>
                        <div className=" flex-none hidden lg:block">
                            <ul className="doctor-nav menu menu-horizontal space-x-[30px] text-accent items-center ">
                                {menuFull}
                            </ul>
                        </div>
                    </div>
                    {children}
                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-3" className="drawer-overlay"></label>
                    <ul className="doctor-nav menu p-4 w-80 h-full bg-white space-y-5">
                        {menuFull}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Header;