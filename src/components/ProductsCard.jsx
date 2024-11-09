
import { useLoaderData, useParams } from 'react-router-dom';
import Cards from './Cards';
import { useEffect, useState } from 'react';

const ProductsCard = () => {
    const {category}= useParams()
    const data = useLoaderData()
    const[cat,setCat]= useState([])
    useEffect(()=>{
       if(category){
        const Bycatego = [...data].filter(p=> p.category===category
            
        )
        setCat(Bycatego)
       }else{
        setCat(data)
       }
    },[data,category])
    


    return (
        <div  className=' grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
           {
            cat.map((cd) => <Cards key={cd.product_id}  cd={cd}></Cards>)
           }
        </div>
    );
};

export default ProductsCard;