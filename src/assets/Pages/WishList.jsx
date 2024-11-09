import React, { useEffect, useState } from 'react';
import WishDatas from './WishDatas';
import { getStoreWishList } from '../../components/Utis';

const WishList = () => {

    const [wish, setWish] = useState()
    useEffect(()=>{
        const wishData = getStoreWishList()
        setWish(wishData)
    },[])
    console.log(wish)

    return (
        <div>
        {/* <div className='flex justify-between pt-8 pb-8'>
        <div>
        <span className='font-bold'>Cart</span>
        
        </div>
        <div className='flex gap-8'>
        <span className='mr-20 mt-4' >total</span>
            <button className='btn'>sort by price</button>
        <button className='btn'>Purshase</button> */}
        {/* </div>
        </div> */}
        <div> 
            <h1 className='font-bold text-2xl'>Wish List</h1> 
        {
            wish && wish.map((data)=> <WishDatas data={data}></WishDatas> )
        }
       
       </div>

    </div>
    );
};

export default WishList;