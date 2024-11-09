import React from 'react';
import { TiDeleteOutline } from "react-icons/ti";
const CartDatas = ({data}) => {
    const {product_title,Specification,price,product_image} = data;
    return (
        <div className='flex justify-between w-full'>
          <div className='flex items-center gap-8 '>
          <div> <img className='w-[150px] h-[150px] rounded-lg' src={product_image} alt="" /></div>
          <div className=''>
              <h2 className='font-bold text-3xl'>{product_title}</h2>
            <h2 className='my-4'>{Specification}</h2>
            <h3 className='text-xl font-bold'>price: ${price}</h3>
            
            </div>
          </div>
            <div>
                <button className=''> <TiDeleteOutline color='red' size={50}/></button>
                </div>
        </div>
    );
};

export default CartDatas;