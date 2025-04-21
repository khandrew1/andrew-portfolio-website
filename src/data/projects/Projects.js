import { FaFigma, FaGithub } from "react-icons/fa";

export const PROJECTS = [
  {
    name: "Portfolio Website",
    list: [
      "The website you're on right now!",
      "Created with Next.js and tailwind",
      "Designed with Figma",
      "A website to show off my projects",
      "Scroll down for more!",
    ],
    techStack: ["Next.js", "tailwindcss"],
    icons: [
      {
        icon: <FaGithub className="text-4xl" />,
        href: "https://github.com/khandrew1/andrew-portfolio-website",
      },
      {
        icon: <FaFigma className="text-4xl" />,
        href: "https://www.figma.com/file/M9z0dm6WvEMyGQP5oh4yt9/Andrew's-Portfolio-Website?type=design&node-id=0%3A1&mode=design&t=pkEoKL1XnyriJrMq-1",
      },
    ],
  },
  {
    name: "mood-ify",
    list: [
      "Developed a backend app that analyzes Spotify playlists and generates custom AI art based on its mood",
      "Built and trained custom machine learning classification model using track metadata and genre embedding",
      "Engineered a modular ML pipeline for preprocessing, feature extraction, training, and evaluation",
      "Integrated Spotify Web API for authentication and to dynamically fetch playlist and track data",
    ],
    techStack: ["Python", "FastAPI", "Dall E", "ChatGPT"],
    icons: [
      {
        icon: <FaGithub className="text-4xl" />,
        href: "https://github.com/khandrew1/mood-ify",
      },
    ],
  },
  {
    name: "Aurora",
    list: [
      "A website that helps streamline hackathon management by providing a dashboard for users and admins",
      "Currently in use by 5 hackathon organizations on campus to host and maintain their events",
      "Implemented virtualized infinite scrolling on all dashboard tables reducing server load by 30%",
      "Generated an XML Sitemap in order to greatly increase Search Engine Optimization results",
      "Integrated Github Actions CI/CD workflow in order to sync all template changes to all generated repositories",
      "Improved User Experience and ease of access through adding keyboard shortcuts to multiple components",
      "Enhanced app performance by converting components from Client-Side Rendering to Server-Side Rendering",
    ],
    techStack: ["Next.js", "tailwindcss", "Firebase", "NextAuth"],
    icons: [
      {
        icon: <FaGithub className="text-4xl" />,
        href: "https://github.com/acm-ucr/aurora",
      },

      {
        icon: <FaFigma className="text-4xl" />,
        href: "https://www.figma.com/file/YsmdMaZuYrkiaiWcB9XY1P/Hackathon-2024-Backend?type=design&node-id=0%3A1&mode=design&t=Yuhc1H7l5kce0mOV-1",
      },
    ],
  },
  {
    name: "Musicify",
    list: [
      "A website that uses the GPT-3.5 Model to help you decide what music to listen to based on your mood",
      "Implemented OpenAI API and Spotify API to help recommend music to users based on any text based prompt",
      "Facilitated seamless integration of APIs in order to efficiently deliver personalized music recommendations",
      "Employed TailwindCSS for a visually appealing and consistent design, ensuring optimal and friendly UI/UX",
    ],
    techStack: ["Next.js", "tailwindcss", "OpenAI", "Spotify API"],
    icons: [
      {
        icon: <FaGithub className="text-4xl" />,
        href: "https://github.com/khandrew1/musicify",
      },
    ],
  },
  {
    name: "aesthetic-ify",
    list: [
      "A website that connects to user's Spotify account to give them an audio visualization of their music",
      "Created an immersive audio visualizer component utilizing the power of the Canvas API",
      "Utilized Web Audio API to convert audio output to a bar visualizer based on audio's frequency bins",
      "Integrated Spotify API to display real-time information about user's currently playing track and album",
    ],
    techStack: ["ReactJS", "Material UI", "Spotify API"],
    icons: [
      {
        icon: <FaGithub className="text-4xl" />,
        href: "https://github.com/khandrew1/aesthetic-ify",
      },
    ],
  },
  {
    name: "MedMe",
    list: [
      "A website that recommends over the counter medicine for different symptoms",
      "Implemented a routing system using React Router allowing for seamless navigation between pages",
      "Developed a reusable template component which significantly improved code efficiency",
      "Integrated Material UI to accelerate the development process while maintaining consistent design",
      "Won Best Innovation Award at Cutie Hack 2022",
    ],
    techStack: ["ReactJS", "Material UI"],
    icons: [
      {
        icon: <FaGithub className="text-4xl" />,
        href: "https://github.com/khandrew1/MedMe",
      },
    ],
  },
];
