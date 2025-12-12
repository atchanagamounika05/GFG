import { NextResponse } from "next/server";
import { rateLimit } from "../../../utils/rateLimit";

export async function GET(request) {
  const ip = request?.ip ?? request.headers.get("X-Forwarded-For") ?? "unknown";
  console.log(ip, "ip");
  const { limit, remaining } = await rateLimit.limit(ip);
  console.log("remaining", remaining);
  if (remaining === 0)
    return NextResponse.json(
      { message: "Too many requests, limit exceeded" },
      { status: 429 }
    );
  return NextResponse.json({ message: "Get Successful" });
}
