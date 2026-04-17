import React from 'react';
import { NavLink } from 'react-router';
import user from '../assets/user.png';

const Navbar = () => {
    return (
        <div className='flex items-center justify-between'>
            <div></div>
            <div className='nav flex items-center gap-3'>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/career">Career</NavLink>
            </div>
            <div className='login-btn flex items-center gap-5'>
                <img src={user} alt="User icon" />
                <button className='btn btn-primary px-10'>Login</button>
            </div>
        </div>
    );
};


export default Navbar;