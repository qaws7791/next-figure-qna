import AIForm from "@/components/ai-form";
import Logo from "@/components/logo";

export default function page() {
  return (
    <div className="flex flex-col pb-6 mt-20">
      <div className="h-full flex flex-col justify-center mt-20">
        <div className="my-20 max-w-4xl w-full text-center mx-auto">
          <Logo />

          <h1 className="text-3xl font-bold text-gray-800 sm:text-4xl">
            Figure QnA에 오신 것을 환영합니다.
          </h1>
          <p className="mt-3 text-gray-600">powered by gemini</p>
        </div>

        <div className="mt-10 max-w-5xl w-full mx-auto p-4">
          <AIForm />
        </div>
      </div>
    </div>
  );
}
