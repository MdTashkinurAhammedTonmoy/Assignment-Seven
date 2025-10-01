import React from 'react';

const Navebar = () => {
    return (
        <div className='flex lg:px-20 py-4 lg:justify-between justify-around text-center shadow-md'>
            <h2 className='lg:text-2xl text-[20px] font-bold text-[#130B2D]'>CS — Ticket System</h2>
            <div className='flex gap-8'>
                <ul className='hidden md:flex gap-8  items-center  text-[16px]'>
                <li> <a href=''>Home</a></li>
                <li><a href=''>FAQ</a></li>
                <li><a href=''>Changelog</a></li>
                <li><a href=''>Blog</a></li>
                <li><a href=''>Download</a></li>
                <li><a href=''>Contact</a></li>
            </ul>
            <button className="py-3 px-4 bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-[16px] font-semibold rounded-[4px] text-white" >+ New Ticket</button>
            </div>
            
        </div>

    );
};

export default Navebar;