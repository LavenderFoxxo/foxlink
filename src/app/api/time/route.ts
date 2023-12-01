import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    message: "OK",
    date: new Date().toLocaleDateString("en-US", {
      timeZone: "America/Los_Angeles",
      month: "long",
      day: "numeric",
      year: "numeric",
    }),
    time: new Date().toLocaleTimeString("en-US", {
      timeZone: "America/Los_Angeles",
    }),
  });
}
