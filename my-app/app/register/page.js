"use client";
import React, { useState } from "react";

const Register = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const registerUser = async () => {
    let response = await fetch("/api/register", {
      method: "POST",
      body: JSON.stringify({ name, age, email }),
    });
    response = await response.json();
    
    if(response.ok){
        alert("User registered successfully!")
        setName("")
        setAge("")
        setEmail("")
    }else{
        alert("Something went wrong! Try again.")
    }
  };

  return (
    <div className="bg-purple-300 h-lvh flex items-center justify-center">
      <div className="bg-white p-4 rounded-lg shadow-xl flex flex-col items-center">
        <h1 className="text-2xl font-bold mb-2">Register Now</h1>
        <input
          type="text"
          placeholder="Enter your name"
          className="border-2 border-blue-500 p-2 my-2 w-[300px] outline-none rounded-md"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
        <input
          type="text"
          placeholder="Enter your age"
          className="border-2 border-blue-500 p-2 my-2 w-[300px] outline-none rounded-md"
          onChange={(e) => setAge(e.target.value)}
          value={age}
        />
        <input
          type="email"
          placeholder="Enter your email"
          className="border-2 border-blue-500 p-2 my-2 w-[300px] outline-none rounded-md"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <button
          className="bg-purple-500 w-full p-2 mt-3 rounded-md text-white shadow-lg hover:bg-purple-600 transition-all"
          onClick={registerUser}
        >
          Register Now
        </button>
      </div>
    </div>
  );
};

export default Register;
