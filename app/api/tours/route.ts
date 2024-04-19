import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const tours = await prisma.tour.findMany({});
  return NextResponse.json(tours);
}
