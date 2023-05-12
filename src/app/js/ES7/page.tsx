/* eslint-disable react/no-unescaped-entities */
"use client"
import React from "react";
let x = 5;
x **= 2;
const array = ["Banana", "Orange", "Apple", "Mango"];
const include = array.includes("Mango")
console.log(include);


export default function Index() {
  return (
    <div>
      <p>
        ** : raises the first oerand to the prowe of the second operand. the
        same result as Math.pow(x,y)
      </p>
      <pre>5 ** 2 = {5 ** 2}</pre>
      <pre>5 ** 10 = {5 ** 10}</pre>
      <hr />
      <p>
        **= : raises the value of a variable to the power of the right operand
      </p>
      <pre>let x = 5; x **= 2; x={x}</pre>
      <hr />
      <p>Array.includes() : check if an element is present in an array</p>
      <pre>["Banana", "Orange", "Apple", "Mango"].includes("Mango") : true</pre>
    </div>
  );
}
