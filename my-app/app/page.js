"use client";
import React from "react";
import { useRouter } from "next/navigation";
import Image from 'next/image'
import natureImage from '@/public/test.jpg'

const page = () => {
  const router = useRouter();

  const navigate = (page) => {
    router.push(page);
  };

  return (
    <div>
      <h1 className="text-3xl">Home</h1>
      {/* <Image src={natureImage} alt="nature image" width={500} height={500}/> */}
      <Image src="https://images.unsplash.com/photo-1458693416646-07f13b1a3159?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="nature image" width={500} height={500}/>
    </div>
  );
};

export default page;
