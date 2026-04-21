import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../components/Navbar';

const AuthLayout = () => {
    return (
        <div className='bg-base-200 min-h-screen'>
            <header>
                <nav className='max-w-11/12 w-full mx-auto py-4'>
                    <Navbar></Navbar>
                </nav>
            </header>
            <main className='w-11/12 mx-auto py-4'>
                <Outlet></Outlet>
            </main>
        </div>
    );
};

export default AuthLayout;