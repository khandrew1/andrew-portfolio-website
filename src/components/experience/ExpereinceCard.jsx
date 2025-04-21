import Link from "next/link";

const ExperienceCard = ({ name, company, points, duration, location }) => {
  return (
    <div className="flex flex-col text-portfolio-white">
      <div className="h-2/5 w-full bg-portfolio-lightgray rounded-xl drop-shadow-lg">
        <div className="flex justify-between pt-3 px-3">
          <p className="text-lg md:text-3xl font-bold">{name}</p>
          <p className="text-xs italic">{duration}</p>
        </div>
        <div className="flex px-3 justify-between">
          <p className="text-sm md:text-2xl font-semibold">{company}</p>
          <p className="text-xs md:text-lg italic text-end">{location}</p>
        </div>
        <ul className="flex flex-col grow list-disc pl-5 py-2 mb-4 m-3 gap-0.5 text-xs md:text-xl">
          {points.map((point, idx) => (
            <li key={idx}>{point}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ExperienceCard;
