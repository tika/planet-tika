import { Avatar } from "@/components/avatar";
import { TextLink } from "@/components/link";
import { ProjectPreview } from "@/components/project-preview";
import { ThemeToggle } from "@/components/theme-toggle";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { promises as fs } from "fs";
import { Github, Mail, Sun, Twitter } from "lucide-react";
import { Metadata } from "next";
import Link from "next/link";
import path from "path";

export const metadata: Metadata = {
  title: "Portfolio – Tika Capon",
  icons: "https://avatars.githubusercontent.com/u/48658947?v=4",
};

export default async function Home() {
  const content = [];

  try {
    const files = await fs.readdir(process.cwd() + "/src/md", {
      encoding: "utf8",
      withFileTypes: true,
    });
    for (const file of files) {
      const filePath = path.join(process.cwd(), "src", "md", file.name);
      const fileContent = await fs.readFile(filePath, "utf8");
      content.push(fileContent);
    }
  } catch (err) {
    console.error(err);
  }

  return (
    <main className="px-16 py-8 md:px-32">
      {/* <div className="fixed overflow-none w-screen">
        <div className=" bg-black overflow-none w-screen">
          <InteractiveMarquee>
            <p>{"tika ".repeat(10)}</p>
          </InteractiveMarquee>
        </div>
      </div> */}

      <div className="flex items-center justify-between gap-2 mb-16">
        <div className="flex items-center gap-2">
          <ThemeToggle />

          <p>Tika &apos;23</p>
        </div>

        <div className="flex gap-2">
          <Link
            href="https://x.com/7ikadev"
            className={cn(
              buttonVariants({
                variant: "outline",
                size: "icon",
              }),
              "cursor-pointer"
            )}
          >
            <Twitter className="h-[1.2rem] w-[1.2rem]" />
          </Link>
          <Link
            href="mailto:hey@7ika.dev"
            className={cn(
              buttonVariants({
                variant: "outline",
                size: "icon",
              }),
              "cursor-pointer"
            )}
          >
            <Mail className="h-[1.2rem] w-[1.2rem]" />
          </Link>
          <Link
            href="https://github.com/tika"
            className={cn(
              buttonVariants({
                variant: "outline",
                size: "icon",
              }),
              "cursor-pointer"
            )}
          >
            <Github className="h-[1.2rem] w-[1.2rem]" />
          </Link>
        </div>
      </div>

      <div className="flex items-center gap-6">
        <Avatar />
        <div>
          {/* <div className="absolute top-30 left-0 w-full h-full -z-10">
            <div className="w-full h-96 relative rounded-3xl overflow-none ">
              <div
                className={`b bg-[linear-gradient(30deg, red, transparent),
      url(https://grainy-gradients.vercel.app/noise.svg)] rounded-full z-10 bg-black`}
              ></div>
              <div className="absolute top-0 w-full h-full bg-blue-500 mix-blend-multiply rounded-full blur-3xl"></div>
            </div>
          </div> */}

          <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
            Tika Capon
          </h1>
          <h2 className="font-semibold text-muted-foreground">
            Software Engineer, Maker, Musician
          </h2>
        </div>
      </div>
      <hr className="my-8" />
      <div>
        <div className="grid grid-cols-4 lg:grid-cols-6 gap-4">
          <div className="border from-slate-500 to-slate-800 bg-gradient-to-tl rounded-3xl col-span-2 px-6 py-8 h-70 md:h-48 lg:h-36">
            My name is Tika, I&apos;m 17 & I&apos;m from the United Kingdom – I
            spend about half of my time on stuff no one told me to do!
          </div>
          <div className="border from-blue-800 to-slate-800 bg-gradient-to-r rounded-3xl col-span-2 lg:col-span-3 px-6 py-8 text-left">
            <h1>Design Philosophy</h1>
            <p>
              It&apos;s all about solving problems: don&apos;t make the problem.
              There&apos;s no need to reinvent the wheel.
            </p>
          </div>
          <div className="border from-orange-400 to-yellow-200 bg-gradient-to-br rounded-3xl col-span-2 px-6 py-8 text-left flex justify-between md:col-span-1">
            <Sun className="w-16 h-16" />
            <p className="h-full flex items-end font-bold">-17degC</p>
          </div>
          <div className="h-96 col-span-2 relative rounded-3xl border px-6 py-8">
            <h1>Recent Releases</h1>
          </div>
        </div>
      </div>
      <hr className="my-8" />
      <div>
        <h1 className="text-3xl mb-4">Projects</h1>
        <div className="flex flex-col lg:grid lg:grid-cols-5 gap-4">
          {content.map((it, i) => (
            <ProjectPreview key={i} parts={it.split("\n")} />
          ))}
        </div>
      </div>

      <div className="bg-muted rounded-3xl py-8 px-6 text-muted-foreground mt-8 flex flex-col items-center">
        <div className="flex justify-between items-center w-full">
          <div className="flex flex-col w-1/2">
            <TextLink url="https://github.com/tika">GitHub (@tika)</TextLink>
            <TextLink url="https://x.com/7ikadev">X (@7ikadev)</TextLink>
            <TextLink url="https://linkedin.com/">
              LinkedIn (Tika Capon)
            </TextLink>
          </div>
          <div className="w-[1px] h-16 bg-white bg-opacity-10" />
          <div className="w-1/2 h-full px-4">
            <p>Website made on 🪐 by 7ika.</p>
            <p>Thanks for checking out this space,</p>
            <p className="hover:text-purple-500 transition cursor-crosshair">
              ~ Tika
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
