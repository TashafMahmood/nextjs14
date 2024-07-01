"use client";
import React from "react";
import { Roboto } from "next/font/google";

const roboto = Roboto({ subsets: ["latin"], weight: "500" });

const page = () => {
  return (
    <div>
      <div>lorem ipsum font family is Roboto.</div>
    </div>
  );
};

export default page;
