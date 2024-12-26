import dbConnect from "@/lib/dbConnect";
import Task from "@/models/Task";
import { NextResponse } from "next/server";

export async function GET(request) {
  try {
    await dbConnect();
    const { searchParams } = new URL(request.url);
    const userId = searchParams.get("user");

    if (!userId) {
      return NextResponse.json({ error: "User ID is required" }, { status: 400 });
    }

    // Fetch tasks from the Task collection for the specific user
    const tasks = await Task.find({ userId });
    console.log("Fetched tasks:", tasks); // Debugging

    return NextResponse.json(tasks, { status: 200 });
  } catch (error) {
    console.error("Error fetching tasks:", error.message);
    return NextResponse.json({ error: "Error fetching tasks" }, { status: 500 });
  }
}

// Add a New Task


export async function POST(request) {
  try {
    const { title, description, date, status, userId } = await request.json();

    // Check for all required fields
    if (!title || !description || !date || !status || !userId) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    await dbConnect();

    // Create new task with the provided status
    const newTask = new Task({
      title,
      description,
      date,
      isCompleted: status === "completed",
      isImportant: status === "important",
      userId,
    });

    await newTask.save();
    console.log("New Task Created:", newTask); // Debugging
    return NextResponse.json({ message: "Task created", task: newTask }, { status: 201 });
  } catch (error) {
    console.error("Error creating task:", error.message);
    return NextResponse.json({ error: "Error creating task" }, { status: 500 });
  }
}




// Update a Task
export async function PATCH(request) {
  try {
    const { id, isCompleted, title, description, isImportant } = await request.json();

    if (!id) {
      return NextResponse.json({ error: "Task ID is required" }, { status: 400 });
    }

    await dbConnect();

    const updatedTask = await Task.findByIdAndUpdate(
      id,
      { title, description, isImportant, isCompleted },
      { new: true }
    );

    if (!updatedTask) {
      return NextResponse.json({ error: "Task not found" }, { status: 404 });
    }

    return NextResponse.json({ message: "Task updated", task: updatedTask }, { status: 200 });
  } catch (error) {
    console.error("Error updating task:", error.message);
    return NextResponse.json({ error: "Error updating task" }, { status: 500 });
  }
}

// Delete a Task
export async function DELETE(request) {
  try {
    const url = new URL(request.url);
    const id = url.searchParams.get("id");

    if (!id) {
      return NextResponse.json({ error: "Task ID is required" }, { status: 400 });
    }

    await dbConnect();

    const deletedTask = await Task.findByIdAndDelete(id);

    if (!deletedTask) {
      return NextResponse.json({ error: "Task not found" }, { status: 404 });
    }

    return NextResponse.json({ message: "Task deleted successfully" }, { status: 200 });
  } catch (error) {
    console.error("Error deleting task:", error.message);
    return NextResponse.json({ error: "Error deleting task" }, { status: 500 });
  }
}
