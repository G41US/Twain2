import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function POST(req: Request) {
  const { userId, ethnicityFilter } = await req.json();

  const profiles = await prisma.user.findMany({
    where: {
      id: { not: userId },
      ...(ethnicityFilter?.length
        ? {
            ethnicity: { in: ethnicityFilter },
            showEthnicity: true,
          }
        : {}),
    },
    take: 20,
  });

  return NextResponse.json(profiles);
}
