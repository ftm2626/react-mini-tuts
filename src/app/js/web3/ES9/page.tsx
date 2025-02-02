/* eslint-disable react/no-unescaped-entities */
"use client";
import React from "react";

let { x, y, ...z } = { x: 1, y: 2, a: 3, b: 4 };
console.log(z);

export default function Index() {
  return (
    <div>
      <p>async iteration : we can use "await" in "for/of" loops </p>
      <pre>for await () {}</pre>
      <hr />
      <p>promise.finally()</p>
      <pre>let myPromise = new Promise()</pre>
      <pre>myPromise.then()</pre>
      <pre>myPromise.catch()</pre>
      <pre>myPromise.finally()</pre>
      <hr />
      <p>
        object rest (...object) : destructs an object and collect the left overs
        onto a new object
      </p>
      <pre>eg. in code</pre>
      <hr />
      <p>
        New JavaScript RegExp Features ECMAScript 2018 added 4 new RegExp
        features: Unicode Property Escapes (\p{"{"}...{"}"}) Lookbehind
        Assertions (?{"<"}= ) and (?{"<"}! ) Named Capture Groups s (dotAll)
        Flag
      </p>
      <hr />
      <p>
        JavaScript Threads: In JavaScript you use the Web Workers API to create
        threads. Worker threads are used to execute code in the background so
        that the main program can continue execution. Worker threads run
        simultaneously with the main program. Simultaneous execution of
        different parts of a program can be time-saving.
      </p>
      <p>
        JavaScript Shared Memory: Shared memory is a feature that allows threads
        (different parts of a program) to access and update the same data in the
        same memory. Instead of passing data between threads, you can pass a
        SharedArrayBuffer object that points to the memory where data is saved.
      </p>
      <p>
        SharedArrayBuffer: A SharedArrayBuffer object represents a fixed-length
        raw binary data buffer similar to the ArrayBuffer object.
      </p>
    </div>
  );
}
