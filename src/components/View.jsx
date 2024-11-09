import React from 'react';
import { Link, Outlet, useLoaderData, useParams } from 'react-router-dom';
import { addToStore, addToWishlist} from './Utis';



const View = () => {
  // const notify = () => toast("Wow so easy!");

    const {product_id} = useParams()
  const data = useLoaderData()
  const prod = data.find(f=> f.product_id === product_id)
 const {product_title,product_image,category,price,
    description,Specification,availability,rating} = prod || {};

    const handleFavourite = (prod)=>{
     
      addToWishlist(prod)
    }
    const handleAddtoCart = (prod) => {
      addToStore(prod)
    }


    return (
        <div>
          <div className='bg-purple-500 lg:pb-24 text-center'>
          <h1 className='text-2xl md:text-3xl lg:text-4xl font-bold mb-4'>Products Details</h1>
          <p className='w-[50%] mx-auto'>Explore the latest gadgets that will take your experience to the next level.
             From smart devices to the coolest accessories, we have it all!</p>
          </div>
          <div className="hero bg-base-200 w-[60%] mx-auto mt-[-90px] rounded-2xl ">
  <div className="hero-content flex-col lg:flex-row-reverse">
   
    <div >
      <h1 className="text-3xl font-bold mb-2">{product_title}</h1>
      <h4 className='text-lg font-bold'>Price: ${price}</h4>
      <button className='border border-emerald-300 rounded-3xl  px-7 py-2 bg-emerald-50'>{availability? 'In Stock':'not available'}</button>
      <h3 className='w-24 '><span className='font-bold'>Specification</span>: {Specification}</h3>
      <p className="py-6 font-bold">
      Rating : 
      
      </p>
      <div className="rating mr-3">
  <input type="radio" name="rating-1" className="mask mask-star" />
  <input type="radio" name="rating-1" className="mask mask-star"  />
  <input type="radio" name="rating-1" className="mask mask-star" />
  <input type="radio" name="rating-1" className="mask mask-star" defaultChecked />
  <input type="radio" name="rating-1" className="mask mask-star " />
</div><button className='btn bg-slate-400 rounded-full'>{rating}</button>
<br />
      {/* <Link to={`/Cards/${ product_id}`}><button  className="btn border-2  ">View Details</button></Link>  */}
      <button onClick={()=>handleAddtoCart(prod)}  className=" btn bg-[#9538E2] text-white text-lg">add to cart 
        <img className='h-5 w-5' src="https://i.ibb.co.com/8c41Byb/icons8-shop-50.png" alt="" /></button>
        <button className="mt-4 btn rounded-full ml-4 bg-slate-200">
         <img className='h-5 w-5 'onClick={()=>handleFavourite(prod)}
          src="https://i.ibb.co.com/bstKcHJ/icons8-love-30.png" alt="" /></button>
          
    </div>
    <img
      src={product_image}
      className="max-w-sm rounded-lg shadow-2xl h-[350px] w-[350px]" />
  </div>
</div>
<div className='md:h-[200px]'>

</div>

        </div>
    );
};

export default View;