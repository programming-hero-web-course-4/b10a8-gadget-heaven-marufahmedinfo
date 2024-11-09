
import { createBrowserRouter } from "react-router-dom"

import MainLayout from "../layoutes/MainLayout"
import Home from "../assets/Pages/Home"
import Static from "../assets/Pages/Static"
import Dashbord from "../assets/Pages/Dashbord"
import ProductsCard from "../components/ProductsCard"
import View from "../components/View"
import ErrorPage from "../components/ErrorPage"
import About from "../assets/Pages/About"


const routes= createBrowserRouter([
    {
      path:'/',
      element: <MainLayout />,
      errorElement: <ErrorPage />,
      children: [
        {
            path: '/',
            element: <Home></Home>,
            loader : () => fetch('../category.json'),
            children: [
                {
                    path: '/',
                    element: <ProductsCard></ProductsCard>,
                    loader : () => fetch('../products.json'),
                
                },
                {
                    path: '/products/:category',
                    element: <ProductsCard></ProductsCard>,
                    loader : () => fetch('../products.json'),
                },
                
            ]
        },
       
            {
                path: '/Cards/:product_id',
                element: <View></View>,
                loader : () => fetch('../products.json'),
            }
        ,
        {
            path: '/static',
            element: <Static></Static>
        },
        {
            path: '/dashbord',
            element: <Dashbord></Dashbord>,      
        }, 
        {
            path: '/about',
            element: <About></About>,      
        },
      
      ]
    }
  ])



  export default routes