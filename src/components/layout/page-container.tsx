import { cn } from "@/lib/utils";
import React from "react";

export default function PageContainer({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"div">) {
  return (
    <div
      className={cn(
        "flex flex-col pt-24 pl-4 pr-4 pb-4  max-w-screen-lg mx-auto",
        className
      )}
      {...props}
    />
  );
}
