"use client";
import React, { useEffect, useLayoutEffect, useRef, useState } from "react";

// UseEffect is Async UseLayoutEffect is not.
// with UseLayoutEffect, First react caculates the dom , Then UseLayoutEffect is called, And finally the browser shows everything
// UseLayoutEffect is perfect for manipulating the layout of Dom - things that are visible to the user.
// use UseEffect first and if it didn't work use UseLayoutEffect

export default function Index() {
  const [show, setShow] = useState(false);
  const popup = useRef<HTMLDivElement | null>(null);
  const button = useRef<HTMLButtonElement | null>(null);
  //   useEffect(() => { // with useEffect it has a jump at the start  
  useLayoutEffect(() => {
    if (popup.current == null || button.current == null) return;
    const { bottom } = button.current.getBoundingClientRect();
    popup.current.style.top = `${bottom + 25}px`;
  }, [show]);

  return (
    <div>
      <button ref={button} onClick={() => setShow(!show)}>
        {" "}
        click here
      </button>
      {show && (
        <div style={{ position: "absolute" }} ref={popup}>
          this is the pop up
        </div>
      )}
    </div>
  );
}
