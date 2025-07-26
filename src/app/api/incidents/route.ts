import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET(req: NextRequest) {
  const resolvedParam = req.nextUrl.searchParams.get("resolved");
  const resolved = resolvedParam === "true";

  const data = await prisma.incident.findMany({
    where: { resolved },
    include: { camera: true },
    orderBy: { tsStart: "desc" },
  });

  return NextResponse.json(data);
}
