/* eslint-disable react/no-unescaped-entities */
"use client";
import React from "react";

export default function Index() {
  const string1 = "this is my string";
  // const string2 = string1?.matchAll("string");
  // const string3 = string1?.matchAll(/string/g); // If the parameter is a regular expression, the global flag (g) must be set set, otherwise a TypeError is thrown.
  // const string4 = string1?.matchAll(/string/i); // If you want to search case insensitive, the insensitive flag (i) must be set:
  // console.log(Array.from(string2));

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
      <hr />
      <p>
        ?? : The ?? operator returns the first argument if it is not nullish
        (null or undefined). Otherwise it returns the second.
      </p>
      <pre>
        let name = null; let text = "missing"; let result = name ?? text;
      </pre>
      <hr />
      <p>
        The Optional Chaining Operator (.?) : returns undefined if an object is
        undefined or null (instead of throwing an error).
      </p>
      <pre>
        const car = {"{"}type:"Fiat", model:"500", color:"white"{"}"}; let name
        = car?.name;
      </pre>
      <hr />
      <p>
        Logical AND Assignment Operator (&&=) :is used between two values. If
        the first value is true, the second value is assigned.
      </p>
      <pre>let x = 10; x &&= 5;</pre>
      <hr />
      <p>
        {" "}
        Logical OR Assignment Operator (||=) :is used between two values. If the
        first value is false, the second value is assigned.
      </p>
      <pre>let x = 10; x ||= 5;</pre>
      <hr />
      <p>
        Nullish Coalescing Assignment Operator (??=) : is used between two
        values. If the first value is undefined or null, the second value is
        assigned.
      </p>
      <pre>let x = 10; x ??= 5;</pre>
    </div>
  );
}
