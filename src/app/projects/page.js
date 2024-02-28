import ProjectCard from "@/components/ProjectCard";
import { FaFigma, FaGithub } from "react-icons/fa";

const Page = () => {
  const projects = [
    {
      name: "Portfolio Website",
      list: [
        "The website you're on right now!",
        "Created with Next.js and tailwind",
        "A website to show off my projects",
        "A website to show off my projects",
        "A website to show off my projects",
        "A website to show off my projects",
      ],
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
      name: "Hackathon Website",
      list: [
        "A website that helps streamline hackathon management by providing a dashboard for users and admins",
        "Currently in use by 5 hackathon organizations on campus to host and maintain their events",
        "Generated an XML Sitemap in order to greatly increase Search Engine Optimization results",
        "Integrated Github Actions CI/CD workflow in order to sync all template changes to all generated repositories",
        "Improved User Experience and ease of access through adding keyboard shortcuts to multiple components",
        "Enhanced app performance by converting components from Client-Side Rendering to Server-Side Rendering",
      ],
      icons: [
        {
          icon: <FaGithub className="text-4xl" />,
          href: "https://github.com/acm-ucr/hackathon-website",
        },

        {
          icon: <FaFigma className="text-4xl" />,
          href: "https://www.figma.com/file/YsmdMaZuYrkiaiWcB9XY1P/Hackathon-2024-Backend?type=design&node-id=0%3A1&mode=design&t=Yuhc1H7l5kce0mOV-1",
        },
      ],
    },
    {
      name: "bitByBIT",
      list: [
        "A website aimed to challenge and empower beginner coders and help hone their skills",
        "Designed and implemented dynamic profile page, offering users insights on their progress",
        "Implemented a Code Editor component in order to have a clean, friendly, and easy environment to write code",
        "Built out parts of JSX component library to better encapsulate code and drastically reduce boilerplate",
        "Implemented API Routes to streamline communication between front end and back end systems",
        "Optimized components by abstracting out API calls to a dedicated backend, reducing client overhead",
      ],
      icons: [
        {
          icon: <FaGithub className="text-4xl" />,
          href: "https://github.com/acm-ucr/undecided",
        },

        {
          icon: <FaFigma className="text-4xl" />,
          href: "https://www.figma.com/file/sDzfa83PhH4f2WuMASwTBt/Apollo?type=design&node-id=0-1&mode=design&t=RTUDcI14MMmQ84Bk-0",
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
        "A website that connects to user`s Spotify account to give them an audio visualization of their music",
        "Created an immersive audio visualizer component utilizing the power of the Canvas API",
        "Utilized Web Audio API to convert audio output to a bar visualizer based on audio`s frequency bins",
        "Integrated Spotify API to display real-time information about user`s currently playing track and album",
      ],
      icons: [
        {
          icon: <FaGithub className="text-4xl" />,
          href: "https://github.com/khandrew1/aesthetic-ify",
        },
      ],
    },
  ];

  return (
    <div className="flex flex-col gap-3">
      {projects.map((obj, idx) => (
        <ProjectCard
          key={idx}
          name={obj.name}
          list={obj.list}
          icons={obj.icons}
        />
      ))}
    </div>
  );
};

export default Page;
