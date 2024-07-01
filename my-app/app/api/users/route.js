import { users } from "@/app/utils/db";
import { NextResponse } from "next/server";

export function GET() {
  return NextResponse.json({ data: users });
}
