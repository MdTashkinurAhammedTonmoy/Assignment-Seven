import React from 'react';

const ResolvedCard = ({issue}) => {
    return (
        <div className='bg-[#E0E7FF] shadow p-5 text-[20px] font-medium rounded-[4px] space-y-4'>
            <h2>{issue.title}</h2>
            <div className='flex justify-between'>
                <h3 className='text-[#02A53B] text-[18px]'><i class="fa-solid fa-check"></i> Completed</h3>
                <p className='text-[#627382] text-[16px]'>Click to remove</p>
            </div>
        </div>
    );
};

export default ResolvedCard;