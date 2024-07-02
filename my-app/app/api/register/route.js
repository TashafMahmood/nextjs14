import { NextResponse } from "next/server";

export async function POST(req, res) {
  const { name, age, email } = await req.json();

  if (!name || !age || !email) {
    return NextResponse.json({
      error: "All fields are mandatory",
      ok: false
    },{status:400});
  }
  return NextResponse.json({
    message: "User registered successfully!",
    ok: true
  },{status:201});
}
