import Link from "next/link";

export default function Login() {
  return (
    <main className="">
      <Link href="/home">
        <button className="m-3 p-3 max-w-30 max-h-15 font-medium uppercase text-white bg-red-600 hover:bg-red-600/80 shadow-lg rounded-lg transition-all">
          Riot login
        </button>
      </Link>
    </main>
  );
}
