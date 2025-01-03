import httpClient from "@/api/http-client";

type AskQuestionResponseType = {
  id: number;
};

type ContentResponseType = {
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

type ContentsResponseType = {
  id: number;
  userId: string;
  question: string;
  created_at: string;
}[];

export async function askQuestion({ inputText }: { inputText: string }) {
  const response = await httpClient.post("ask-question", {
    method: "POST",
    body: JSON.stringify({ question: inputText }),
  });
  if (!response.ok) {
    throw new Error("API 요청이 실패했습니다.");
  }
  const data = (await response.json()) as AskQuestionResponseType;
  return data;
}

export async function getContents({
  page = 1,
  limit = 10,
}: {
  page?: number;
  limit?: number;
}) {
  const searchParams = new URLSearchParams();
  searchParams.set("page", String(page));
  searchParams.set("limit", String(limit));
  const response = await httpClient.get(`answers?${searchParams.toString()}`);
  if (!response.ok) {
    throw new Error("API 요청이 실패했습니다.");
  }
  const data = (await response.json()) as ContentsResponseType;
  return data;
}

export async function getContent({ id }: { id: string }) {
  const response = await httpClient.get(`answers/${id}`);
  if (!response.ok) {
    throw new Error("API 요청이 실패했습니다.");
  }
  const data = (await response.json()) as ContentResponseType;
  return data;
}
