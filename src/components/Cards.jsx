import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Cards = ({cd}) => {
  const navigate = useNavigate()
    const       {
        product_id,product_title,product_image,category,price,
        description,Specification,availability,rating}= cd || {}
    return (
        <div className="card bg-base-100 shadow-xl">
  <figure className="px-10 pt-10">
    <img 
      src={product_image}
      alt="Shoes"
      className="rounded-xl h-[200px] w-[400px]" />
  </figure>
  <div className="card-body text-start">
    <h1 className="card-title font-bold">{product_title}</h1>
    <h4>$ {price}K</h4>
    <div className="card-actions">
     <Link to={`/Cards/${ product_id}`}><button  className="border-2 border-purple-600 py-3 px-5 rounded-full product_id={product_id} ">View Details</button></Link> 
    </div>
  </div>
</div>
    );
};

export default Cards;