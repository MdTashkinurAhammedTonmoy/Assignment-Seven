import React, { use, useState } from "react";
import Card from "./Card";
import Coungting from "./Coungting";
import TaskStatus from "./TaskStatus";
import ResolvedCard from "./ResolvedCard";
import { toast } from "react-toastify";

const Countbox = ({ fatcIssues }) => {
  const data = use(fatcIssues);
  const [issues, setData] = useState(data);

  const [taskStatus, setTaskStatus] = useState([]);
  const [ResolvedTask, setResolvedTask] = useState([]);

  const hendleTask = (issue) => {
    toast.success("Tickets Have Been Added");
    // console.log(issue)

    const isExist = taskStatus.find((item) => item.id == issue.id);
    if (isExist) {
      toast.error("Can not be pressed twice on a card");
      return;
    }

    const newTaskStatus = [...taskStatus, issue];
    setTaskStatus(newTaskStatus);
  };

  const hendleReslved = (issue) => {
    console.log(issue);

    const newReslved = [...ResolvedTask, issue];
    setResolvedTask(newReslved);

    const isReslved = taskStatus.filter((item) => item.id !== issue.id);
    setTaskStatus(isReslved);

    const remaininTask = issues.filter((item) => item.id !== issue.id);
    toast.success("Completed");
    setData(remaininTask);
  };

  return (
    <div>
      {/* box */}
      {/* issue={initialData} */}
      <Coungting
        TaskStatusTottal={taskStatus.length}
        ResolvedTottal={ResolvedTask.length}
      ></Coungting>

      {/* cards */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 p-4">
        <div className="col-span-2  space-y-4">
          <h1 className="text-2xl font-bold mb-4">Customer Tickets</h1>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {issues.map((issue, ind) => {
              return (
                <Card hendleTask={hendleTask} key={ind} issue={issue}></Card>
              );
            })}
          </div>
        </div>

        <div className="col-span-1 space-y-4">
          <h1 className="text-2xl font-bold mb-4">Task Status</h1>
          <div className="shadow p-10 space-y-5">
            {taskStatus.map((issue, ind) => (
              <TaskStatus
                hendleReslved={hendleReslved}
                key={ind}
                issue={issue}
              ></TaskStatus>
            ))}
          </div>
          <h1 className="text-2xl font-bold mb-4">Resolved Task</h1>
          <div className="shadow p-10 space-y-5">
            {ResolvedTask.map((issue, ind) => (
              <ResolvedCard key={ind} issue={issue}></ResolvedCard>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Countbox;
