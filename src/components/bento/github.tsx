import { GithubIcon, Star } from "lucide-react";

type GitHubRepository = {
  id: number;
  name: string;
  // Add more properties as needed
};

export async function GitHubBento() {
  let page = 1;
  let allRepositories: any[] = [];

  while (true) {
    try {
      const response = await fetch(
        `https://api.github.com/user/repos?page=${page}&per_page=100`,
        {
          method: "GET",
          headers: {
            Authorization: `token ${process.env.GITHUB_TOKEN}`,
          },
        }
      );

      if (response.status === 200) {
        const repositories = await response.json();

        if (Array.isArray(repositories) && repositories.length > 0) {
          allRepositories = allRepositories.concat(repositories);
          page++;
        } else {
          break; // No more repositories to fetch
        }
      } else {
        throw new Error("Failed to fetch repository data from GitHub API.");
      }
    } catch (error) {
      console.error("An error occurred:", error);
      break;
    }
  }

  let totalStargazers = 0;

  for (const repo of allRepositories) {
    totalStargazers += repo.stargazers_count;
  }

  return (
    <div className="bg-gradient-to-r from-red-500 to-pink-500 col-span-6 row-span-1 w-full h-full flex items-center justify-center rounded-3xl gap-2 text-white">
      <div className="flex items-center gap-2 text-xl rotate-12 font-bold">
        <GithubIcon className="w-12 h-12" />
        <div className="flex flex-col">
          {allRepositories.length} repos
          <div className="flex gap-2 items-center font-bold">
            {totalStargazers} <Star className="w-4 h-4" />
          </div>
        </div>
      </div>
    </div>
  );
}
