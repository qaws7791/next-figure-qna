import { getContent, getContents } from "@/api/contents";
import {
  useSuspenseInfiniteQuery,
  useSuspenseQuery,
} from "@tanstack/react-query";

export function useContentInfiniteQuery() {
  return useSuspenseInfiniteQuery({
    queryKey: ["contents"],
    queryFn: async ({ pageParam = 1 }) => {
      return getContents({ page: pageParam, limit: 20 });
    },
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.length === 20 ? allPages.length + 1 : undefined;
    },
    initialPageParam: 1,
  });
}

export function useContentQuery({ id }: { id: string }) {
  return useSuspenseQuery({
    queryKey: ["contents", id],
    queryFn: async () => {
      return getContent({ id });
    },
  });
}
