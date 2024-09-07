"use client";
import { useRouter } from "next/navigation";

export default function Login() {
  const router = useRouter();

  const setUserIdAndRedirect = () => {
    if (typeof window !== "undefined") {
      router.push(
        "https://auth.riotgames.com/authorize?redirect_uri=http://local.bct.com/login/callback&client_id=0a5244a5-49bf-495e-9692-e8f616bda352&response_type=code&scope=openid",
      );
    }
  };

  return (
    <div className="flex justify-center">
      <button
        className="m-3 p-3 max-w-30 max-h-15 font-medium uppercase text-white bg-red-600 hover:bg-red-600/80 shadow-lg rounded-lg transition-all"
        onClick={setUserIdAndRedirect}
      >
        Riot login
      </button>
    </div>
  );
}
