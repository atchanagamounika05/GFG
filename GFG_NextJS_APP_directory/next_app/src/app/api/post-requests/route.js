import { NextRequest, NextResponse } from "next/server";

const users = [
  {
    userId: 1,
    name: "Akaza",
  },
  {
    userId: 2,
    name: "Koyuki",
  },
  {
    userId: 3,
    name: "Tanjiro",
  },
];

export async function POST(request) {
  console.log(request);
  const { id } = await request.json();
  console.log(id, "id");
  try {
    const user = users.find((user) => user.userId === parseInt(id));
    if (!user) {
      throw new Error("User not Found");
    }
    return NextResponse.json(user);
  } catch (err) {
    console.log("err", err);
    return NextResponse.json({ error: err.message }, { status: 404 });
  }
}
