"use client";
import ContentList from "@/components/content-list";
import { useContentInfiniteQuery } from "@/hooks/queries/contents";

export default function CommonContentList() {
  const { data } = useContentInfiniteQuery();

  const allItems = data?.pages.flat();
  return <ContentList data={allItems} />;
}
