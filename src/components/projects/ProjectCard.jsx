import Link from "next/link";

const ProjectCard = ({ name, list, techStack, icons }) => {
  return (
    <div className="flex flex-col text-portfolio-white">
      <div className="h-2/5 w-full bg-portfolio-lightgray rounded-xl drop-shadow-lg">
        <p className="text-2xl md:text-3xl pl-3 pt-3 font-bold">{name}</p>
        <p className="text-xs md:text-lg italic pl-3 -mb-2.5">
          {techStack.join(", ")}
        </p>
        <ul className="flex flex-col grow list-disc pl-5 py-2 mb-4 m-3 gap-0.5 text-xs md:text-xl">
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
