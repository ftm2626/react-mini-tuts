/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable react/no-unescaped-entities */
"use client";
import React from "react";

export default function Index() {
  const string1 = "   hello world   ";
  const array1 = [
    ["apples", 300],
    ["pears", 900],
    ["bananas", 500],
  ];
  const object1 = Object.fromEntries(array1);
  const array2 = [
    [1, 2],
    [3, 4],
    [5, 6],
  ];
  const array3 = array2.flat();
  const array4 = [1, 2, 3, 4, 5, 6];
  const array5 = array4.flatMap((x) => x * 2);

  return (
    <div>
      <p>
        string.trimStart() / string.trimEnd() : works like trim() but removes
        whitespace only from the start/end of a string
      </p>
      <pre>
        {string1}.trimStart() :{string1.trimStart()}end
      </pre>
      <pre>
        {string1}.trimEnd() :{string1.trimEnd()}end
      </pre>
      <pre>
        {string1}.trim() :{string1.trim()}end
      </pre>
      <hr />
      <p>
        Object.fromEntries() : creates an object from iterable key/value pairs
      </p>
      <pre>
        Object.fromEntries([ ["apples", 300], ["pears", 900], ["bananas", 500],
        ]) : {"{"}apples : 300, bananas : 500 ,pears : 900,apples : 300 bananas
        : 500 pears : 900{"}"}
      </pre>
      <hr />
      <p>
        Optional catch Binding : From ES2019 you can omit the catch parameter if
        you don't need it
      </p>
      <pre>
        try
        {"{"}
        // code
        {"}"}
        catch (err)
        {"{"}
        // code
        {"}"}
      </pre>
      <pre>
        try
        {"{"}
        // code
        {"}"}
        catch
        {"{"}
        // code
        {"}"}
      </pre>
      <hr />
      <p>array.flat() : creates a new array by flattening a nested array</p>
      <pre>[[1,2],[3,4],[5,6]].flat() : [1, 2, 3, 4, 5, 6]</pre>
      <hr />
      <p>
        array.flatMap() : first maps all elements of an array and then creates a
        new array by flattening the array.
      </p>
      <pre>
        [1, 2, 3, 4, 5, 6].flatMap((x) ={">"} x * 2) : [2, 4, 6, 8, 10, 12]
      </pre>
      <hr />
      <p>revised functions</p>
      <p>Stable Array sort()</p>
      <p>Revised JSON.stringify()</p>
      <p>
        Separator Symbols : Line separators and paragraph separator symbols
        (\u2028 and \u2029) are now allowed in string literals.
      </p>
      <p>Revised Function toString()</p>
    </div>
  );
}
