import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex flex-col>">
      <div className="bg-primary w-1/7 mt-18 mb-8 mr-1"></div>
      <div className="bg-secondary p-4 w-64 mt-4">
        <img
          src="./light-logo.png"
          alt="Lighthouse Logo"
          className="w-48 h-24 mx-auto"
        />
      </div>
      <div></div>
      <div className="pl-12 flex justify-start items-center bg-primary grow mt-18 mb-8 ml-1 text-amber-50 font-semibold">
        150th Anniversary Celebration
      </div>
    </div>
  );
}

export default App;
