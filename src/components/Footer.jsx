import React from 'react';

const Footer = () => {
    return (
        <div>
            <footer className="footer text-center bg-base-200 text-base-content border-base-300 w-full  border-t px-10 py-4">
<div className='flex flex-col text-center  w-[500px] mx-auto'>
<h1 className='text-center w-[250px] text-2xl mx-auto'>Gedget Heaven</h1>
<p>Leding the way in cutting-edge techonology and innovation</p>
</div >
</footer>
            <footer className="footer bg-base-200 text-base-content p-10">
                
  <nav>
    <h6 className="footer-title">Services</h6>
    <a className="link link-hover">Branding</a>
    <a className="link link-hover">Design</a>
    <a className="link link-hover">Marketing</a>
    <a className="link link-hover">Advertisement</a>
  </nav>
  <nav>
    <h6 className="footer-title">Company</h6>
    <a className="link link-hover">About us</a>
    <a className="link link-hover">Contact</a>
    <a className="link link-hover">Jobs</a>
    <a className="link link-hover">Press kit</a>
  </nav>
  <nav>
    <h6 className="footer-title">Legal</h6>
    <a className="link link-hover">Terms of use</a>
    <a className="link link-hover">Privacy policy</a>
    <a className="link link-hover">Cookie policy</a>
  </nav>
</footer>

        </div>
    );
};

export default Footer;