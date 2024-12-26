import connectMongoDB from "@/lib/dbConnect";
import User from "@/models/User";
import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const { email, password, name, role } = await request.json();

    // Basic validation for required fields
    if (!email || !password || !name || !role) {
      return NextResponse.json({ error: "All fields are required" }, { status: 400 });
    }

    // Ensure role is valid
    if (!["user", "admin"].includes(role)) {
      return NextResponse.json({ error: "Invalid role value" }, { status: 400 });
    }

    await connectMongoDB();
    console.log("connected db");

    // Check for existing user
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return NextResponse.json({ error: "Email already exists" }, { status: 400 });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create and save the new user
    const user = new User({ email, password: hashedPassword, name, role });
    await user.save();

    return NextResponse.json({ message: "User created successfully" }, { status: 201 });
  } catch (error) {
    console.error("Sign-up error:", error.message);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
