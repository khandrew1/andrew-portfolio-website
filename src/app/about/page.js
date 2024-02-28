import About from "@/components/about/About";
import { PROFILE_INFO } from "@/data/about/About";

const Page = () => {
  return <About name={PROFILE_INFO.name} image={PROFILE_INFO.image} bio={PROFILE_INFO.bio} />;
};

export default Page;
