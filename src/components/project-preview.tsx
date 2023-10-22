"use client";

import { cn } from "@/lib/utils";
import { Hammer } from "lucide-react";
import { DiJava } from "react-icons/di";
import {
  SiArduino,
  SiJavascript,
  SiPython,
  SiTypescript,
} from "react-icons/si";

import { Tag } from "./tag";

function getLangIcon(lang?: string) {
  switch (lang) {
    case "typescript":
      return <SiTypescript />;
    case "python":
      return <SiPython />;
    case "arduino":
      return <SiArduino />;
    case "eng":
      return <Hammer />;
    case "javascript":
      return <SiJavascript />;
    case "java":
      return <DiJava />;
  }
  return null;
}

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
        <div className="flex gap-2 items-center">
          <h1 className="text-lg">{parts[0]}</h1>
          {getLangIcon(parts[5])}
        </div>

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
