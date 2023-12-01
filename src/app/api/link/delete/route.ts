import { NextRequest, NextResponse } from "next/server";
import { headers } from "next/headers";
import { prisma } from "@/util/db";

export async function POST(req: NextRequest) {
  try {
    const requestHeaders = headers();
    if (requestHeaders.get("authorization") !== process.env.API_KEY!)
      return NextResponse.json(
        { message: "Unauthorized", status: 401 },
        { status: 401 }
      );

    const reqBody = await req.json();

    if (typeof reqBody.url == undefined)
      return NextResponse.json(
        { message: "Malformed Request", status: 400 },
        { status: 400 }
      );

    const uid = reqBody.uid;

    const existingLink = await prisma.link.findUnique({
      where: {
        uid,
      },
    });

    if (!existingLink)
      return NextResponse.json(
        { message: "Link does not exist.", status: 400 },
        { status: 400 }
      );

    await prisma.link.delete({
      where: {
        uid,
      },
    });

    return NextResponse.json({ message: "OK", status: 200 }, { status: 200 });
  } catch (e) {
    return NextResponse.json(
      {
        message: "Error",
        error: e,
        status: 500,
      },
      { status: 500 }
    );
  }
}
