import { GitHubBento } from "@/components/bento/github";
import { RecentReleases } from "@/components/bento/recent-releases";
import { Weather } from "@/components/bento/weather";
import { TextLink } from "@/components/link";
import { InteractiveMarquee } from "@/components/marquee";
import { ProjectPreview } from "@/components/project-preview";
import { ThemeToggle } from "@/components/theme-toggle";
import { Title } from "@/components/title";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { promises as fs } from "fs";
import { Github, Mail, Mic, Twitter } from "lucide-react";
import { Metadata } from "next";
import Link from "next/link";
import path from "path";
import {
  SiAmazons3,
  SiExpress,
  SiFastify,
  SiFirebase,
  SiGit,
  SiMongodb,
  SiNextdotjs as SiNextJs,
  SiPostgresql,
  SiPrisma,
  SiPython,
  SiReact,
  SiRedis,
  SiSocketdotio,
  SiTailwindcss,
  SiTypescript,
  SiYarn,
} from "react-icons/si";

export const metadata: Metadata = {
  title: "Portfolio – Tika Capon",
  icons: "https://avatars.githubusercontent.com/u/48658947?v=4",
  keywords: [
    "Toggle theme",
    "Tika '23",
    "Avatar",
    "Tika Capon",
    "Software Engineer",
    "Maker",
    "Musician",
    "United Kingdom",
    "Coding",
    "Media Creation",
    "Startups",
    "Music",
    "Design Philosophy",
    "Problem Solving",
    "Innovation",
    "Web Development",
    "Front-End",
    "Back-End",
    "Full Stack",
    "UI/UX Design",
    "Programming",
    "Software Development",
    "Technology",
    "Development Tools",
    "Projects",
    "Backtrack",
    "Version Control",
    "Music Collaboration",
    "TypeScript",
    "Okra",
    "Food Delivery",
    "CS50 Final Project",
    "Polly Pot",
    "Education",
    "Environmental Awareness",
    "Preplar",
    "Homework Organizer",
    "Smart Cattle Feeder",
    "Agriculture",
    "Animal Husbandry",
    "Minecraft Minigame",
    "Java",
    "Examigo",
    "AI",
    "Exam Preparation",
    "Universe",
    "University Selection",
    "OSCAR Radio",
    "Web Development",
    "Vival",
    "Social Media",
    "Digital Archive",
    "GitHub",
    "LinkedIn",
    "Medium",
    "Website",
    "Personal Branding",
    "Portfolio",
    "Creative",
    "Innovation",
    "Technology",
    "Coding",
    "Projects",
    "Design",
    "Music",
    "Education",
    "AI",
    "Radio",
    "Social Media",
    "Development",
    "Web Design",
    "User Interface",
    "User Experience",
    "Collaboration",
    "Coding",
    "Art",
    "Front-End",
    "Back-End",
    "Game Development",
    "Application Development",
    "Community",
    "Innovation",
    "Coding Projects",
    "AI Projects",
    "Education Projects",
    "Technology Projects",
    "Social Media Projects",
    "GitHub Projects",
    "LinkedIn Profile",
    "Medium Articles",
    "Website Design",
    "Thank You",
    "7ika",
    "Personal Brand",
    "About Me",
    "Contact",
    "Skills",
  ],
  colorScheme: "dark",
  abstract: "Tika Capon – Engineer, Maker, Musician",
  category: "Portfolio",
  themeColor: "#1E3FAB",
  authors: {
    name: "Tika Capon",
    url: "https://7ika.dev/",
  },
};

