import { db } from "@/lib/db";
import { contents } from "@/lib/db/schema";
import { count, desc, eq } from "drizzle-orm";

export async function createContent({
  userId,
  question,
  answers,
}: {
  userId: string;
  question: string;
  answers: string;
}) {
  const result = await db
    .insert(contents)
    .values({
      userId,
      question,
      answers,
    })
    .returning();

  return result[0];
}

export async function getContentById(id: number) {
  return db.select().from(contents).where(eq(contents.id, id)).get();
}

export async function getContents({
  page = 1,
  limit = 10,
}: {
  page?: number;
  limit?: number;
}) {
  return db
    .select({
      id: contents.id,
      userId: contents.userId,
      question: contents.question,
      created_at: contents.created_at,
    })
    .from(contents)
    .orderBy(desc(contents.created_at))
    .limit(limit)
    .offset((page - 1) * limit);
}

export async function getContentByUser({
  page = 1,
  limit = 10,
  userId,
}: {
  page?: number;
  limit?: number;
  userId: string;
}) {
  return db
    .select({
      id: contents.id,
      userId: contents.userId,
      question: contents.question,
      created_at: contents.created_at,
    })
    .from(contents)
    .where(eq(contents.userId, userId))
    .orderBy(desc(contents.created_at))
    .limit(limit)
    .offset((page - 1) * limit);
}

export async function getCountCountByUser(userId: string) {
  const result = await db
    .select({
      count: count(),
    })
    .from(contents)
    .where(eq(contents.userId, userId));

  return result[0].count;
}
