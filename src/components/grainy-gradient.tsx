import { cn } from "@/lib/utils";

export function GrainyGradient(props: { from: string; to: string }) {
  return (
    <div className="isolate relative w-full h-full">
      <div
        className="noise h-full"
        style={{
          background:
            "linear-gradient(20deg, rebeccapurple, transparent), url(/noise.svg);",
          filter: "contrast(1000%) brightness(300%)",
        }}
      ></div>
      <div
        className={cn(
          "absolute top-0 w-full h-full mix-blend-multiply",
          props.from
        )}
      ></div>
    </div>
  );
}
