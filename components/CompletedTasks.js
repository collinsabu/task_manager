"use client";

import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import TaskItem from "@/components/TaskItem";
import { toast } from "react-toastify";

const CompletedTasks = () => {
  const { data: session } = useSession();
  const [tasks, setTasks] = useState([]);

  // Fetch completed tasks
  const fetchCompletedTasks = async () => {
    if (session?.user) {
      try {
        const response = await fetch(
          `/api/task/completed?user=${session.user.id}`
        );
        const data = await response.json();

        if (response.ok) {
          setTasks(data);
        } else {
          toast.error("Failed to fetch completed tasks");
        }
      } catch (error) {
        console.error("Error fetching completed tasks:", error);
        toast.error("An error occurred while fetching tasks");
      }
    }
  };

  useEffect(() => {
    fetchCompletedTasks();
  }, [session]);

  if (!tasks.length) {
    return <p>No completed tasks found.</p>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 ">
      {tasks.map((task) => (
        <TaskItem
          key={task._id}
          task={task}
          onRefresh={fetchCompletedTasks} // Pass refresh handler to TaskItem
        />
      ))}
    </div>
  );
};

export default CompletedTasks;
