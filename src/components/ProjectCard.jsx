import { FaFigma, FaGithub } from "react-icons/fa";
import Link from "next/link";

const ProjectCard = ({ name, list, icons }) => {
  return (
    <div className="flex flex-col text-portfolio-white">
      <div className="h-2/5 w-full bg-portfolio-lightgray rounded-xl drop-shadow-lg">
        <p className="text-3xl pl-3 pt-3">{name}</p>
        <ul className="flex flex-col grow list-disc pl-5 mb-4 m-3 gap-0.5">
          {list.map((point, idx) => (
            <li key={idx}>{point}</li>
          ))}
        </ul>
        <div className="flex grow ml-3 mb-3 w-fit gap-3">
          {icons.map((obj, idx) => (
            <Link key={idx} href={obj.href}>
              {obj.icon}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
