"use client";
import Image from "next/image";

const About = ({ name, image, bio }) => {
  return (
    <div className="flex flex-col text-portfolio-white">
      <div className="h-2/5 w-full bg-portfolio-lightgray rounded-xl drop-shadow-lg flex flex-col p-5">
        <div className="flex justify-center items-center">
          <Image
            className="rounded-full h-32 w-32 md:h-40 md:w-40 aspect-square object-cover"
            alt={name}
            height={160}
            width={160}
            src={image}
          />
          <div className="flex flex-col p-3 gap-y-2 w-full">
            <p className="text-xs md:text-lg">Hey! I&apos;m..</p>
            <p className="text-lg font-bold md:text-5xl pl-3">{name}</p>
            <p className="flex justify-end text-xs md:text-lg text-nowrap">
              An Aspiring Full Stack Engineer
            </p>
          </div>
        </div>
        <ul className="text-white p-3 text-sm md:text-xl">
          {bio.map((line, idx) => (
            <li key={idx}>{line}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default About;
