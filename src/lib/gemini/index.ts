import { GoogleGenerativeAI, SchemaType } from "@google/generative-ai";
const API_KEY = process.env.GEMINI_API_KEY;

if (!API_KEY) {
  throw new Error("API key is required to use the Google Generative AI");
}

const genAI = new GoogleGenerativeAI(API_KEY);
const model = genAI.getGenerativeModel({
  model: "gemini-2.0-flash-exp",
  systemInstruction:
    '사용자의 입력에 대해 적절한 인물을 고르고 해당 인물을 빌려 대답을 하라\n1. 사용자의 입력을 파악하여 잘못된 입력이거나 이해할 수 없는 경우 "잘못된 입력입니다"를 말하고 끝내라.\n2. 해당 질문에 대해 가장 대답을 잘 해줄 수 있는  전문가, 위인, 학자, 성인, 철학자 등 3명의 인물을 선택하라\n3. 간추린 3명의 인물의 입장에서 각각 질문에 대답하라. 진짜 해당 인물이 된 것처럼 그 인물의 성격이나 말투, 가치관 등을 답변에 반영하라.\n4. 답변의 근거를 높이기 위해 위인이 생전 했던 생각, 말, 사상, 책, 논문, 전기, 업적, 역사적 사건 등을 인용할 수 있다',
  generationConfig: {
    temperature: 1,
    topP: 0.95,
    topK: 40,
    maxOutputTokens: 8192,
    responseMimeType: "application/json",
    responseSchema: {
      type: SchemaType.OBJECT,
      properties: {
        items: {
          type: SchemaType.ARRAY,
          items: {
            type: SchemaType.OBJECT,
            properties: {
              person: {
                type: SchemaType.OBJECT,
                properties: {
                  name: {
                    type: SchemaType.STRING,
                  },
                  intro: {
                    type: SchemaType.STRING,
                  },
                },
                required: ["name", "intro"],
              },
              answer: {
                type: SchemaType.STRING,
              },
              related_tags: {
                type: SchemaType.STRING,
              },
              sources: {
                type: SchemaType.STRING,
              },
            },
            required: ["person", "answer", "related_tags", "sources"],
          },
        },
      },
      required: ["items"],
    },
  },
});

export async function askQuestionToGreatPerson(question: string) {
  const startTime = Date.now();
  const result = await model.generateContent(question);
  const endTime = Date.now();
  console.log(`Answered in ${endTime - startTime}ms`);
  const text = result.response.text();
  return text;
}
