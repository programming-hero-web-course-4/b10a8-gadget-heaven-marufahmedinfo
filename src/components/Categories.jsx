import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

const Categories = ({ categories }) => {
    const navigate = useNavigate()
    return (
        <div >

            <button className='btn bg-[#9538E2] text-white w-40 rounded-3xl mb-4' onClick={() => navigate('/')}>All Product</button>
            <div className='flex flex-col space-y-4'>
                {
                    categories.map(category => <NavLink key={category.category}
                        to={`/products/${category.category}`} className={({ isActive }) => `bg-[#9538E2] w-40 rounded-3xl text-white py-3 px-5 ${isActive ? 'bg-gray-500' : ''}`}><button >{category.slug}</button></NavLink>)
                }
            </div>

        </div>
    );
};

export default Categories;