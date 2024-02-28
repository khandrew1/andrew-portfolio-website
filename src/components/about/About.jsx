"use client";
import Image from "next/image";

const About = ({ name, image, bio }) => {
  return (
    <div className="flex flex-col text-portfolio-white">
      <div className="h-2/5 w-full bg-portfolio-lightgray rounded-xl drop-shadow-lg flex flex-col p-5">
        <div className="flex flex-none">
          <Image
            className="rounded-full"
            alt={name}
            height={160}
            width={160}
            src={image}
          />
          <div className="flex flex-col flex-none p-3 gap-y-2">
            <p>Hey! I&apos;m..</p>
            <p className="text-6xl pl-3">{name}</p>
            <p className="flex justify-end">An Aspiring Full Stack Engineer</p>
          </div>
        </div>
        <ul className="text-white p-3 text-lg">
          {bio.map((line, idx) => (
            <li key={idx}>{line}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default About;
