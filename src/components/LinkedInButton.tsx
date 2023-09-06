import linkedInLogo from "../assets/linkedin-logo.png";

const LinkedInButton = () => {
  return (
    <a href="https://www.linkedin.com/in/andrew-khadder-ba3741252/">
      <img src={linkedInLogo} alt="linkedin" width={54} height={51} />
    </a>
  );
};

export default LinkedInButton;
