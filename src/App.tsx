import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Increment from "./components/IncrementProgress";
import Decrement from "./components/DecrementProgress";
import ProgressBar from "./components/ProgressBar";

function App() {
  const [progress, setProgress] = useState(0);

  return (
    <>
      <Header title="Progress Bar" />
      <ProgressBar progress={progress} />
      <div style={{ marginTop: "10px" }}>
        <Increment setProgress={setProgress} />
        <Decrement setProgress={setProgress} />
      </div>
    </>
  );
}

export default App;
