"use client";

import { cn } from "@/lib/utils";

export function ProjectPreview({ parts }: { parts: string[] }) {
  // Take each line and render our preview
  console.log(parts);
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

      <p className="min-h-[2em]">{parts[1]}</p>
    </div>
  );
}
