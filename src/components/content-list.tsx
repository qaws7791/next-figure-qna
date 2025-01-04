"use client";
import { useContentInfiniteQuery } from "@/hooks/queries/contents";
import Link from "next/link";

export default function ContentList() {
  const { data } = useContentInfiniteQuery();

  const allItems = data?.pages.flat();

  return (
    <section>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
        {allItems.map((item) => (
          <Link
            href={`/contents?id=${item.id}`}
            className="p-4 border border-zinc-200 rounded-2xl hover:shadow-md transition-shadow min-h-[162px]"
            key={item.id}
          >
            <p className="text-2xl font-medium line-clamp-5 md:line-clamp-4">
              {item.question}
            </p>

            <time className="sr-only">
              {new Date(item.created_at).toLocaleDateString()}
            </time>
          </Link>
        ))}
      </div>
    </section>
  );
}
