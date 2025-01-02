"use client";
import { askQuestion } from "@/api/contents";
import AILoader from "@/components/ai-loader";
import { Badge } from "@/components/ui/badge";
import { MicIcon } from "lucide-react";
import { useState } from "react";

type ResponseType = {
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
        <label htmlFor="question" className="sr-only">
          질문
        </label>
        <input
          name="question"
          id="question"
          type="text"
          className="p-4 block w-full border border-gray-200 rounded-full text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
          placeholder="질문을 입력하세요"
          disabled={loading}
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
        />
        <div className="absolute top-1/2 end-2 -translate-y-1/2">
          <button
            type="button"
            className="size-10 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent text-gray-500 hover:text-gray-800 focus:outline-none focus:text-gray-800 bg-gray-100 disabled:opacity-50 disabled:pointer-events-none"
            disabled={loading}
            aria-label="음성 입력"
          >
            <MicIcon className="shrink-0 size-4" />
          </button>
        </div>
      </form>
      {loading ? <AILoader /> : null}
      {response ? (
        <div>
          <h2 className="text-2xl font-semibold text-gray-800 text-center my-8">
            &quot;{response?.question}&quot;
          </h2>
          <section className="flex flex-col gap-4">
            {response?.answers.items.map((item, index) => (
              <div key={index} className="border p-4 rounded-3xl">
                <div className="">
                  <h3 className="text-xl font-semibold">{item.person.name}</h3>
                  <p className="text-sm text-gray-500">{item.person.intro}</p>
                </div>
                <p className="text-lg font-medium mt-4">
                  &quot;{item.answer}&quot;
                </p>
                <div className="text-sm text-gray-500 mt-2">{item.sources}</div>
                <ul className="flex flex-wrap gap-x-2 gap-y-2 mt-4 items-center">
                  {item.related_tags.split(", ").map((tag, index) => (
                    <li key={index} className="">
                      <Badge variant="secondary">{tag}</Badge>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </section>
        </div>
      ) : (
        <div className="mt-8">
          <div className="text-center text-gray-600">
            질문을 입력하고 위인으로부터 답변을 받아보세요.
          </div>
        </div>
      )}
    </div>
  );
}
