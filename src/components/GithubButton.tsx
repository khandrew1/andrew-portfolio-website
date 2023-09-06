import githubLogo from "../assets/github-mark.png";

const GithubButton = () => {
  return (
    <a href="https://github.com/khandrew1">
      <img src={githubLogo} alt="github" width={54} height={51} />
    </a>
  );
};

export default GithubButton;
