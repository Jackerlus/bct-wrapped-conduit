"use client";
import { useSearchParams } from "next/navigation";

export default function Wrapped() {
  function handleClick() {}

  const searchParams = useSearchParams();
  const season = searchParams.get("season");
  return (
    <main className="font-sans text-base root m-10 min-h-screen justify-items-center">
      <div className=" grid justify-items-center">
        <h1 className="m-5 mt-2 text-4xl">BCT Wrapped</h1>
        <h2 className="text-xl">Season {searchParams.get("season")}</h2>
        <input
          type="text"
          placeholder="Discord username"
          id="input-discord"
          className="p-2 m-3 outline-orange-400 outline outline-2 rounded-md"
        />
        <input
          type="button"
          value="GET YOUR WRAPPED!"
          id="button-submit"
          className="m-3 p-3 max-w-30 max-h-15 font-medium uppercase bg-orange-400 active:bg-orange-400 hover:bg-orange-400/80 shadow-lg rounded-lg transition-all"
        />
      </div>
    </main>
  );
}
