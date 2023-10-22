import { Loader } from "lucide-react";

export default function Loading() {
  return (
    <div className="flex items-center space-x-4 w-screen h-screen justify-center gap-4">
      <Loader className="w-4 h-4 animate-spin" />
      Loading goodness...
    </div>
  );
}
