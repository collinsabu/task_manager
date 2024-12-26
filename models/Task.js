import mongoose from "mongoose";

const TaskSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    date: { type: Date, required: true },
    isCompleted: { type: Boolean, default: false },
    isImportant: { type: Boolean, default: false },
    userId: { type: String, required: true },
    status: { type: String, enum: ["normal", "important", "completed"], default: "normal" },
  },
  { timestamps: true }
);

// Ensure it connects to the `Task` collection explicitly
const Task = mongoose.models.Task || mongoose.model("Task", TaskSchema, "Task");

export default Task;
