import { NextResponse } from "next/server";

const url = "https://auth.riotgames.com/userinfo";

export async function POST(req: Request) {
  try {
    const { access_token } = await req.json();
    if (!access_token) {
      return NextResponse.json(
        { message: "Access token is missing" },
        { status: 400 },
      );
    }

    const response = await fetch(url, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    });

    if (!response.ok) {
      const errorResponse = await response.json();
      return NextResponse.json(
        {
          message: "Failed to get user info",
          error: errorResponse,
        },
        { status: response.status },
      );
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error("Error getting user info:", error);
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 },
    );
  }
}
