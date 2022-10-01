import React, { useState } from "react";
import GrandChild3 from "../grand-child3/grand-child3.component";

const Child3 = React.memo(() => {
  const [background, setBackground] = useState(false);
  console.log("render Child3");
  return (
    <div
      className="child"
      style={{ backgroundColor: background ? "red" : "white" }}
    >
      <h3>Child3</h3>
      <p>React.memo</p>
      <button onClick={() => setBackground(!background)}>on/off</button>
      <GrandChild3 />
    </div>
  );
});

export default Child3;
