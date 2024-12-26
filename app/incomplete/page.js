"use client";

import { useEffect, useState } from "react";
import TaskItem from "@/components/TaskItem";

const IncompleteTasks = () => {
  const [tasks, setTasks] = useState([]);

  const fetchIncompleteTasks = async () => {
    const response = await fetch("/api/task?completed=false");
    const data = await response.json();
    setTasks(data);
  };

  useEffect(() => {
    fetchIncompleteTasks();
  }, []);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Incomplete Tasks</h1>
      {tasks.length > 0 ? (
        tasks.map((task) => <TaskItem key={task._id} task={task} />)
      ) : (
        <p>No incomplete tasks yet.</p>
      )}
    </div>
  );
};

export default IncompleteTasks;
