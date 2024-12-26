"use client";

import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import TaskItem from "@/components/TaskItem";
import { toast } from "react-toastify";
import { motion } from "framer-motion";

const ImportantTasks = () => {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/signin");
    }
  }, [status, router]);

  const fetchImportantTasks = async () => {
    if (session?.user) {
      try {
        const response = await fetch(
          `/api/task/important?user=${session.user.id}&status=important`
        );
        const data = await response.json();
        if (response.ok) {
          // Sort tasks by date (newest first)
          const sortedTasks = data.sort((a, b) => new Date(b.date) - new Date(a.date));
          setTasks(sortedTasks);
        } else {
          toast.error("Failed to fetch important tasks");
        }
      } catch (error) {
        console.error("Error fetching important tasks:", error);
        toast.error("An error occurred while fetching tasks");
      }
    }
  };

  const handleUpdateTask = (updatedTask) => {
    setTasks((prev) =>
      // Update the task and sort the list
      prev
        .map((t) => (t._id === updatedTask._id ? updatedTask : t))
        .sort((a, b) => new Date(b.date) - new Date(a.date))
    );
    toast.success("Task updated successfully!");
  };

  const handleDeleteTask = (taskId) => {
    setTasks((prev) =>
      // Remove the task and keep the remaining list sorted
      prev.filter((task) => task._id !== taskId)
    );
    toast.success("Task deleted successfully!");
  };

  useEffect(() => {
    if (status === "authenticated") {
      fetchImportantTasks();
    }
  }, [status]);

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  return (
    <motion.div
      className="px-4 md:px-16 py-10 bg-base_color my-10"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }} // Exit animation
      transition={{ duration: 0.5 }}
    >
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-xl md:text-2xl font-bold text-base_text">Important Tasks</h1>
      </div>

      {/* Display message when no tasks are available */}
      {tasks.length === 0 ? (
        <motion.div
          className="flex justify-center items-center text-lg text-gray-600 py-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <p>No important tasks at the moment</p>
        </motion.div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {tasks.map((task) => (
            <motion.div
              key={task._id}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <TaskItem
                task={task}
                onDelete={() => handleDeleteTask(task._id)}
                onUpdate={handleUpdateTask}
              />
            </motion.div>
          ))}
        </div>
      )}
    </motion.div>
  );
};

export default ImportantTasks;
