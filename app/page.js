"use client";

import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import TaskItem from "@/components/TaskItem";
import Modal from "@/components/Modal";
import { toast } from "react-toastify";
import { motion } from "framer-motion";

const AllTasks = () => {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [tasks, setTasks] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedTask, setSelectedTask] = useState(null);

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/signin");
    }
  }, [status, router]);

  const fetchTasks = async () => {
    if (session?.user) {
      const response = await fetch(`/api/task?user=${session.user.id}`);
      const data = await response.json();
      if (response.ok) {
        // Sort tasks by date (newest first) before setting state
        const sortedTasks = data.sort((a, b) => new Date(b.date) - new Date(a.date));
        setTasks(sortedTasks);
      } else {
        toast.error("Failed to fetch tasks");
      }
    }
  };

  const handleAddTask = async (newTask) => {
    try {
      const response = await fetch("/api/task", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...newTask, userId: session.user.id }),
      });

      if (response.ok) {
        const { task } = await response.json();
        // Add new task and sort the list (new task on top)
        setTasks((prev) => [task, ...prev].sort((a, b) => new Date(b.date) - new Date(a.date)));
        toast.success("Task created successfully!");
        setModalOpen(false);
      } else {
        toast.error("Failed to create task");
      }
    } catch (error) {
      console.error("Error creating task:", error);
      toast.error("An error occurred while creating the task");
    }
  };

  const handleEditTask = (updatedTask) => {
    setTasks((prev) =>
      // Update the task and sort the list again
      prev
        .map((t) => (t._id === updatedTask._id ? updatedTask : t))
        .sort((a, b) => new Date(b.date) - new Date(a.date))
    );
    toast.success("Task updated successfully!");
  };

  const handleDeleteTask = async (taskId) => {
    try {
      const response = await fetch(`/api/task?id=${taskId}`, {
        method: "DELETE",
      });

      if (response.ok) {
        // Remove the task and keep the remaining list sorted
        setTasks((prev) => prev.filter((task) => task._id !== taskId));
        toast.success("Task deleted successfully!");
      } else {
        toast.error("Failed to delete task");
      }
    } catch (error) {
      console.error("Error deleting task:", error);
      toast.error("An error occurred while deleting the task");
    }
  };

  useEffect(() => {
    if (status === "authenticated") {
      fetchTasks();
    }
  }, [status]);

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  return (
    <motion.div
      className="px-4 md:px-16 py-10 mb-10 bg-base_color"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className="flex justify-between items-center mb-6"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <h1 className="text-xl md:text-2xl font-bold text-base_text">All Tasks</h1>
        <button
          onClick={() => {
            setSelectedTask(null);
            setModalOpen(true);
          }}
          className="bg-base_text text-white px-4 py-2 rounded"
        >
          Add Task
        </button>
      </motion.div>

      {/* Task List Grid */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        {tasks.map((task) => (
          <motion.div
            key={task._id}
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <TaskItem
              task={task}
              onDelete={handleDeleteTask}
              onUpdate={handleEditTask}
            />
          </motion.div>
        ))}
      </motion.div>

      {modalOpen && (
        <Modal
          isOpen={modalOpen}
          task={selectedTask}
          onClose={() => {
            setModalOpen(false);
            setSelectedTask(null);
          }}
          onSave={selectedTask ? handleEditTask : handleAddTask}
        />
      )}
    </motion.div>
  );
};

export default AllTasks;
