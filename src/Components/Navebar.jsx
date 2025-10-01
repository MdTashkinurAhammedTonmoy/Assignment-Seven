import React from 'react';

const Navebar = () => {
    return (
        <div className='flex px-20 py-4 justify-between text-center shadow-md'>
            <h2 className='text-2xl font-bold text-[#130B2D]'>CS — Ticket System</h2>
            <ul className='flex items-center gap-8 text-[16px]'>
                <li> <a href=''>Home</a></li>
                <li><a href=''>FAQ</a></li>
                <li><a href=''>Changelog</a></li>
                <li><a href=''>Blog</a></li>
                <li><a href=''>Download</a></li>
                <li><a href=''>Contact</a></li>
              <button className="py-3 px-4 bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-[16px] font-semibold rounded-[4px] text-white" >+ New Ticket</button>

            </ul>
        </div>
    );
};

export default Navebar;