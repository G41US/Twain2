import prisma from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  // Who you are comes from your sign-in, never from the request body.
  const session = await getServerSession();
  const id = (session?.user as { id?: string } | undefined)?.id;
  if (!id) return NextResponse.json({ error: "Sign in first" }, { status: 401 });

  const body = await req.json().catch(() => null);
  const name = typeof body?.name === "string" ? body.name.trim().slice(0, 60) : undefined;
  const age = Number(body?.age);
  const ethnicity = typeof body?.ethnicity === "string" ? body.ethnicity.trim().slice(0, 50) : undefined;
  if (!Number.isInteger(age) || age < 18 || age > 120) return NextResponse.json({ error: "Age must be 18-120" }, { status: 400 });

  // Only these fields; role and anything else in the body are ignored.
  await prisma.user.update({
    where: { id },
    data: { name, age, ethnicity, showEthnicity: body?.showEthnicity === true },
  });

  return NextResponse.json({ ok: true });
}
