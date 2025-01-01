import { getContentById } from "@/lib/db/queries/contents";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const id = (await params).id;

  const answer = await getContentById(parseInt(id));

  if (!answer) {
    return new Response(JSON.stringify({ error: "Not found" }), {
      status: 404,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }

  return new Response(
    JSON.stringify({
      ...answer,
      answers: JSON.parse(answer.answers as string),
    }),
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
}
