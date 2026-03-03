import { Project } from "@/types";

export const projects: Project[] = [
  {
    id: "personal-site",
    title: "Personal Website",
    description:
      "Personal site with blog, projects, and experience timeline. Built with Next.js App Router, Tailwind CSS v4, and MDX for writing.",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "MDX"],
    githubUrl: "https://github.com/coscoo/personal-site",
    featured: true,
    year: 2025,
  },
  {
    id: "camel-up-simulator",
    title: "Camel Up Simulator",
    description:
      "Monte Carlo simulator for the Camel Up board game. Models camel movement, stacking interactions, and calculates expected value for optimal betting decisions.",
    techStack: ["Python", "NumPy"],
    githubUrl: "https://github.com/coscoo/camel-up-simulator",
    featured: true,
    year: 2025,
  },
  {
    id: "etc-trading-bot",
    title: "ETC Trading Bot",
    description:
      "Algorithmic trading bot built for the Jane Street AMP ETC Trading competition.",
    techStack: ["Python"],
    githubUrl: "https://github.com/coscoo/Projects",
    featured: true,
    year: 2025,
  },
  {
    id: "anagram-game",
    title: "Anagram Game",
    description:
      "Command-line anagram word game with an AI component that simulates and evaluates whether a player's guess is optimal.",
    techStack: ["Python"],
    githubUrl: "https://github.com/coscoo/anagram-game",
    featured: false,
    year: 2025,
  },
  {
    id: "wordle",
    title: "Wordle",
    description:
      "Command-line Wordle clone with an AI solver.",
    techStack: ["Python"],
    githubUrl: "https://github.com/coscoo/Projects",
    featured: false,
    year: 2025,
  },
];
