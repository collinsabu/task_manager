"use client";

import { useEffect, useState } from "react";
import TaskItem from "@/components/TaskItem";
import { toast } from "react-toastify";

const TaskList = ({ userId }) => {
  const [tasks, setTasks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // Fetch tasks from the database
  const fetchTasks = async () => {
    try {
      const response = await fetch(`/api/task?user=${userId}&t=${Date.now()}`); // Use a unique timestamp to force fresh data
      const data = await response.json();
      if (response.ok) {
        setTasks(data);
      } else {
        toast.error("Failed to fetch tasks");
      }
    } catch (error) {
      console.error("Error fetching tasks:", error);
      toast.error("An error occurred while fetching tasks");
    } finally {
      setIsLoading(false);
    }
  };

  // Fetch tasks on component mount
  useEffect(() => {
    if (userId) {
      fetchTasks();
    }
  }, [userId]);

  if (isLoading) {
    return <div>Loading tasks...</div>;
  }

  return (
    <div>
      {tasks.length === 0 ? (
        <p>No tasks found</p>
      ) : (
        tasks.map((task) => (
          <TaskItem
            key={task._id}
            task={task}
            onRefresh={fetchTasks} // Pass the fetch function for refreshing
          />
        ))
      )}
    </div>
  );
};

export default TaskList;
