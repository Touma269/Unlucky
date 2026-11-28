"use client";


import React from "react";
import { useRouter } from "next/navigation";


export default function Contact() {
  const router = useRouter();


  return (
    <div className="flex min-h-screen w-full flex-col justify-center items-center px-4 bg-red-950">
      <div className="w-full max-w-md flex flex-col items-center text-center bg-red-900 border border-red-700 p-8 rounded-2xl shadow-lg">
        <h1 className="text-2xl font-bold text-white mb-4">
          Contact
        </h1>


        <p className="text-base text-red-100 mb-6">
          Email:{" "}
          <a
            href="mailto:marvijone.serdon@hcdc.edu.ph"
            className="text-red-300 hover:underline font-medium"
          >
            marvijone.serdon@hcdc.edu.ph
          </a>
        </p>


        <button
          onClick={() => router.back()}
          className="w-full bg-red-700 hover:bg-red-600 text-white font-medium py-2.5 px-6 rounded-full shadow transition cursor-pointer"
        >
          Back to Home
        </button>
      </div>
    </div>
  );
}