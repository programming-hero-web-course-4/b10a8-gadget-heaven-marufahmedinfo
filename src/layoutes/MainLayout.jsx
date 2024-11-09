import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
    return (

        <div className='md:max-w-7xl pb-12 container mx-auto'>
            {/* navbar */}
            <Navbar></Navbar>


            {/* dynamic layout */}
      <div className='min-h-[calc(100vh-300px)]'>
      <Outlet></Outlet>
      </div>





            {/* footer */}
            <Footer></Footer>

            </div>
    );
};

export default MainLayout;