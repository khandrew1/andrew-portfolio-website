import LinkButton from "./LinkButton";

const Navbar = () => {
  return (
    <div className="flex flex-col items-center text-portfolio-white">
      <div className="bg-portfolio-lightgray rounded-xl flex flex-col items-center p-5 w-full">
        <p className="text-sm w-full mx-4 mb-3">andrew khadder</p>
        <div className="w-full flex flex-col gap-3 items-center -px-5">
          <LinkButton name="about" href="/about" />
          <LinkButton name="education" href="/education" />
          <LinkButton name="projects" href="/projects" />
          <LinkButton name="resume" href="/Andrew_Khadder_Resume.pdf" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
