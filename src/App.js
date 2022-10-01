import { useState } from "react";
import Child1 from "./components/child1/child1.component";
import Child2 from "./components/child2/child2.component";

import "./App.css";

function App() {
  console.log("render App");
  const [background, setBackground] = useState(false);
  return (
    <div className="main">
      <h1>Home</h1>
      <button
        onClick={() => {
          setBackground(!background);
        }}
      >
        on/off
      </button>
      <Child1 />
      <Child2 background={background} />
    </div>
  );
}

export default App;
