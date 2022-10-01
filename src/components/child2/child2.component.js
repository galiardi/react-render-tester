import { useState } from "react";
import GrandChild2 from "../grand-child2/grand-child2.component";

const Child2 = ({ background }) => {
  console.log("render Child2");
  const [color, setColor] = useState(false);
  return (
    <div
      className="child"
      style={{
        backgroundColor: background ? "blue" : null,
        color: color ? "red" : "black",
      }}
    >
      <h3>Child2</h3>
      <p>receives props</p>
      <button onClick={() => setColor(!color)}>on/off</button>
      <GrandChild2 />
    </div>
  );
};

export default Child2;
