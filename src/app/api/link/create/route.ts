import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import { headers } from "next/headers";
import { customAlphabet } from "nanoid";

const prisma = new PrismaClient();
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
  const requestHeaders = headers();
  if (requestHeaders.get("authorization") !== process.env.API_KEY!)
    return NextResponse.json(
      { message: "Unauthorized", status: 401 },
      { status: 401 }
    );

  const reqBody = await req.json();

  if (typeof reqBody.link == undefined)
    return NextResponse.json(
      { message: "Malformed Request", status: 400 },
      { status: 400 }
    );

  const link = reqBody.link!;

  try {
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
    return NextResponse.json({
      message: "Error",
      error: e,
      status: 500
    }, { status: 500 })
  }
}
