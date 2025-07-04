import Navbar from "./components/Navbar";
import LandingText from "./components/LandingText";

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-amber-50 overflow-x-hidden">
      <Navbar />
      <LandingText />
    </div>
  );
}

export default App;
