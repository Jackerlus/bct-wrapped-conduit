"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Login() {
  const router = useRouter();
  let userId: number;
  userId = Math.floor(Math.random() * (99999 - 10000 + 1)) + 10000;
  const setUserIdAndRedirect = () => {
    if (typeof window !== "undefined") {
      localStorage.setItem("bctUserId", String(userId));
      router.push("/home");
    }
  };
  return (
    <main className="">
      <button
        className="m-3 p-3 max-w-30 max-h-15 font-medium uppercase text-white bg-red-600 hover:bg-red-600/80 shadow-lg rounded-lg transition-all"
        onClick={setUserIdAndRedirect}
      >
        Riot login
      </button>
    </main>
  );
}
