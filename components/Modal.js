"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const Modal = ({ isOpen, onClose, onSave, task = null }) => {
  const [taskData, setTaskData] = useState({
    title: task?.title || "",
    description: task?.description || "",
    date: task?.date || "",
    status: task?.status || "normal",
  });

  if (!isOpen) return null;

  const handleSubmit = async () => {
    if (!taskData.title || !taskData.description || !taskData.date) {
      alert("All fields are required.");
      return;
    }
    await onSave(taskData); // Wait for save to complete
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <motion.div
        className="bg-white p-6 rounded-lg shadow-lg"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
      >
        <h2 className="text-lg font-bold mb-4">
          {task ? "Edit Task" : "Create New Task"}
        </h2>
        <input
          type="text"
          placeholder="Title"
          value={taskData.title}
          onChange={(e) => setTaskData({ ...taskData, title: e.target.value })}
          className="w-full mb-2 border px-3 py-2 rounded"
        />
        <textarea
          placeholder="Description"
          value={taskData.description}
          onChange={(e) =>
            setTaskData({ ...taskData, description: e.target.value })
          }
          className="w-full mb-2 border px-3 py-2 rounded"
        />
        <input
          type="date"
          value={taskData.date}
          onChange={(e) => setTaskData({ ...taskData, date: e.target.value })}
          className="w-full mb-2 border px-3 py-2 rounded"
        />
        <div className="mb-4">
          <label className="mr-2 font-medium">Status:</label>
          <select
            value={taskData.status}
            onChange={(e) =>
              setTaskData({ ...taskData, status: e.target.value })
            }
            className="border px-3 py-2 rounded"
          >
            <option value="normal">Normal</option>
            <option value="important">Important</option>
            <option value="completed">Completed</option>
          </select>
        </div>
        <div className="flex space-x-4">
          <button
            onClick={handleSubmit}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
          >
            Save
          </button>
          <button
            onClick={onClose}
            className="bg-gray-300 px-4 py-2 rounded hover:bg-gray-400 transition"
          >
            Cancel
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default Modal;
