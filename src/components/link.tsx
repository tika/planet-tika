import NextLink from "next/link";

export function TextLink(props: { url: string; children: React.ReactNode }) {
  return (
    <NextLink
      href={props.url}
      className="text-primary-theme cursor-pointer hover:text-purple-600 transition duration-75"
    >
      {props.children}
    </NextLink>
  );
}
