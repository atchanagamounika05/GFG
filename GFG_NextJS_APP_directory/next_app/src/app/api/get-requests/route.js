/* export async function GET() {
  return new Response("Get successfullly", { status: 200 });
} */

import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({ message: "Get request done!" });
}
