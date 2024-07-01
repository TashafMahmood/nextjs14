"use client";

import React, { useEffect, useState } from "react";

const Data = () => {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts");
      const data = await res.json();
      setProduct(data);
    };

    getData();
  }, []);

  return (
    <div>
      <h1 className="text-2xl font-extrabold text-center m-2 bg-amber-600 text-white">
        FETCHING DATA USING CLIENT COMPONENT
      </h1>
      <ul>
        {product?.map((item) => (
          <li key={item.id} className="m-2 p-2 border-blue-500 border-2">
            {item.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Data;
