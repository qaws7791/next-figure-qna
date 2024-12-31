"use client";
import AILoader from "@/components/ai-loader";
import { Badge } from "@/components/ui/badge";
import { MicIcon } from "lucide-react";
import { useState } from "react";

type ResponseType = {
  question: string;
  answers: {
    response: {
      items: {
        person: {
          name: string;
          introduction: string;
        };
        answer: string;
        related_tags: string[];
        source: string;
      }[];
    };
  };
};

const mockResponse: ResponseType = {
  question: "이슬람이 왜 단시간에 중동 전역에 확산되었을까요?",
  answers: {
    response: {
      items: [
        {
          answer:
            "이슬람교가 단시간에 중동 전역에 빠르게 확산된 것은 여러 요인이 복합적으로 작용한 결과입니다. 첫째, 당시 아랍 사회의 정치적, 사회적 상황이 중요한 역할을 했습니다. 7세기 초, 아랍 반도는 여러 부족으로 나뉘어 있었고, 비잔틴 제국과 사산 제국이라는 두 강대국의 압력에 시달리고 있었습니다. 이러한 상황 속에서 무함마드가 제시한 유일신 사상은 부족 간의 갈등을 해소하고 아랍인들의 정체성을 통합하는 강력한 구심점이 되었습니다. 둘째, 이슬람교의 간결하고 명확한 교리와 실천 덕분입니다. 복잡한 신학적 논쟁을 요구하지 않고, ‘알라 외에는 신이 없다’는 단순한 신앙고백과 하루 다섯 번의 기도, 자선, 라마단 금식, 메카 순례 등 일상생활에서 실천 가능한 의례는 사람들에게 쉽게 받아들여졌습니다. 셋째, 이슬람교의 확산은 정복 전쟁과도 밀접한 관련이 있습니다. 아랍 군대는 뛰어난 군사력과 종교적 열정을 바탕으로 빠르게 영토를 확장해 나갔습니다. 그러나 이슬람은 점령지의 사람들에게 강제로 개종을 강요하지 않았습니다. 오히려 이슬람의 관용 정책은 사람들의 마음을 얻었고, 자발적인 개종을 이끌어냈습니다. 마지막으로, 이슬람 상인들의 역할도 무시할 수 없습니다. 상인들은 교역로를 따라 이슬람의 가치관과 문화를 전파했고, 이는 이슬람 확산에 큰 영향을 미쳤습니다. 이처럼 이슬람교의 확산은 종교적 메시지의 매력, 당시 사회적 필요, 군사적 성공, 문화적 교류 등 여러 요소들이 복합적으로 작용한 결과입니다.",
          person: {
            introduction:
              "무함마드는 이슬람교의 창시자이자 마지막 예언자로, 이슬람교의 경전인 코란을 통해 알라의 계시를 전달했다고 알려져 있습니다. 그는 아라비아 반도에서 태어나 메카에서 활동했으며, 이슬람 공동체를 창설하고 중동 지역을 통일하는 데 중요한 역할을 했습니다.",
            name: "무함마드",
          },
          related_tags: ["이슬람", "종교", "역사", "중동", "무함마드"],
          source: "코란, 무함마드 전기",
        },
        {
          answer:
            "이슬람이 짧은 시간에 중동 전역에 퍼져나간 과정은 꽤나 복합적인 현상입니다. 우선 정치적 측면에서, 당시 중동 지역은 비잔틴 제국과 사산 제국의 오랜 전쟁으로 인해 정치적으로 불안정했고, 여러 부족들이 분열된 상황이었습니다. 이러한 상황에서 이슬람은 아랍인들의 연대감을 높이는 효과적인 역할을 했습니다. 둘째로, 이슬람은 종교적 측면에서 단순하고 실천적인 교리를 제시했습니다. 이슬람의 핵심 가르침인 ‘알라 외에 신은 없다’는 유일신 사상은 당시 다신교 사회에 살고 있던 사람들에게 강력하게 어필했습니다. 또한, 매일 5번의 기도, 자선, 라마단 금식, 메카 순례 등 구체적인 실천 지침은 사람들에게 신앙생활을 쉽게 하도록 도왔습니다. 셋째로, 아랍 군대의 군사적 성공은 이슬람 확산에 결정적인 역할을 했습니다. 아랍 군대는 뛰어난 군사력을 바탕으로 빠르게 영토를 확장했고, 점령지에서는 이슬람으로 개종을 강요하기보다는 세금과 복종을 요구하는 유화적인 정책을 펼쳤습니다. 넷째로, 이슬람 상인들은 상업 활동을 통해 이슬람 문화를 확산시키는 중요한 역할을 했습니다. 이들은 새로운 지역과 문화를 접촉하면서 이슬람 가치관과 생활방식을 전파했습니다. 마지막으로, 이슬람의 관용적인 태도도 이슬람 확산에 큰 영향을 미쳤습니다. 이슬람은 다른 종교인들에게도 일정한 자유를 보장했고, 이는 이슬람 세계에서 다양한 문화와 종교가 공존할 수 있는 토대가 되었습니다. 결국 이슬람 확산은 군사적, 정치적, 종교적, 상업적 요인들이 복합적으로 작용한 결과라고 할 수 있습니다.",
          person: {
            introduction:
              "이븐 할둔은 14세기 북아프리카 출신의 저명한 역사가이자 사회학자입니다. 그는 '역사서설'이라는 저서를 통해 역사와 사회 현상을 분석하고, 사회 변동과 문명의 흥망성쇠를 체계적으로 설명했습니다. 특히 그는 아랍 사회의 발전과 이슬람 문화의 확산에 대한 깊이 있는 통찰을 보여주었습니다.",
            name: "이븐 할둔",
          },
          related_tags: [
            "이슬람",
            "종교",
            "역사",
            "중동",
            "사회학",
            "이븐 할둔",
          ],
          source: "역사서설",
        },
        {
          answer:
            "이슬람의 급속한 확산은 단순한 종교적 성공 이상의 복합적인 요인들이 작용한 결과입니다. 로마 제국이 무너진 후, 중동 지역은 정치적 혼란과 사회적 불안에 시달리고 있었고, 기존의 종교들은 사람들에게 만족스러운 해답을 주지 못했습니다. 이러한 상황에서 이슬람은 명확한 유일신 사상과 평등주의를 제시했고, 이는 사람들에게 희망을 주었습니다. 이슬람의 가르침은 기존의 부족 간 갈등을 해소하고, 공동체 의식을 형성하는 데에도 기여했습니다. 이슬람은 실천적인 종교입니다. 하루에 다섯 번 기도하고, 자선을 베풀며, 라마단 기간 동안 금식하는 등의 행동은 개인의 신앙심을 강화하고, 공동체의 유대감을 높이는 역할을 합니다. 이슬람의 확산에는 무력도 사용되었습니다. 이슬람 초기 군대는 뛰어난 군사력과 종교적 열정을 바탕으로 빠르게 영토를 확장했습니다. 그러나 이슬람은 점령지 사람들에게 강제로 개종을 강요하지 않았습니다. 오히려 이슬람의 관용 정책은 사람들의 마음을 얻었고, 자발적인 개종을 이끌어냈습니다. 이슬람의 확산은 단순히 정복 전쟁의 결과가 아니라, 이슬람의 가르침이 사람들의 마음에 깊이 와닿았기 때문에 가능했습니다. 이슬람 문화는 지중해 세계와 인도양 세계를 연결하는 중요한 다리 역할을 했습니다. 이슬람 상인들은 교역로를 따라 이슬람의 가치관과 문화를 전파했고, 이는 이슬람 확산에 큰 영향을 미쳤습니다. 이슬람은 군사력, 종교적 매력, 경제적 교류, 문화적 전파 등 다양한 측면에서 강력한 영향력을 발휘했고, 이러한 요소들이 상호작용하면서 이슬람은 단시간에 중동 전역으로 빠르게 퍼져나갈 수 있었습니다.",
          person: {
            introduction:
              "아널드 토인비는 영국의 역사학자로, 인류 문명의 기원, 발전, 쇠퇴를 연구한 학자입니다. 그는 '역사의 연구'라는 저서를 통해 인류 역사를 26개의 문명으로 나누어 분석하고, 각 문명의 흥망성쇠를 설명했습니다. 토인비는 다양한 문화와 종교를 비교 연구하며, 역사 발전의 패턴을 분석하는 데 관심을 가졌습니다. 특히, 그는 이슬람 문명의 중요성을 강조하며, 이슬람이 인류 역사에 미친 영향을 깊이 있게 연구했습니다.",
            name: "아널드 토인비",
          },
          related_tags: ["이슬람", "종교", "역사", "중동", "토인비", "문명"],
          source: "역사의 연구",
        },
      ],
    },
  },
};

export default function AIForm() {
  const [inputText, setInputText] = useState("");
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState<ResponseType | null>(null);
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      setLoading(true);
      const response = await fetch("/api/ask-question", {
        method: "POST",
        body: JSON.stringify({ question: inputText }),
      });
      if (!response.ok) {
        throw new Error("API 요청이 실패했습니다.");
      }
      const data = (await response.json()) as ResponseType;
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
            {response?.answers.response.items.map((item, index) => (
              <div key={index} className="border p-4 rounded-3xl">
                <div className="">
                  <h3 className="text-xl font-semibold">{item.person.name}</h3>
                  <p className="text-sm text-gray-500">
                    {item.person.introduction}
                  </p>
                </div>
                <p className="text-lg font-medium mt-4">
                  &quot;{item.answer}&quot;
                </p>
                <div className="text-sm text-gray-500 mt-2">{item.source}</div>
                <ul className="flex flex-wrap gap-x-2 gap-y-2 mt-4 items-center">
                  {item.related_tags.map((tag, index) => (
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
