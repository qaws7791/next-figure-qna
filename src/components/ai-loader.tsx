"use client";
import { TextShimmer } from "@/components/ui/text-shimmer";
import React, { useEffect, useState } from "react";
const messages = [
  "질문에 적합한 위인을 찾고 있습니다... 지혜로운 인물이 곧 나타날 겁니다!",
  "위인이 질문을 진지하게 검토하며 깊은 고민에 빠졌습니다...",
  "위인이 최종적으로 답변을 정리하고 있습니다... 조금만 기다려 주세요!",
];

export default function AILoader() {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setStep((prevStep) =>
        prevStep + 1 < messages.length ? prevStep + 1 : prevStep
      );
    }, 3000);

    return () => clearInterval(interval); // 컴포넌트 언마운트 시 클리어
  }, []);

  const translateY = -((step * 100) / messages.length);

  return (
    <div className="text-gray-800 h-12 overflow-hidden w-full">
      <div
        style={{
          transform: `translateY(${translateY}%)`,
          transition: "transform 2s",
        }}
      >
        {messages.map((message, index) => (
          <div
            className="text-lg text-center h-12 flex items-center justify-center"
            key={index}
          >
            <TextShimmer className="font-medium" duration={4}>
              {message}
            </TextShimmer>
          </div>
        ))}
      </div>
    </div>
  );
}
