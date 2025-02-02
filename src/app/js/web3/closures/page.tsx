/* eslint-disable react/jsx-no-comment-textnodes */
import React from "react";

export default function Index() {
  return (
    <div>
      <p>
        A closure is the combination of a function bundled together (enclosed)
        with references to its surrounding state (the lexical environment). In
        other words, a closure gives you access to an outer function{"'"}s scope
        from an inner function. In JavaScript, closures are created every time a
        function is created, at function creation time.
      </p>
      <code>
        function init() {"{"}
        var name = {"'"}Mozilla{"'"}; // name is a local variable created by
        init function displayName() {"{"}
        // displayName() is the inner function, that forms the closure
        console.log(name); // use variable declared in the parent function
        {"}"}
        displayName();
        {"}"}
        init();
      </code>
      <p>
        In ES6, JavaScript introduced the let and const declarations, which,
        among other things like temporal dead zones, allow you to create
        block-scoped variables.
      </p>
      <code>
        if (Math.random() {">"} 0.5) {"{"}
        const x = 1;
        {"}"} else {"{"}
        const x = 2;
        {"}"}
        console.log(x); // ReferenceError: x is not defined
      </code>

      
    </div>
  );
}
