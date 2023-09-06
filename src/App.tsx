import GithubButton from "./components/GithubButton";

function App() {
  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen bg-slate-300">
        <div className="text-5xl">Andrew Khadder</div>
        <div>
          <GithubButton />
        </div>
      </div>
    </>
  );
}

export default App;
