"use client";
import React, { useCallback, useMemo, useState } from "react";
import List from "./List";

// 1. using USECALLBACK here alows the theme to change with out calling the "getItems" again.
// 2. can be used with functions that are slow to render
// 3. can be used when we have multiple setStates in  our component

// USECALLBACK VS USEMEMO : useMemo takes a function and it will return the "return" value of that functions, but useCallback will return the function it self

function Index() {
  const [number, setNumber] = useState(0);
  const [dark, setDark] = useState(false);
  // const getItems = () => {
  //   return [number, number + 1, number + 2];
  // };  //--------> this will rerender then theme changes

  const getItems = useCallback(
    (increment: number) => {
      return [number, number + increment, number + increment * 2];
    },
    [number]
  );

  const themeStyle = {
    backgroundColor: dark ? "black" : "white",
    color: dark ? "white" : "black",
  };
  return (
    <div style={themeStyle}>
      <p>UseCallback</p>
      <input
        type="number"
        name="count"
        id="count"
        value={number}
        onChange={(e) => setNumber(+e.target.value)}
      />
      <button onClick={() => setDark(!dark)}>Change Theme</button>
      <List getItems={getItems} />
    </div>
  );
}

export default Index;