export default async function Home() {
  const content = [];
  let projectNames;

  try {
    const files = await fs.readdir(process.cwd() + "/src/md", {
      encoding: "utf8",
      withFileTypes: true,
    });
    projectNames = files.map((it) => {
      const name = it.name.split("-");
      name.shift();
      return name.join(" ");
    });
    projectNames.push(" ");
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
      <div className="flex items-center justify-between gap-2 mb-4">
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

      <div className="overflow-hidden w-full mb-16">
        <div className="w-screen">
          <InteractiveMarquee>
            <h1>{projectNames?.join(" – ")}</h1>
          </InteractiveMarquee>
        </div>
      </div>

      <div className="w-full relative overflow-hidden">
        <Title />
      </div>

      <hr className="my-16" />
      <div>
        <div className="grid grid-cols-4 lg:grid-cols-6 gap-6">
          <div className="border from-slate-500 to-slate-800 bg-gradient-to-tl rounded-3xl col-span-2 px-6 py-8 overflow-hidden text-white">
            My name is Tika, I&apos;m 17 & I&apos;m from the United Kingdom. 4+
            years of coding, hobbies include: media creation, startups & music!
          </div>
          <div className="border from-blue-800 to-slate-800 bg-gradient-to-r rounded-3xl col-span-2 lg:col-span-3 px-6 py-8 text-left text-white">
            <h1>Design Philosophy</h1>
            <p>
              It&apos;s all about solving problems: don&apos;t make the problem.
              There&apos;s no need to reinvent the wheel.
            </p>
          </div>

          <Weather />

          <div className="h-96 col-span-2 md:col-span-3">
            <div className="grid grid-cols-3 grid-rows-2 h-full gap-6">
              <GitHubBento />
              <div className="from-yellow-600 to-orange-400 bg-gradient-to-tl col-span-6 row-span-1 w-full h-full px-8 items-center justify-center rounded-3xl gap-1 text-lg flex flex-col">
                <div className="hidden md:block">
                  <h1 className="flex gap-2">
                    <Mic /> Media
                  </h1>
                  <div>
                    <TextLink url="https://open.spotify.com/show/3aKp7gqsdqv9MVOqIGVc5y?si=625a092b56d14565">
                      Charge
                    </TextLink>
                    <span className="ml-1">
                      is a tech & science produced by me, co-hosted with 2
                      friends.
                    </span>
                  </div>
                </div>
                <div className="block md:hidden text-3xl">
                  <TextLink url="https://open.spotify.com/show/3aKp7gqsdqv9MVOqIGVc5y?si=625a092b56d14565">
                    Charge Podcast
                  </TextLink>
                </div>
              </div>
            </div>
          </div>
          <div className="h-96 col-span-2 relative rounded-3xl border px-6 py-4">
            <RecentReleases />
          </div>
          <div className="h-96 col-span-2 lg:col-span-1 relative rounded-3xl border px-6 py-4 from-zinc-900 to-slate-900 bg-gradient-to-t overflow-hidden text-white">
            <h1 className="text-lg mb-4 break-words">Technology & tools</h1>
            <div className="grid-cols-2 w-full grid text-xl justify-items-center gap-4">
              <SiGit />
              <SiReact />
              <SiNextJs />
              <SiFastify />
              <SiExpress />
              <SiRedis />
              <SiSocketdotio />
              <SiAmazons3 />
              <SiPrisma />
              <SiMongodb />
              <SiPostgresql />
              <SiFirebase />
              <SiYarn />
              <SiTypescript />
              <SiPython />
              <SiTailwindcss />
            </div>
          </div>
        </div>
      </div>
      <hr className="my-16" />
      <div>
        <h1 className="text-3xl mb-4">Projects</h1>
        <div className="flex flex-col lg:grid lg:grid-cols-5 gap-6">
          {content.map((it, i) => (
            <ProjectPreview key={i} parts={it.split("\n")} />
          ))}
        </div>
      </div>

      <div className="bg-muted rounded-3xl py-8 px-6 text-muted-foreground mt-16 flex flex-col items-center">
        <div className="flex justify-between items-center w-full">
          <div className="flex flex-col w-1/2">
            <TextLink url="https://github.com/tika">GitHub (@tika)</TextLink>
            <TextLink url="https://x.com/7ikadev">X (@7ikadev)</TextLink>
            <TextLink url="https://www.linkedin.com/in/tika-capon-94193a27b/">
              LinkedIn (Tika Capon)
            </TextLink>
            <TextLink url="https://medium.com/@tikacapon">
              Medium (@tikacapon)
            </TextLink>
          </div>
          <div className="w-[1px] h-16 bg-white bg-opacity-10" />
          <div className="w-1/2 h-full px-4">
            <p>Website made on 🪐 by 7ika.</p>
            <p>Thanks for checking out this space,</p>
            <p className="hover:text-blue-500 transition">~ Tika</p>
          </div>
        </div>
      </div>
    </main>
  );
}
