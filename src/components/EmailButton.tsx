import emailLogo from "../assets/mailLogo.png";

const EmailButton = () => {
  return (
    <a href="mailto:andrew.khadder@gmail.com">
      <img src={emailLogo} alt="email" width={54} height={51} />
    </a>
  );
};

export default EmailButton;
