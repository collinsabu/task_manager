import dbConnect from "@/lib/dbConnect";
import Task from "@/models/Task";
import { NextResponse } from "next/server";

export async function GET(request) {
  try {
    await dbConnect(); // Ensure database connection
    const { searchParams } = new URL(request.url); // Extract query parameters
    const userId = searchParams.get("user");
    const status = "completed"; // Hardcoded for completed tasks

    // Validate userId
    if (!userId) {
      return NextResponse.json(
        { error: "User ID is required" },
        { status: 400 }
      );
    }

    // Fetch completed tasks
    const tasks = await Task.find({ userId, status });

    return NextResponse.json(tasks, { status: 200 });
  } catch (error) {
    console.error("Error fetching completed tasks:", error.message);
    return NextResponse.json(
      { error: "Error fetching completed tasks" },
      { status: 500 }
    );
  }
}
