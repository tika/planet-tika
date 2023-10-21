import { getColourFromString } from "@/lib/utils";

export function Tag(props: { text: string }) {
  return (
    <div
      style={{ backgroundColor: `hsl(${getColourFromString(props.text)})` }}
      className="rounded-md px-2"
    >
      {props.text}
    </div>
  );
}
