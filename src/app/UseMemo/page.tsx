"use client";
import React, { useMemo, useState } from "react";

//during rendering and rerendering the page all of the functions will be processed , in order to stop that and boost speed we will use USEMEMO
//in this file if i don't use USEMEMO with'doubleNum' the change color button will also be slowed down
//using it too much will result in editional memory usage

// USECALLBACK VS USEMEMO : useMemo takes a function and it will return the "return" value of that functions, but useCallback will return the function it self

function Index() {
  const [number, setNumber] = useState(0);
  const [dark, setDark] = useState(false);
  // const doubleNum =  slowFunc(number) --> this would slow down theme change as well
  const doubleNum = useMemo(() => slowFunc(number), [number]);
  const themeStyle = {
    backgroundColor: dark ? "black" : "white",
    color: dark ? "white" : "black",
  };
  return (
    <div>
      <h1>UseMemo</h1>
      <p>type in the input</p>
      <input
        type="number"
        name="count"
        id="count"
        value={number}
        onChange={(e) => setNumber(+e.target.value)}
      />
      <button onClick={() => setDark(!dark)}>Change Theme</button>
      <div style={themeStyle}>{doubleNum}</div>
    </div>
  );
}

function slowFunc(num: number) {
  for (let i = 0; i < 100000; i++) {
    console.log("calling slow func");
  }
  return num * 2;
}

export default Index;
