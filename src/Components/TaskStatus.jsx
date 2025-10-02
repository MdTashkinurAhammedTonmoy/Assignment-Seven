import React from "react";

const TaskStatus = ({ issue, hendleReslved }) => {
  return (
    <div className="bg-[#FFFFFF] p-4 space-y-4 shadow rounded-md">
      <h3 className="text-[20px] font-medium">{issue.title}</h3>
      <button
        onClick={() => hendleReslved(issue)}
        className="w-full bg-[#02A53B] text-[16px] cursor-pointer text-white py-2 rounded-md"
      >
        Complete
      </button>
    </div>
  );
};

export default TaskStatus;
