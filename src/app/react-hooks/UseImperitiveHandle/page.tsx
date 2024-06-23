"use client";
import React, { useRef } from "react";
import CustomeInput from "./CustomeInput";

export default function Index() {
  const inputRef = useRef<any>();
  return (
    <div>
      <CustomeInput ref={inputRef} />
      <button onClick={() => inputRef.current.alertHi()}>focus</button>
      <p>
        useImperativeHandle is a React Hook that lets you customize the handle
        exposed as a ref.
      </p>
      <p>useImperativeHandle(ref, createHandle, dependencies?)</p>
      <p>using for multiple forward ref</p>
      <p>rarely use it!</p>
    </div>
  );
}
