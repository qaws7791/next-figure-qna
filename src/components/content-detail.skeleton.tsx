import { Skeleton } from "@/components/ui/skeleton";
import { range } from "@/lib/utils";
import React from "react";

export default function ContentDetailSkeleton() {
  return (
    <div>
      <div className="flex justify-center gap-4">
        <Skeleton className="h-8 my-8 w-full max-w-[360px]" />
      </div>
      <section className="flex flex-col gap-4">
        {range(1, 3).map((index) => (
          <div key={index} className="border p-4 rounded-3xl">
            <div>
              <Skeleton className="h-6 w-24" />
              <Skeleton className="h-4 w-32 mt-2" />
            </div>
            <Skeleton className="h-[240px] mt-4 md:h-[140px]" />
            <Skeleton className="h-5 w-24 mt-2" />
            <ul className="flex flex-wrap gap-x-2 gap-y-2 mt-4 items-center">
              {range(1, 6).map((tag, index) => (
                <li key={index} className="">
                  <Skeleton className="h-[26px] w-[60px]" />
                </li>
              ))}
            </ul>
          </div>
        ))}
      </section>
    </div>
  );
}
