import { revalidateTag } from "next/cache";
import { NextResponse } from "next/server";

export function GET() {
  revalidateTag("postupdate");
  return NextResponse.json({ message: "Revalidated cache" });
}
