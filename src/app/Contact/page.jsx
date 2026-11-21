"use client";

import React from "react";
import { useRouter } from "next/navigation";

export default function Contact() {
  const router = useRouter();

  return (
    <div className="flex flex-1 flex-col justify-center items-center px-4">
      <div className="w-full max-w-md flex flex-col items-center text-center bg-white border border-zinc-200 p-8 rounded-2xl shadow-lg">
        <h1 className="text-2xl font-bold text-zinc-900 mb-4">Contact</h1>

        <p className="text-base text-zinc-600 mb-6">
          Email:{" "}
          <a
            href="mailto:marvijone.serdon@hcdc.edu.ph"
            className="text-blue-600 hover:underline font-medium"
          >
            marvijone.serdon@hcdc.edu.ph
          </a>
        </p>

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
