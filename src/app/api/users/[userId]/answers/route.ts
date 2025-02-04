import { getContentByUser } from "@/lib/db/queries/contents";
import { NextRequest } from "next/server";

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ userId: string }> }
) {
  const searchParams = request.nextUrl.searchParams;
  const userId = (await params).userId;
  const page = Number(searchParams.get("page")) || 1;
  const limit = Number(searchParams.get("limit")) || 10;

  if (!userId) {
    return new Response(JSON.stringify({ error: "Not found" }), {
      status: 404,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }

  const data = await getContentByUser({ userId, page, limit });

  return new Response(JSON.stringify(data), {
    headers: {
      "Content-Type": "application/json",
    },
  });
}
