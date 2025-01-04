import ContentsClient from "@/app/contents/contents-client";
import PageContainer from "@/components/layout/page-container";

import React from "react";

export default function ContentsPage() {
  return (
    <PageContainer>
      <ContentsClient />
    </PageContainer>
  );
}
