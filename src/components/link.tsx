import NextLink from "next/link";

export function TextLink(props: { url: string; children: React.ReactNode }) {
  return (
    <NextLink
      href={props.url}
      className="text-primary-theme cursor-pointer hover:text-blue-600 transition"
    >
      {props.children}
    </NextLink>
  );
}
