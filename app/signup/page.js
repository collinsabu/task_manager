"use client";

import { useState } from "react";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [role, setRole] = useState("user"); // Default role is "user"
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic validation
    if (!email || !password || !name || !role) {
      toast.error("All fields are required");
      return;
    }

    console.log({ email, password, name, role }); // Debug log

    try {
      const response = await fetch("/api/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password, name, role }),
      });

      const data = await response.json();
      if (response.ok) {
        toast.success("Account created successfully!");
        router.push("/signin");
      } else {
        console.error("API Error:", data.error);
        toast.error(data.error || "Something went wrong");
      }
    } catch (error) {
      console.error("Fetch error:", error);
      toast.error("Failed to connect to the server");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-base_color ">
      <form
        onSubmit={handleSubmit}
        className="bg-base_two p-6 rounded-lg shadow-lg w-full max-w-md"
      >
        <h1 className="text-2xl font-semibold mb-4">Sign Up</h1>
        <div className="mb-4">
          <label htmlFor="name" className="block mb-2">
            Name
          </label>
          <input
            type="text"
            id="name"
            className="w-full p-2 border rounded-lg"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="w-full p-2 border rounded-lg"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block mb-2">
            Password
          </label>
          <input
            type="password"
            id="password"
            className="w-full p-2 border rounded-lg"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="role" className="block mb-2">
            Role
          </label>
          <select
            id="role"
            className="w-full p-2 border rounded-lg"
            value={role}
            onChange={(e) => setRole(e.target.value)}
            required
          >
            <option value="user">User</option>
            <option value="admin">Admin</option>
          </select>
        </div>
        <button
          type="submit"
          className="w-full bg-base_text text-white py-2 rounded-lg hover:bg-green-600 transition"
        >
          Sign Up
        </button>
        <p className="mt-4 text-center">
          Already have an account?{" "}
          <a href="/signin" className="text-base_text underline">
            Sign In
          </a>
        </p>
      </form>
    </div>
  );
};

export default SignUp;
