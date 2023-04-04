"use client";
import React, { memo, useState } from "react";

// REACT.MEMO is  used with components
// MEMO VS USEMEMO : memo takes in a component but useMemo takes in a function and returns a value

function Index() {
  const [appindex, setAppindex] = useState(1);
  const [color, setColor] = useState("red");
  console.log(`app renders are ${appindex}`);

  return (
    <div>
      <button onClick={() => setAppindex(appindex + 1)}>reRender app</button>
      <button onClick={() => setColor(color === "red" ? "blue" : "red")}>
        reRender color
      </button>
      <MemoedSwatched color={color} />
    </div>
  );
}

function Swatch({ color }: { color: string }) {
  console.log(`swatched rendered ${color}`);
  return (
    <div
      style={{ margin: 2, width: 75, height: 75, backgroundColor: color }}
    ></div>
  );
}

const MemoedSwatched = memo(Swatch);

export default Index;


// when to use memoiization
// when input values do not change too much
// best case => red, red, blue blue ->this only changes once
// worst case=> red, blue, red, blue -> this changes 3 times
// only for optimization , do not use it prematurelly