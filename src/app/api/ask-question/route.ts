import { askQuestionToGreatPerson } from "@/lib/gemini";
import { NextRequest } from "next/server";

export async function POST(request: NextRequest) {
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

  const response = {
    question: question,
    answers: JSON.parse(result),
  };

  return new Response(JSON.stringify(response), {
    headers: {
      "Content-Type": "application/json",
    },
  });
}
