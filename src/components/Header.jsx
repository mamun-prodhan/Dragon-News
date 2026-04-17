import React from 'react';
import logo from '../assets/logo.png';
import { format } from 'date-fns';
import Marquee from "react-fast-marquee";

const Header = () => {
    return (
        <div className='flex flex-col gap-3 items-center'>
            <img className='max-w-[450px] w-full' src={logo} alt="Dragon news Logo" />
            <p className='text-accent'>Journalism Without Fear of Favour</p>
            {/* <p>Sunday, November 2, 2025</p> */}
            <p className='font-semibold text-accent'>{format(new Date(), "EEEE, MMMM MM, yyyy")}</p>
        </div>
    );
};

export default Header;