import React from 'react';
import { Outlet, useNavigation } from 'react-router';
import Header from '../components/Header';
import LatestNews from '../components/LatestNews';
import Navbar from '../components/Navbar';
import LeftAside from '../components/homelayout/LeftAside';
import RightAside from '../components/homelayout/RightAside';
import Loading from '../page/Loading';

const HomeLayout = () => {
    const {state} = useNavigation();
    return (
        <div>
            <header>
                <Header/>
                <section  className='max-w-11/12 w-full mx-auto my-3'>
                    <LatestNews></LatestNews>
                </section>
                <nav className='max-w-11/12 w-full mx-auto my-3'>
                    <Navbar></Navbar>
                </nav>
            </header>
            <main className='w-11/12 mx-auto my-5 grid grid-cols-12 gap-5'>
                <aside className='col-span-12 md:col-span-3 order-1 md:order-1  md:top-5 md:h-fit md:sticky'>
                    <LeftAside></LeftAside>
                </aside>
                <section className="main col-span-12 md:col-span-6 order-2 md:order-2">
                   {state == "loading" ? <Loading></Loading> :  <Outlet></Outlet>}
                </section>
               <aside className='order-3 md:order-3 col-span-12 md:col-span-3 md:top-5 md:h-fit md:sticky'>
                <RightAside></RightAside>
               </aside>
            </main>
        </div>
    );
};

export default HomeLayout;