"use client";
import react from "react";
import Login from "./login/page";
import Link from "antd/es/typography/Link";

export default function Check() {
  return <Login />;
}

export function Home() {
  return (
    <div>
      <p>Home</p>
      <Link href="wrapped">
        <p>BCT Wrapped</p>
      </Link>
    </div>
  );
}
