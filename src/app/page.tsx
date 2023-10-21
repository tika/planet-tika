import { Avatar } from "@/components/avatar";
import { TextLink } from "@/components/link";
import { ProjectPreview } from "@/components/project-preview";
import { ThemeToggle } from "@/components/theme-toggle";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { promises as fs } from "fs";
import { Github, Mail, Twitter } from "lucide-react";
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
        <h1 className="text-3xl mb-4">Projects</h1>
        <div className="flex flex-col lg:grid lg:grid-cols-5 gap-4">
          {content.map((it, i) => (
            <ProjectPreview key={i} parts={it.split("\n")} />
          ))}
        </div>
      </div>
      <div className="bg-muted rounded-3xl py-8 px-6 text-muted-foreground mt-8">
        <p className="text-primary text-lg mb-4">Quick links</p>
        <TextLink url="https://github.com/tika">GitHub (@tika)</TextLink>
      </div>
    </main>
  );
}
