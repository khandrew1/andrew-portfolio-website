import Link from "next/link";

const LinkButton = ({ name, href }) => {
  return (
    <Link
      href={href}
      className="bg-portfolio-white flex h-[14%] w-[90%] rounded-lg items-center justify-center text-black"
    >
      {name}
    </Link>
  );
};

export default LinkButton;
