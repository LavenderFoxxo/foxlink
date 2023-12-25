import { NextRequest, NextResponse } from "next/server";
import { headers } from "next/headers";
import { customAlphabet } from "nanoid";
import { prisma } from "@/util/db";
import { NextApiRequest } from "next";

const characters =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
const getHash = customAlphabet(characters, 4);

async function checkIfExisting(hash: string) {
  const existingCheck = await prisma.link.findUnique({
    where: {
      uid: hash,
    },
  });

  return existingCheck;
}

export async function POST(req: NextRequest) {
  try {
    const requestHeaders = headers();
    if (requestHeaders.get("authorization") !== process.env.API_KEY!)
      return NextResponse.json(
        { message: "Unauthorized", status: 401 },
        { status: 401 }
      );

    const link = req.nextUrl.searchParams.get("link")

    if (!link) 
    return NextResponse.json(
      { message: "Malformed Request", status: 400 },
      { status: 400 }
    );

    let hash = getHash();
    while (await checkIfExisting(hash)) {
      hash = getHash();
    }

    await prisma.link.create({
      data: {
        shortUrl: `${process.env.HOST}/${hash}`,
        uid: hash,
        link,
      },
    });

    return NextResponse.json({
      message: "OK",
      data: { shortUrl: `${process.env.HOST}/${hash}`, uid: hash, link },
    });
  } catch (e) {
    console.log(e)
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
