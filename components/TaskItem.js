"use client";

import { useState, useEffect } from "react";
import EditTaskModal from "./EditTaskModal";

const TaskItem = ({ task, onUpdate, onDelete }) => {
  const [isEditModalOpen, setEditModalOpen] = useState(false);
  const [isOverdue, setIsOverdue] = useState(false);

  useEffect(() => {
    const checkOverdue = () => {
      const taskDate = new Date(task.date);
      const currentDate = new Date();
      const diffInDays = (currentDate - taskDate) / (1000 * 60 * 60 * 24);
      setIsOverdue(diffInDays > 2); // Check if more than 2 days overdue
    };

    checkOverdue();
  }, [task.date]);

  // Determine the color class and label for the task status
  const statusLabel =
    task.status === "completed"
      ? "Completed"
      : task.status === "important"
      ? "Important"
      : "Normal";

  const statusColorClass =
    task.status === "completed"
      ? "text-green-600"
      : task.status === "important"
      ? "text-red-600"
      : "text-black";

  const handleDelete = async () => {
    try {
      const response = await fetch(`/api/task?id=${task._id}`, {
        method: "DELETE",
      });

      if (response.ok) {
        onDelete(task._id); // Notify parent of the deletion
      } else {
        console.error("Failed to delete task");
      }
    } catch (error) {
      console.error("Error deleting task:", error);
    }
  };

  const handleSave = async (updatedTask) => {
    setEditModalOpen(false); // Close the modal
    if (onUpdate) {
      onUpdate(updatedTask); // Notify parent of the update
    }
  };

  return (
    <div className="flex flex-col border p-5 mb-2 rounded-[30px] bg-white">
      <div>
        <h3 className="text-lg font-bold">Title:</h3>
        <p className="text-[16px] mb-2">{task.title}</p>
        <h3 className="text-lg font-bold">Description:</h3>
        <p className="text-[16px] mb-2 overflow-y-scroll h-[44px]">
          {task.description}
        </p>

        {/* Display the task status with color */}
        <p className={`font-bold ${statusColorClass}`}>{statusLabel}</p>
      </div>
      <div className="flex justify-between space-x-2 mt-2">
        <div className="space-x-2 mt-2">
          <button
            onClick={() => setEditModalOpen(true)}
            className="px-4 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
          >
            Edit
          </button>
          <button
            onClick={handleDelete}
            className="px-4 py-1 bg-red-500 text-white rounded hover:bg-red-600 transition"
          >
            Delete
          </button>
        </div>

        <p
          className={`${
            isOverdue ? "text-red-600 animate-pulse font-bold" : "text-black"
          }`}
        >
          {new Date(task.date).toLocaleDateString()}
        </p>
      </div>
      {isEditModalOpen && (
        <EditTaskModal
          task={task}
          onClose={() => setEditModalOpen(false)}
          onSave={handleSave} // Pass updated task to parent
        />
      )}
    </div>
  );
};

export default TaskItem;
