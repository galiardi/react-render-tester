import { useState } from "react";
import GrandChild1 from "../grand-child1/grand-child1.component";

const Child1 = () => {
  const [background, setBackground] = useState(false);
  console.log("render Child1");
  return (
    <div
      className="child"
      style={{ backgroundColor: background ? "green" : "white" }}
    >
      <h3>Child1</h3>
      <button onClick={() => setBackground(!background)}>on/off</button>
      <GrandChild1 />
    </div>
  );
};

export default Child1;
