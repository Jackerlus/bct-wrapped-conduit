"use client";

import Link from "next/link";
import { useEffect } from "react";

export default function Home() {
  return (
    <div className="flex justify-items-center justify-center h-screen">
      <Link
        id="card-6"
        href="wrapped/start?season=6"
        className="flex items-center w-56 h-80 bg-orange-600 text-center m-20 rounded-lg"
      >
        <p className="text-center w-full text-5xl">6</p>
      </Link>
      <Link
        id="card-7"
        href="wrapped/start?season=7"
        className="flex items-center w-56 h-80 bg-purple-600 text-center m-20 rounded-lg"
      >
        <p className="text-center w-full text-5xl">7</p>
      </Link>
    </div>
  );
}
