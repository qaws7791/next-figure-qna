"use client";
import { askQuestion } from "@/api/contents";
import AILoader from "@/components/ai-loader";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { ArrowRightIcon, LoaderIcon, SparklesIcon } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

type ResponseType = {
  id: number;
};

export default function AIForm() {
  const [inputText, setInputText] = useState("");
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState<ResponseType | null>(null);
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      setLoading(true);
      const data = await askQuestion({ inputText });
      setResponse(data);
    } catch (error) {
      alert(`에러가 발생했습니다: ${error}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <div className="relative"></div>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-start relative max-w-2xl mx-auto"
      >
        <label
          htmlFor="question"
          className="text-lg font-medium text-gray-600 my-4 w-full text-center"
        >
          질문을 입력하고 위인으로부터 답변을 받아보세요.
        </label>
        <Textarea
          name="question"
          id="question"
          placeholder="위인에 할 질문을 입력하세요. 예시) 신의 존재를 어떻게 증명할 수 있나요?"
          disabled={loading}
          value={inputText}
          maxLength={500}
          onChange={(e) => setInputText(e.target.value)}
        />
        <div className="flex flex-col w-full">
          {response ? (
            <Button asChild size="lg" variant="destructive">
              <Link href={`/contents?id=${response.id}`}>
                답변 확인하기
                <ArrowRightIcon className="shrink-0 size-4" />
              </Link>
            </Button>
          ) : (
            <Button size="lg" type="submit" className="mt-4" disabled={loading}>
              {loading ? "답변을 기다리는 중..." : "질문하기"}
              {loading ? (
                <LoaderIcon className="shrink-0 size-4 animate-spin" />
              ) : (
                <SparklesIcon className="shrink-0 size-4" />
              )}
            </Button>
          )}
        </div>
        {/* <div className="absolute top-1/2 end-2 -translate-y-1/2">
          <button
            type="button"
            className="size-10 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent text-gray-500 hover:text-gray-800 focus:outline-none focus:text-gray-800 bg-gray-100 disabled:opacity-50 disabled:pointer-events-none"
            disabled={loading}
            aria-label="음성 입력"
          >
            <MicIcon className="shrink-0 size-4" />
          </button>
        </div> */}
      </form>
      {loading ? <AILoader /> : null}
    </div>
  );
}
