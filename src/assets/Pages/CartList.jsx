import React, { useEffect, useState } from 'react';
import { addToStore, getStoredredList, getStoreWishList } from '../../components/Utis';
import CartDatas from './CartDatas';
import { Link } from 'react-router-dom';


const CartList = () => {
    const [cart, setCart] = useState();
    const [sort, setSort] = useState('')
    useEffect(() => {
        const cartData = getStoredredList()
        setCart(cartData)
    }, [])
    // sort By Price
    const handleSort = (sortType) => {
        setSort(sortType)
        const sortedlist = [...cart].sort((a, b) => b.price - a.price)
        setCart(sortedlist)
    }
    const [purchase, setPurchase] = useState('')

    const handlePurchase = (id) => {

        const total = cart.reduce((sum, item) => sum + item.price, 0);
        setPurchase(total);
        console.log(total);
    }







    return (
        <div>
            {/* <button className="btn" onClick={() => document.getElementById('my_modal_1').showModal()}>open modal</button> */}
            <dialog id="my_modal_1" className="modal">
                <div className="modal-box">
                    <img className=' mx-auto w-12' src="https://i.ibb.co.com/GVK9T3s/Group.png" alt="" />
                    <h3 className="font-bold text-center text-lg">Congratulation !!</h3>
                    <h3 className='text-center mt-4'>Payment successfull</h3>
                    <p className='text-center mt-4'>total: $ {purchase}</p>
                    
                    <div className="modal-action">
                        <form method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                          <Link to={'/'}> <button className="btn">Close</button></Link> 
                        </form>
                    </div>
                </div>
            </dialog>

            <div>
                <div className='flex justify-between pt-8 pb-8'>
                    <div>
                        <span className='font-bold text-2xl'>Cart</span>

                    </div>
                    <div className='flex gap-8'>
                        <span className='mr-20 mt-4' >total{purchase}</span>
                        <button onClick={() => handleSort('price')} className='btn'>sort by price</button>
                        <button onClick={
                            () => {
                            document.getElementById('my_modal_1').showModal();
                            handlePurchase('cart')
                            
                            }} className='btn'>Purshase</button>
                    </div>
                </div>

                {
                    cart && cart.map((data) => <CartDatas data={data}></CartDatas>)
                }
            </div>


        </div>
    );
};

export default CartList;