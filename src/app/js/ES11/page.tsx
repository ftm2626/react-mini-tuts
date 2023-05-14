/* eslint-disable react/no-unescaped-entities */
"use client";
import React from "react";

export default function Index() {
  const string1 = "this is my string";
  const string2 = string1.matchAll("string");
  const string3 = string1.matchAll(/string/g); // If the parameter is a regular expression, the global flag (g) must be set set, otherwise a TypeError is thrown.
  const string4 = string1.matchAll(/string/i); // If you want to search case insensitive, the insensitive flag (i) must be set:
  console.log(Array.from(string2));

  return (
    <div>
      <p>
        BigIn : BigInt variables are used to store big integer values that are
        too big to be represented by a a normal JavaScript Number
      </p>
      <p>
        To create a BigInt, append n to the end of an integer or call BigInt()
      </p>
      <pre>let y = 9999999999999999; // too big</pre>
      <pre>let y = 9999999999999999n;</pre>
      <pre>let y = BigInt(1234567890123456789012345)</pre>
      <hr />
      <p>
        string.matchAll() : search for all occurences of a string in a string
      </p>
      <pre>eg in code</pre>
    </div>
  );
}
