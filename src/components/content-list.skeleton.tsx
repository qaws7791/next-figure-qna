import { Skeleton } from "@/components/ui/skeleton";
import { range } from "@/lib/utils";

export default function ContentListSkeleton() {
  return (
    <section>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
        {range(1, 18).map((item) => (
          <Skeleton
            className="p-4 border border-zinc-200 rounded-2xl hover:shadow-md transition-shadow min-h-[162px]"
            key={item}
          ></Skeleton>
        ))}
      </div>
    </section>
  );
}
