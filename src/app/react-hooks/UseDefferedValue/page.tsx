"use client"
import React, { useState } from "react";
import List from "./list";

export default function Index() {
  const [input, setInput] = useState('')
  return (
    <div>
      <input type="text" value={input} onChange={e=>setInput(e.target.value)} />
      <List input={input} />
    </div>
  );
}
