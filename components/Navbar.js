"use client";

import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const { data: session } = useSession();
  const [isOpen, setIsOpen] = useState(false);

  // Toggle menu visibility
  const toggleMenu = () => setIsOpen(!isOpen);

  // Framer Motion Variants for sliding menu
  const menuVariants = {
    hidden: { x: "-100%", opacity: 0 },
    visible: { x: 0, opacity: 1 },
    exit: { x: "-100%", opacity: 0 },
  };

  // Only render the Navbar if the user is signed in
  if (!session) {
    return null; // Return null if there is no session (i.e., the user is not signed in)
  }

  return (
    <motion.nav
      className="bg-base_color text-white p-4"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex justify-between items-center">
        <h1 className="text-lg font-bold">Ziprus Task Manager</h1>
        
        {/* Menu Button for Mobile */}
        <button
          className="text-xl md:hidden"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          {isOpen ? <FiX /> : <FiMenu />}
        </button>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-4">
          <Link href="/" className="hover:text-base_text transition">
            All Tasks
          </Link>
          <Link href="/important" className="hover:text-base_text transition">
            Important
          </Link>
          <Link href="/completed" className="hover:text-base_text transition">
            Completed
          </Link>

          <div>
            <span className="mr-2">{session.user.name}</span>
            <button
              onClick={() => signOut()}
              className="bg-base_two px-3 py-1 rounded hover:bg-base_text transition"
            >
              Sign Out
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          className="fixed top-0 left-0 h-full w-3/4 bg-base_color text-white p-6 flex flex-col space-y-4 shadow-lg md:hidden z-50"
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={menuVariants}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          <Link
            href="/"
            onClick={toggleMenu}
            className="hover:text-base_text transition"
          >
            All Tasks
          </Link>
          <Link
            href="/important"
            onClick={toggleMenu}
            className="hover:text-base_text transition"
          >
            Important
          </Link>
          <Link
            href="/completed"
            onClick={toggleMenu}
            className="hover:text-base_text transition"
          >
            Completed
          </Link>
          <div>
            <span className="block mb-4">{session.user.name}</span>
            <button
              onClick={() => {
                toggleMenu();
                signOut();
              }}
              className="bg-base_two px-3 py-1 rounded hover:bg-base_text transition w-full"
            >
              Sign Out
            </button>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
