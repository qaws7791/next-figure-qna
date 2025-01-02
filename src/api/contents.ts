type AskQuestionResponseType = {
  id: number;
  userId: string;
  question: string;
  answers: {
    items: Array<{
      answer: string;
      person: {
        intro: string;
        name: string;
      };
      related_tags: string;
      sources: string;
    }>;
  };
  created_at: string;
};

export async function askQuestion({ inputText }: { inputText: string }) {
  const response = await fetch("/api/ask-question", {
    method: "POST",
    body: JSON.stringify({ question: inputText }),
  });
  if (!response.ok) {
    throw new Error("API 요청이 실패했습니다.");
  }
  const data = (await response.json()) as AskQuestionResponseType;
  return data;
}
