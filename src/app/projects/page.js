import ProjectCard from "@/components/ProjectCard";
import { PROJECTS } from "@/data/projects/Projects";

const Page = () => {
  return (
    <div className="flex flex-col gap-3">
      {PROJECTS.map((obj, idx) => (
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
