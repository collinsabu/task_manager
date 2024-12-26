"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const EditTaskModal = ({ task, onClose }) => {
  const [formData, setFormData] = useState({
    title: task?.title || "",
    description: task?.description || "",
    date: task?.date || "",
    status: task?.status || "normal",
  });

  const router = useRouter();

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`/api/task/${task._id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        throw new Error("Failed to update task");
      }

      onClose();
      router.refresh();
    } catch (error) {
      console.error("Error updating task:", error.message);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg shadow-lg w-[90%] max-w-md">
        <h2 className="text-xl font-bold mb-4">Edit Task</h2>
        <form onSubmit={handleUpdate}>
          <input
            type="text"
            placeholder="Title"
            value={formData.title}
            onChange={(e) => setFormData({ ...formData, title: e.target.value })}
            className="w-full mb-2 border px-3 py-2 rounded"
          />
          <textarea
            placeholder="Description"
            value={formData.description}
            onChange={(e) =>
              setFormData({ ...formData, description: e.target.value })
            }
            className="w-full mb-2 border px-3 py-2 rounded"
          />
          <input
            type="date"
            value={formData.date}
            onChange={(e) => setFormData({ ...formData, date: e.target.value })}
            className="w-full mb-2 border px-3 py-2 rounded"
          />
          <div className="mb-4">
            <label className="mr-2 font-medium">Status:</label>
            <select
              value={formData.status}
              onChange={(e) =>
                setFormData({ ...formData, status: e.target.value })
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
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
            >
              Save
            </button>
            <button
              type="button"
              onClick={onClose}
              className="bg-gray-300 px-4 py-2 rounded hover:bg-gray-400 transition"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditTaskModal;
