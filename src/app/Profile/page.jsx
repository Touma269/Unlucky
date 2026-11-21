"use client";

import React from "react";
import { useRouter } from "next/navigation";

export default function About() {
  const router = useRouter();

  return (
    <div className="flex flex-1 flex-col justify-center items-center px-4">
      <div className="w-full max-w-md flex flex-col items-center text-center bg-white border border-zinc-200 p-8 rounded-2xl shadow-lg">
        <h1 className="text-2xl font-bold text-zinc-900 mb-4">About</h1>

        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoeNrYIaPmHz1e1Q8mBlCFjpzs954O42_DcNkrKhD2Vg&s=10"
          alt="Profile"
          className="w-40 h-40 object-cover rounded-full shadow-md border-4 border-zinc-100 mb-6"
        />

        <button
          onClick={() => router.back()}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2.5 px-6 rounded-full shadow transition cursor-pointer"
        >
          Back to Home
        </button>
      </div>
    </div>
  );
}
