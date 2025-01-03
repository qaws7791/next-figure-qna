import { auth } from "@/lib/auth";
import { createContent } from "@/lib/db/queries/contents";
import { askQuestionToGreatPerson } from "@/lib/gemini";

export const POST = auth(async function POST(request) {
  const session = request.auth;
  const userId = session?.user?.id;
  if (!session || !userId) {
    return new Response(JSON.stringify({ error: "로그인이 필요합니다." }), {
      status: 401,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }

  const res = await request.json();
  const question = res.question;

  if (!question) {
    return new Response(JSON.stringify({ error: "질문을 입력해주세요." }), {
      status: 400,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }

  const result = await askQuestionToGreatPerson(question);

  // insert to db
  const content = await createContent({
    userId: userId,
    question: question,
    answers: result,
  });

  return new Response(
    JSON.stringify({
      id: content.id,
    }),
    {
      status: 201,
      headers: {
        "Content-Type": "application/json",
        location: `/api/contents/${content.id}`,
      },
    }
  );
});
