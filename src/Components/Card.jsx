import React from 'react';

const Card = ({issue}) => {
  
    return (
        
            <div className="shadow-md rounded-md cursor-pointer bg-slate-100 p-4 space-y-3 ">
                  <div className="flex justify-between">
                    <h2 className="text-[18px] font-medium">{issue.title}</h2>
                    <button className="text-[16px] font-medium px-3 py-1 bg-[#B9F8CF] rounded-[400px]">
                      <i className="fa-solid text-[#02A53B] fa-circle"></i>
                      {issue.status}
                    </button>
                  </div>
                  <p className="text-[16px] text-[#627382]">
                    {issue.description}
                  </p>
                  <div className="flex justify-between">
                    <div className="flex gap-4">
                      <p className="text-[16px] text-[#627382] font-medium">
                        {issue.id}
                      </p>
                      <p className="text-[16px] text-red-500 font-medium">
                        {issue.priority}
                      </p>
                    </div>
                    <div className="flex gap-4">
                      <p className="text-[14px] text-[#627382]">
                        {issue.customerName}
                      </p>
                      <p className="text-[#627382]">
                        <i className="fa-solid h-6 w-6 text-[#627382] fa-calendar-days"></i>
                        {issue.date}
                      </p>
                    </div>
                  </div>
                </div>
        
    );
};

export default Card;
