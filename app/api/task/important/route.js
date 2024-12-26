import dbConnect from "@/lib/dbConnect";
import Task from "@/models/Task";
import { NextResponse } from "next/server";

// Handle GET requests
export async function GET(request) {
  try {
    await dbConnect(); // Ensure database connection
    const { searchParams } = new URL(request.url); // Extract query parameters
    const userId = searchParams.get("user");
    const status = searchParams.get("status");

    // Check for required parameters
    if (!userId) {
      return NextResponse.json(
        { error: "User ID is required" },
        { status: 400 }
      );
    }

    // Build query filter
    const filter = { userId };
    if (status) {
      filter.status = status; // Add status filter if provided
    }

    // Fetch tasks from the database
    const tasks = await Task.find(filter);

    return NextResponse.json(tasks, { status: 200 });
  } catch (error) {
    console.error("Error fetching important tasks:", error.message);
    return NextResponse.json(
      { error: "Error fetching important tasks" },
      { status: 500 }
    );
  }
}
