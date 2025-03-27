import Navbar from "./components/Navbar";
import LandingText from "./components/LandingText";

function App() {
  return (
    <div className="h-screen flex flex-col bg-amber-50">
      <Navbar />
      <LandingText />
    </div>
  );
}

export default App;
