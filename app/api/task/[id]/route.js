import dbConnect from "@/lib/dbConnect";
import Task from "@/models/Task";
import { NextResponse } from "next/server";

export async function PUT(request, { params }) {
  const { id } = params;
  const updatedData = await request.json();

  try {
    await dbConnect();
    const updatedTask = await Task.findByIdAndUpdate(id, updatedData, {
      new: true,
    });

    if (!updatedTask) {
      return NextResponse.json({ error: "Task not found" }, { status: 404 });
    }

    return NextResponse.json({ message: "Task updated", task: updatedTask }, { status: 200 });
  } catch (error) {
    console.error("Error updating task:", error.message);
    return NextResponse.json({ error: "Error updating task" }, { status: 500 });
  }
}
