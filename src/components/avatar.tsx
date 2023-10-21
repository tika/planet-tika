"use client";

import Image from "next/image";

export function Avatar() {
  return (
    <Image
      src="https://avatars.githubusercontent.com/u/48658947?v=4"
      alt="Avatar"
      width={100}
      height={100}
      className="w-16 h-16 rounded-3xl overflow"
    />
  );
}
