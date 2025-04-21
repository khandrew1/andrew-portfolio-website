import ExperienceCard from "@/components/experience/ExpereinceCard";
import { EXPERIENCE } from "@/data/experience/Experience";

const Page = () => {
  return (
    <div className="flex flex-col gap-3">
      {EXPERIENCE.map((exp, idx) => (
        <ExperienceCard
          key={idx}
          name={exp.name}
          company={exp.company}
          points={exp.points}
          duration={exp.duration}
          location={exp.location}
        />
      ))}
    </div>
  );
};

export default Page;
