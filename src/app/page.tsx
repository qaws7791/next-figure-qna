import CommonContentList from "@/app/common-content-list";
import AIForm from "@/components/ai-form";
import ContentListSkeleton from "@/components/content-list.skeleton";
import PageContainer from "@/components/layout/page-container";
import Logo from "@/components/logo";
import { Suspense } from "react";

export default function page() {
  return (
    <PageContainer>
      <hgroup className="my-20 max-w-4xl w-full text-center mx-auto">
        <Logo />

        <h1 className="text-3xl font-bold text-gray-800 sm:text-4xl">
          Figure QnA에 오신 것을 환영합니다.
        </h1>
        <p className="mt-3 text-gray-600">powered by gemini</p>
      </hgroup>

      <section className="mt-10 max-w-5xl w-full mx-auto p-4">
        <h2 className="sr-only">AI 질문 답변</h2>
        <AIForm />
      </section>

      <section className="mt-24">
        <h2 className="text-xl font-bold text-gray-800 text-center">
          최근 질문
        </h2>
        <Suspense fallback={<ContentListSkeleton />}>
          <CommonContentList />
        </Suspense>
      </section>
    </PageContainer>
  );
}
