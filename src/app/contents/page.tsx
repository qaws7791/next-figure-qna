import ContentsClient from "@/app/contents/contents-client";
import PageContainer from "@/components/layout/page-container";

import React, { Suspense } from "react";

export default function ContentsPage() {
  return (
    <PageContainer>
      <Suspense fallback={<div />}>
        <ContentsClient />
      </Suspense>
    </PageContainer>
  );
}
