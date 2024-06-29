"use client";
import React from "react";
import { useRouter } from "next/navigation";

const page = () => {
  const router = useRouter();

  const navigate = (page) => {
    router.push(page);
  };

  return (
    <div>
      <h1 className="text-3xl">Home</h1>
      <button
        className="bg-slate-400 p-2 rounded-md shadow-lg my-2 hover:bg-slate-500 cursor-pointer transition-all ease-in"
        onClick={() => router.push("about")}
      >
        Go to About
      </button>
      <button
        className="bg-red-500 p-2 rounded-md shadow-lg my-2 hover:bg-red-600 cursor-pointer transition-all ease-in text-white ml-2"
        onClick={() => navigate("login")}
      >
        Login Now
      </button>
    </div>
  );
};

export default page;
