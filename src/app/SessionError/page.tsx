"use client";

import { redirect } from "next/navigation";

const Custom404 = () => {
  const ren = () => {
    redirect("login");
  };
  
  return (
    <>
      <div className="h-screen flex flex-col items-center justify-center text-gray-300">
        <h1 className="text-6xl font-bold mb-4">404</h1>
        <p className="text-lg mb-6">Oops! Page not found.</p>
        <p className="text-base text-red-600">Your session may have expired.</p>
        <button
          onClick={ren}
          className="px-4 py-2 mt-3 bg-gray-300 text-black rounded-md hover:bg-teal-700"
        >
          Go to Login
        </button>
      </div>
      <hr className="h-2 bg-white" />
    </>
  );
};

export default Custom404;
