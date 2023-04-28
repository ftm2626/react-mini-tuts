"use client";
import React, { useEffect, useRef, useState } from "react";

// UseRef does not make our component to reRender
// UseRef can be used to access HTML elements

export default function Index() {
  const [name, setName] = useState("");
  const renderCount = useRef(1); // ref returns the object {current : value} - not ReRendering example
  const inputRef = useRef<HTMLInputElement>(null); // Html element example

  useEffect(() => {
    renderCount.current = renderCount.current + 1;
  });

  const focusFunc= ()=>{
    inputRef.current?.focus()
  }
  return (
    <div>
      <input
        ref={inputRef}
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <p>my name is {name}</p>
      <p> i rendered {renderCount.current} times</p>
      <button onClick={focusFunc}>focus</button>
    </div>
  );
}
