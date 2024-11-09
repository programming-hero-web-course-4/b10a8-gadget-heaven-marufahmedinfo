import { Link, Outlet, useLoaderData } from "react-router-dom";
import Banner from "../../components/Banner";
import Heading from "../../components/Heading";
import Categories from "../../components/Categories";



const Home = () => {
    const categories = useLoaderData()
    
    return (
        <div>
          <div className=" text-center pt-4 pb-[150px] bg-[#9538E2] rounded-b-2xl space-y-10">
             <h1 className=" w-9/12 font-bold text-white mx-auto text-2xl md:text-4xl lg:text-5xl">Upgrade Your Tech Accessorize with Gadget Heaven Accessories</h1>
           <p className="mt-4 w-[550px] text-white mx-auto">Explore the latest gadgets that will take your experience to the 
            next level. From smart devices to the coolest accessories, we have it all!</p>
           <Link to={'/dashbord'} > <button className= "text-purple-500 text-xl rounded-3xl bg-white px-5 py-3 mt-4btn">Shop Now</button></Link></div>


<Banner ></Banner>

<Heading title={'Explore Cutting-Edge Gedgets'}></Heading>

<div className="flex gap-5 mb-36"><Categories key={categories.slug} categories={categories}></Categories> 
<Outlet></Outlet>
</div>
        </div>
    );
};

export default Home;