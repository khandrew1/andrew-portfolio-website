import LinkButton from "./LinkButton";

const Navbar = () => {
  return (
    <div className="bg-portfolio-lightgray h-2/5 w-[16%] rounded-xl flex text-portfolio-white drop-shadow-xl">
      <div className="flex flex-col w-full items-center">
        <p className="p-3 -mb-8">andrew khadder</p>
        <div className="flex flex-col h-full w-full items-center justify-evenly">
          <LinkButton name="about" href="" />
          <LinkButton name="education" href="" />
          <LinkButton name="project" href="" />
          <LinkButton name="resume" href="" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
