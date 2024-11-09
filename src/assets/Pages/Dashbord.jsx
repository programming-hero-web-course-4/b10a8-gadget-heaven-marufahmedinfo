import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import CartList from './CartList';
import WishList from './WishList';

const Dashbord = () => {
    const [activeCart, setactiveCart] = useState('cartlist');

    return (
        <div>
            <div className='bg-purple-500 py-10 text-center'>
                <h1 className='text-xl md:text-2xl lg:text-4xl text-white'>DashBoard</h1>
                <p className='w-[60%] mx-auto text-white pt-5'>Explore the latest gadgets that will take your experience to the next level
                    .From smart devices to the coolest accessories, we have it all!</p>
                <button onClick={()=> setactiveCart('cartlist')} className='btn mt-4 text-2xl mr-4 border-2 border-white rounded-2xl bg-purple-500'>Cart</button>
                <button onClick={()=> setactiveCart('wishlist')} className='btn mt-4 text-2xl border-2 border-white rounded-2xl bg-purple-500'>Wishlist</button>
            </div>
            {
                activeCart === 'cartlist' && <CartList /> 
         }
         {
            activeCart === "wishlist" && < WishList />
         }
        </div>
    );
};

export default Dashbord;