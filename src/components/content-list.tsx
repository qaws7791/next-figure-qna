"use client";
import Link from "next/link";

interface ContentListProps {
  data: Array<{
    id: number;
    question: string;
    created_at: string;
  }>;
}

export default function ContentList({ data }: ContentListProps) {
  return (
    <section>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
        {data.map((item) => (
          <Link
            href={`/contents?id=${item.id}`}
            className="p-4 border border-zinc-200 rounded-2xl hover:shadow-md transition-shadow min-h-[169px]"
            key={item.id}
          >
            <p className="text-lg font-medium line-clamp-6 leading-tight md:line-clamp-4">
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
