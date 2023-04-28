"use client";
import React, { useState, useTransition } from "react";

// all state changes happen at the same time and then render
// USETRANSITION allows us to make TWO diffrent state changes at the same time and rank them in order
// when to use USETRANSITION : a time intesive computarion , a complex function
// do NOT use USETRANSITION unless you have to, because it makes react render the page more than once

export default function Index() {
  const [input, setInput] = useState("");
  const [list, setList] = useState([]);
  const [listPending, startListTransition] = useTransition();
  const LIST_SIZE = 20000;

  //   function handleChange(e: any) {
  //     setInput(e.target.value); //state change number 1
  //     const l = [];
  //     for (let i = 0; i < LIST_SIZE; i++) {
  //       l.push(e.target.value);
  //     }
  //     setList(l); //state change number 2
  //   } //this makes all the state changes in to ONE call and then it's gonna rerender our page

  function handleChange(e: any) {
    setInput(e.target.value);
    startListTransition(() => {
      const l = [];
      for (let i = 0; i < LIST_SIZE; i++) {
        l.push(e.target.value);
      }
      setList(l);
    });
  }

  return (
    <div>
      <h1>UseTransition</h1>
      <p>type in the input</p>
      <input
        type="text"
        name="input"
        id="input"
        value={input}
        onChange={handleChange}
      />
      {listPending && <p>List is loading....</p>}
      {list.map((item, index) => {
        return <div key={index}>{item}</div>;
      })}
    </div>
  );
}
