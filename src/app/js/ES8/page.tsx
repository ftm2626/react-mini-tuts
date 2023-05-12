/* eslint-disable react/no-unescaped-entities */
"use client";
import React from "react";
const text = "text";
const object = {
  firstName: "john",
  lastName: "doe",
  age: 50,
  eyeColor: "blue",
};
const array1 = Object.entries(object);
const array2 = Object.values(object);
const array3 = Object.keys(object);
const array4 = Object.getOwnPropertyDescriptor(object, "age");
console.log(array4);

export default function Index() {
  return (
    <div>
      <p>
        string.padStart()/padEnd() : adds a spicific text to the beginning and
        ending of a string
      </p>
      <pre>text.padStart(3,"9") : {text.padStart(3, "9")}</pre>
      <pre>text.padEnd(3,"9") : {text.padEnd(3, "9")}</pre>
      <hr />
      <p>
        Object.entries() : returns an array of the key/value pains in an object,
        it also makes it simple to convert objects to Map
      </p>
      <pre>
        Object.entries(object) : ['firstName', 'john']; ['lastName', 'doe'];
        ['age', 50]; ['eyeColor', 'blue']
      </pre>
      <hr />
      <p>
        Object.values() : returns a single dimension array of the object value.
      </p>
      <pre>Object.values(object) : ['john', 'doe', 50, 'blue']</pre>
      <hr />
      <p>
        Object.getOwnPropertyDescriptor() : Gets the own property descriptor of
        the specified object. An own property descriptor is one that is defined
        directly on the object and is not inherited from the object's
      </p>
      <pre>
        Object.getOwnPropertyDescriptor(object, "age") :{"{"}value: 50,
        writable: true, enumerable: true, configurable: true
        {"}"}
      </pre>
    </div>
  );
}
