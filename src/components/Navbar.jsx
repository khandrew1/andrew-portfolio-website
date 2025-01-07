import LinkButton from "./LinkButton";

const Navbar = () => {
  return (
    <div className="flex w-full flex-col justify-center items-center text-portfolio-white">
      <div className="bg-portfolio-lightgray rounded-xl flex flex-col items-center p-5 w-full">
        <p className="text-sm md:text-lg w-full px-4 pb-3 text-center">
          andrew khadder
        </p>
        <div className="w-full flex lg:flex-col gap-3 items-center justify-between">
          <LinkButton name="about" href="/about" />
          <LinkButton name="education" href="/education" />
          <LinkButton name="projects" href="/projects" />
          <LinkButton name="resume" href="/Andrew_Khadder_resume.pdf" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
