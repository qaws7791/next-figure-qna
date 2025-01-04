"use client";
import ContentDetail from "@/components/content-detail";
import ContentDetailSkeleton from "@/components/content-detail.skeleton";
import { useSearchParams } from "next/navigation";
import React, { Suspense } from "react";

export default function ContentsClient() {
  const searchParams = useSearchParams();
  const id = searchParams.get("id");

  if (!id) {
    return <div>잘못된 접근입니다.</div>;
  }

  return (
    <Suspense fallback={<ContentDetailSkeleton />}>
      <ContentDetail id={id} />
    </Suspense>
  );
}
