import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import prisma from "@/lib/prisma";

export async function POST(req: Request) {
  const session = await getServerSession();
  const userId = (session?.user as { id?: string } | undefined)?.id;
  if (!userId) return NextResponse.json({ error: "Sign in first" }, { status: 401 });

  const { ethnicityFilter } = await req.json().catch(() => ({}));
  const filter = Array.isArray(ethnicityFilter) ? ethnicityFilter.filter((e) => typeof e === "string").slice(0, 20) : [];

  const profiles = await prisma.user.findMany({
    where: {
      id: { not: userId },
      ...(filter.length ? { ethnicity: { in: filter }, showEthnicity: true } : {}),
    },
    // public fields only: no role, no createdAt
    select: { id: true, name: true, age: true, image: true, ethnicity: true, showEthnicity: true },
    take: 20,
  });

  // people who chose to hide their ethnicity don't have it sent to anyone
  return NextResponse.json(profiles.map((p) => (p.showEthnicity ? p : { ...p, ethnicity: null })));
}
