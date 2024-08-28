"use client";
import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";

export default function Wrapped() {
  const [userId, setUserId] = useState(""); // Store the userId in a state

  // Get the userId from localStorage when the component mounts
  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedUserId = localStorage.getItem("bctUserId") || "";
      setUserId(storedUserId);
    }
  }, []);

  const searchParams = useSearchParams();
  const season = searchParams.get("season");

  return (
    <main className="font-sans text-base root m-10 min-h-screen justify-items-center">
      <div className="grid justify-items-center">
        <h1 className="m-5 mt-2 text-4xl">BCT Wrapped</h1>
        <h2 className="text-xl">Season {season}</h2>
        <h2>{userId ? `User ID: ${userId}` : "No User ID found"}</h2>{" "}
        {/* Display the userId */}
      </div>
    </main>
  );
}
