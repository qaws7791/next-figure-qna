import { getContent, getContents, getContentsByUser } from "@/api/contents";
import {
  useSuspenseInfiniteQuery,
  useSuspenseQuery,
} from "@tanstack/react-query";

export function useContentInfiniteQuery() {
  return useSuspenseInfiniteQuery({
    queryKey: ["contents"],
    queryFn: async ({ pageParam = 1 }) => {
      return getContents({ page: pageParam, limit: 18 });
    },
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.length === 18 ? allPages.length + 1 : undefined;
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

export function useUserContentInfiniteQuery({ userId }: { userId: string }) {
  return useSuspenseInfiniteQuery({
    queryKey: ["contents"],
    queryFn: async ({ pageParam = 1 }) => {
      return getContentsByUser({ page: pageParam, limit: 18, userId });
    },
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.length === 18 ? allPages.length + 1 : undefined;
    },
    initialPageParam: 1,
  });
}
