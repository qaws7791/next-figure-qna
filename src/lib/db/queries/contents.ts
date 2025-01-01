import { db } from "@/lib/db";
import { contents } from "@/lib/db/schema";
import { eq } from "drizzle-orm";

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
