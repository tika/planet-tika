import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const colours = [
  "83, 100%, 57%",
  "163, 100%, 57%",
  "301, 100%, 57%",
  "1, 100%, 57%",
];

export function getColourFromString(string: string) {
  // take the name and convert it to a number
  let num = 0;

  for (const x in string.split("")) {
    num += x.charCodeAt(0);
  }

  // Having the char count, we can now mod it by the length of our array

  const val = num % colours.length;

  // And that should give us a value from 0 to the highest valid index!
  return colours[val];
}
