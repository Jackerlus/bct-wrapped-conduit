// src/app/login/callback/page.tsx
"use client";

import { useEffect, useState } from "react";

const Callback: React.FC = () => {
  const [tokenData, setTokenData] = useState<any>(null);
  const [authError, setAuthError] = useState<string | null>(null);
  const [userInfo, setUserInfo] = useState<any>(null);
  const [userInfoError, setUserInfoError] = useState<string | null>(null);

  useEffect(() => {
    const exchangeCodeForTokens = async () => {
      try {
        // Get the code from the URL parameters
        const params = new URLSearchParams(window.location.search);
        const code = params.get("code");
        if (!code) {
          setAuthError("Authorization code not found in URL");
          return;
        }
        const response = await fetch("/api/callback", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ code }),
        });

        const data = await response.json();

        if (!response.ok) {
          setAuthError(data.message || "Invalid or missing API data");
        } else {
          setTokenData(data);
        }
      } catch (error) {
        console.error("Error exchanging auth code:", error);
        setAuthError("Something went wrong while exchanging auth code");
      }
    };

    exchangeCodeForTokens();
  }, []); // Empty dependency array to run once after component mounts

  useEffect(() => {
    const getUserInfo = async () => {
      if (!tokenData) return; // Only run if tokenData is available
      try {
        const access_token = tokenData.access_token;
        console.log("Access token:", access_token);
        const response = await fetch("/api/userinfo", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ access_token }),
        });

        const data = await response.json();

        if (!response.ok) {
          setUserInfoError(data.message || "Invalid or missing API data");
        } else {
          setUserInfo(data);
        }
      } catch (error) {
        console.error("Error requesting user info:", error);
        setUserInfoError(String(error));
      }
    };

    getUserInfo();
  }, [tokenData]); // Runs when tokenData is updated

  return (
    <div>
      {!tokenData && authError && <p className="text-red-500">{authError}</p>}

      {tokenData ? (
        <div>
          <p>Access Token: {tokenData.access_token}</p>
          <p>ID Token: {tokenData.id_token}</p>
          <p>Refresh Token: {tokenData.refresh_token}</p>
        </div>
      ) : (
        !authError && <p>Exchanging code for token...</p>
      )}

      {!userInfo && userInfoError && (
        <p className="text-red-500">{userInfoError}</p>
      )}

      {userInfo ? (
        <div>
          <p>userInfo: {JSON.stringify(userInfo)}</p>
        </div>
      ) : (
        !userInfoError && <p>Requesting user info...</p>
      )}
    </div>
  );
};

export default Callback;
