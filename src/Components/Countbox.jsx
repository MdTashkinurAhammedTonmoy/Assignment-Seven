import React, { use, useState } from "react";
import Card from "./Card";
import Coungting from "./Coungting";

const Countbox = ({ fatcIssues }) => {
  const initialData = use(fatcIssues);
  // const [issues,setData] = useState(initialData)

  

  return (
    <div>
      {/* box */}
      <Coungting issue={initialData}></Coungting>

      {/* cards */}
      <div className="grid grid-cols-3 gap-6 p-4">
        <div className="col-span-2 space-y-4">
          <h1 className="text-2xl font-bold mb-4">Customer Tickets</h1>

          <div className="grid grid-cols-2 space-x-6 space-y-4">
            {
            initialData.map((issue,ind) => { 
              return <Card key={ind} issue={issue}></Card> ;
            })}
          </div>
        </div>

        <div className="col-span-1 space-y-4">
          <h1 className="text-2xl font-bold mb-4">Task Status</h1>
          {/* ... Task Status-er content ekhane din ... */}
        </div>
      </div>
    </div>
  );
};

export default Countbox;




