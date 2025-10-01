import React from "react";
import { toast } from "react-toastify";

const TaskStatus = ({ tasks, setTasks, data, setData }) => {
  const handleComplete = (task) => {
    const updated = { ...task, status: "Resolved" };

    setTasks(tasks.filter((t) => t.ticketId !== task.ticketId));

    const newData = data.map((d) =>
      d.ticketId === task.ticketId ? updated : d
    );
    setData(newData);

    toast.success(`${task.title} marked as Resolved!`);
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Task Status</h1>
      {tasks.length === 0 ? (
        <p className="text-gray-500">No tasks in progress</p>
      ) : (
        tasks.map((task) => (
          <div
            key={task.ticketId}
            className="flex justify-between items-center bg-white shadow rounded-md p-3"
          >
            <p className="text-[14px] font-medium">{task.title}</p>
            <button
              className="px-3 py-1 bg-green-500 text-white rounded-md"
              onClick={() => handleComplete(task)}
            >
              Complete
            </button>
          </div>
        ))
      )}
    </div>
  );
};

export default TaskStatus;
