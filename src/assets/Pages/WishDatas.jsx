import React from 'react';
import { TiDeleteOutline } from "react-icons/ti";
const WishDatas = ({data}) => {
    // console.log(wish)
    const {product_title,Specification,price,product_image} = data;
    return (
        <div className='flex justify-between w-full'>
        <div className='flex items-center gap-8 '>
        <div> <img className='w-[150px] h-[150px] rounded-lg' src={product_image} alt="" /></div>
        <div className='space-y-4'>
            <h2 className='font-bold'>{product_title}</h2>
          <h2 className='my-4'>{Specification}</h2>
          <h3>price: ${price}</h3>
          <button className='bg-[#9538E2] text-white px-4 py-3 text-xl rounded-full'>add to cart</button>
          </div>
        </div>
          <div>
              <button className=''><TiDeleteOutline color='red' size={50}/></button>
              </div>
      </div>
    );
};

export default WishDatas;