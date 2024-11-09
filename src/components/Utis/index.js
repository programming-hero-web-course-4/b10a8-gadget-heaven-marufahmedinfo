import { toast } from "react-toastify";


const getStoredredList = ()=>{

    const storedListStr = localStorage.getItem('read-list')

    if(storedListStr){
        const storedList = JSON.parse(storedListStr);
        return storedList;

    }else{
        return [];
    }
 
}

const addToStore =(prod)=>{

    const storedlist =getStoredredList();
    const isExist = storedlist.find(item=> item.product_id == prod.product_id);
if(isExist){
return 'item added'
}
storedlist.push(prod)
localStorage.setItem("read-list", JSON.stringify(storedlist));
toast('This Prduct is added to your Cart list.')


    
}

const getStoreWishList = ()=>{
const storeWish=localStorage.getItem('wish-list');
if(storeWish){
    const wishList =JSON.parse(storeWish)
    return wishList;

}else{
    return [];

}
}


const addToWishlist =(prod)=>{

    const storedlist =getStoreWishList();
    const isExist = storedlist.find(item=> item.product_id == prod.product_id);
    if(isExist){
        // console.log(prod,' this is already exist')
        return 'item Added'
    }else{
        storedlist.push(prod);
        // localStorage.setItem('wish-list', JSON.stringify(storedlist));
        const wish = JSON.stringify(storedlist);
        localStorage.setItem('wish-list',wish)
        toast('This Prduct is added to your Wish list.')
    }
}

export {addToStore,getStoredredList,getStoreWishList,addToWishlist}