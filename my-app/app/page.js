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
    </div>
  );
};

export default page;
