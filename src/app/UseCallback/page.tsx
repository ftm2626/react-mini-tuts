"use client";
import React, { useMemo, useState } from "react";
import List from "./List";

function Index() {
  const [number, setNumber] = useState(0);
  const [dark, setDark] = useState(false);
  const getItems = () => {
    return [number, number + 1, number + 2];
  };

  const themeStyle = {
    backgroundColor: dark ? "black" : "white",
    color: dark ? "white" : "black",
  };
  return (
    <div style={themeStyle}>
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
