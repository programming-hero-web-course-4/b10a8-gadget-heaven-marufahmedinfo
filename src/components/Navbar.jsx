import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();
const isHomeActive = location.pathname === '/';
    return (
        <div className={`navbar ${isHomeActive ? 'bg-[#9538E2] rounded-t-2xl text-white' : 'bg-base-100'} transition-all`}>
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
      
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
        <NavLink to='/' className={ ({isActive}) =>
          `text-2xl px-4 py-2 rounded-2xl  ${ isActive? 'bg-purple-300' : 'hover:bg-gray-300' }`}>Home</NavLink>
        <NavLink className={ ({isActive}) =>
          `text-2xl px-4 py-2 rounded-2xl ${ isActive? 'bg-purple-300' : 'hover:bg-gray-300' }`} to='/static'>Statics</NavLink>
        <NavLink className={ ({isActive}) =>
          `text-2xl px-4 py-2 rounded-2xl ${ isActive? 'bg-purple-300' : 'hover:bg-gray-300' }`} to='/dashbord'>Dashboard</NavLink>
          <NavLink className={ ({isActive}) =>
          `text-2xl px-4 py-2 rounded-2xl ${ isActive? 'bg-purple-300' : 'hover:bg-gray-300' }`} to='/about'>About</NavLink>
        
      </ul>
    </div>
    <Link to='/' className="text-2xl font-bold">Gedget Heaven</Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal gap-8 px-1">
    <NavLink className={ ({isActive}) =>
          `text-2xl px-4 py-2 rounded-2xl ${ isActive? 'bg-purple-300' : 'hover:bg-gray-300' }`} to='/'>Home</NavLink>
        <NavLink className={ ({isActive}) =>
          `text-2xl px-4 py-2 rounded-2xl ${ isActive? 'bg-purple-300' : 'hover:bg-gray-300' }`} to='/static'>Statics</NavLink>
        <NavLink className={ ({isActive}) =>
          `text-2xl px-4 py-2 rounded-2xl ${ isActive? 'bg-purple-300' : 'hover:bg-gray-300' }`} to='/dashbord'>Dashboard</NavLink>
          <NavLink className={ ({isActive}) =>
          `text-2xl px-4 py-2 rounded-2xl ${ isActive? 'bg-purple-300' : 'hover:bg-gray-300' }`} to='/about'>About</NavLink>
    </ul>
  </div>
  <div className="navbar-end gap-4">
    <a className="btn rounded-full"><img className='h-5 w-5' src="https://i.ibb.co.com/8c41Byb/icons8-shop-50.png" alt="" /></a>
    <a className="btn rounded-full"><img className='h-5 w-5' src="https://i.ibb.co.com/bstKcHJ/icons8-love-30.png" alt="" /></a>
  </div>
</div>
    );
};

export default Navbar;