"use client";
import React from "react";
import { useMyCustomeHook } from "./useMyCustomeHook";

export default function Index() {
  const { input, setInput } = useMyCustomeHook();
  return (
    <div>
        <h1>UseDebugValue</h1>
      <p>Open dev tools and you can use UseDebugValue to see the input value</p>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
    </div>
  );
}
