import { db } from "@/db";
import { activities } from "@/db/schema";

export async function GET(){
    const all = await db.select().from(activities);
    return Response.json(all);
}

export async function POST(req: Request) {
  const body = await req.json();
  const result = await db.insert(activities).values(body).returning();
  return Response.json(result[0]);
}