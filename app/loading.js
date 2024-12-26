import React from "react";

export default function Loading() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-base_color">
      <div className="text-center">
        {/* Spinner Animation */}
        <div className="flex justify-center mb-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-16 w-16 sm:h-24 sm:w-24 text-base_text animate-spin"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 2v2m6.364 1.636l-1.414 1.414m4.95 4.95h-2M18 12l-1.636 1.636M12 20v2m-6.364-1.636l1.414-1.414M2 12h2M6.364 6.364L7.778 4.95"
            />
          </svg>
        </div>

        {/* Loading Text */}
        <div className="text-4xl sm:text-6xl font-bold text-base_text animate-pulse">
          loading...
        </div>
      </div>
    </div>
  );
}
