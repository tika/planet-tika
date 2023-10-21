"use client";

import { cn } from "@/lib/utils";
import { Tag } from "./tag";

export function ProjectPreview({ parts }: { parts: string[] }) {
  // Take each line and render our preview
  return (
    <div
      className={cn(
        "border rounded-3xl px-6 py-4 flex flex-col justify-center"
      )}
      style={{ gridColumn: `span ${parts[3]} / span ${parts[3]}` }}
    >
      <div className="flex items-center justify-between">
        <h1 className="text-lg">{parts[0]}</h1>

        <p className="font-bold text-muted-foreground uppercase text-sm">
          {parts[2]}
        </p>
      </div>

      <div className="flex items-center justify-between gap-2">
        <p className="min-h-[2em]">{parts[1]}</p>
        <div className="flex gap-2 items-center">
          {parts[4].split(", ").map((it, i) => (
            <Tag text={it} key={i} />
          ))}
        </div>
      </div>
    </div>
  );
}
