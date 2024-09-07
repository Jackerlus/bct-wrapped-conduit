import { NextResponse } from "next/server";

const clientID = process.env.RIOT_CLIENT_ID;
const clientSecret = process.env.RIOT_CLIENT_SECRET;

const appBaseUrl = "http://local.bct.com";
const appCallbackUrl = `${appBaseUrl}/login/callback`;

const tokenUrl = "https://auth.riotgames.com/token";

export async function POST(req: Request) {
  try {
    const { code } = await req.json();

    if (!code) {
      return NextResponse.json(
        { message: "Authorization code is missing" },
        { status: 400 },
      );
    }

    const credentials = Buffer.from(`${clientID}:${clientSecret}`).toString(
      "base64",
    );

    const response = await fetch(tokenUrl, {
      method: "POST",
      headers: {
        Authorization: `Basic ${credentials}`,
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams({
        grant_type: "authorization_code",
        code: code,
        redirect_uri: appCallbackUrl,
      }).toString(),
    });

    if (!response.ok) {
      const errorResponse = await response.json();
      return NextResponse.json(
        {
          message: "Failed to exchange authorization code for token",
          error: errorResponse,
        },
        { status: response.status },
      );
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error("Error exchanging code for token:", error);
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 },
    );
  }
}
