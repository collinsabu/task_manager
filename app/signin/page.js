"use client";

import { signIn } from "next-auth/react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });

    if (res?.error) {
      toast.error(res.error);
    } else {
      toast.success("Signed in successfully!");
      router.push("/");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-base_color ">
      <form
        onSubmit={handleSubmit}
        className="bg-base_two p-6 rounded-lg shadow-lg w-full max-w-md"
      >
        <h1 className="text-2xl font-semibold mb-4">Sign In</h1>
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
        <button
          type="submit"
          className="w-full bg-base_text text-white py-2 rounded-lg hover:bg-green-600 transition"
        >
          Sign In
        </button>
        <p className="mt-4 text-center">
          Don't have an account?{" "}
          <a href="/signup" className="text-base_text underline">
            Sign Up
          </a>
        </p>
      </form>
    </div>
  );
};

export default SignIn;
