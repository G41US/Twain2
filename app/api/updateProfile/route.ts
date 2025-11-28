import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const data = await req.json();

  await prisma.user.update({
    where: { id: data.id },
    data,
  });

  return NextResponse.json({ ok: true });
}
