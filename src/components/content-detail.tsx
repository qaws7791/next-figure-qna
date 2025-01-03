"use client";
import { Badge } from "@/components/ui/badge";
import { useContentQuery } from "@/hooks/queries/contents";
import React from "react";

export default function ContentDetail({ id }: { id: string }) {
  const { data } = useContentQuery({ id });
  return (
    <div>
      <h1 className="text-2xl font-semibold text-gray-800 text-center my-8">
        &quot;{data?.question}&quot;
      </h1>
      <section className="flex flex-col gap-4">
        {data?.answers.items.map((item, index) => (
          <div key={index} className="border p-4 rounded-3xl">
            <div className="">
              <h3 className="text-xl font-semibold">{item.person.name}</h3>
              <p className="text-sm text-gray-500">{item.person.intro}</p>
            </div>
            <p className="text-lg font-medium mt-4">
              &quot;{item.answer}&quot;
            </p>
            <div className="text-sm text-gray-500 mt-2">{item.sources}</div>
            <ul className="flex flex-wrap gap-x-2 gap-y-2 mt-4 items-center">
              {item.related_tags.split(", ").map((tag, index) => (
                <li key={index} className="">
                  <Badge variant="secondary">{tag}</Badge>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </section>
    </div>
  );
}
