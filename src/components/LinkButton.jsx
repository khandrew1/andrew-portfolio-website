import Link from "next/link";

const LinkButton = ({ name, href }) => {
  return (
    <Link
      href={href}
      className="bg-portfolio-white flex px-1.5 py-0.5 rounded-lg items-center justify-center text-black w-4/5"
    >
      {name}
    </Link>
  );
};

export default LinkButton;
