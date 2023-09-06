import GithubButton from "./components/GithubButton";
import LinkedInButton from "./components/LinkedInButton";
import EmailButton from "./components/EmailButton";

function App() {
  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen bg-slate-300">
        <div className="text-6xl">Andrew Khadder</div>
        <div className="flex flex-row gap-8 py-3">
          <GithubButton />
          <LinkedInButton />
          <EmailButton />
        </div>
      </div>
    </>
  );
}

export default App;
