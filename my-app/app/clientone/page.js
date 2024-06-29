"use client";

const ClientOne = () => {
  console.log("CLIENT COMPONENT CALLED");
  return (
    <div>
      <h1>Client Component</h1>
      <button
        className="px-3 py-2 rounded-md bg-red-300 hover:bg-red-400 cursor-pointer m-3 shadow-xl"
        onClick={() => alert("Client component fetched")}
      >
        click here
      </button>
    </div>
  );
};

export default ClientOne;
