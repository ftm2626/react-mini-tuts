"use client";
/* eslint-disable react/no-unescaped-entities */
import { log } from "console";
import React from "react";

const fruits = ["Banana", "Orange", "Apple", "Mango"];
let fruit = fruits.at(2);
console.log(fruit);

export default function index() {
  return (
    <div>
      <p>
        string.replaceAll() :The replaceAll() method allows you to specify a
        regular expression instead of a string to be replaced. If the parameter
        is a regular expression, the global flag (g) must be set, otherwise a
        TypeError is thrown
      </p>
      <pre>text = text.replaceAll("Cats","Dogs");</pre>
      <pre>text = text.replaceAll(/Cats/g,"Dogs");</pre>
      <hr />
      <p> the numeric separator (_) : makes numbers more readable</p>
      <pre>const num = 1_000_000_000; // 1000000000</pre>
      <hr />
      <p>
        array.at()/ string.at() : returns an indexed element from an
        array/string. returns the same as []
      </p>
      <pre>const fruits = ["Banana", "Orange", "Apple", "Mango"];</pre>
      <pre>let fruit = fruits.at(2);</pre>
      <pre>let fruit = fruits[2];</pre>
      <pre>const name = "W3Schools";</pre>
      <pre>let letter = name.at(2);</pre>
      <pre>let letter = name[2];</pre>
      <hr />
    </div>
  );
}
