/* eslint-disable react/no-unescaped-entities */
import React from "react";

export default function Index() {
  const string1 = "this is my string in this file";
  const string2 = "     hello world      ";
  let string3 = "";
  const myobject = { name: "john", age: 24 };
  const array1 = ["banana", "orange", "apple", "mango"];
  const array2 = [23, 45, 65, 43, 78];
  array2.forEach((e) => (string3 = string3 + e));

  return (
    <>
      <p>example string : {string1}</p>
      <p>
        use strict : defines that javascript code should execute in strict mode,
        ex. not using undeclare variables{" "}
      </p>
      <hr />
      <p>chatAt() : returns the character at a spicific index in a string</p>
      <p>chartAt(2) : {string1.charAt(2)}</p>
      <hr />
      <p>string[3] : {string1[3]}</p>
      <hr />
      <p>string over multiple lines : </p>
      <pre>Hello \ world</pre>this is not recomanded
      <pre>"hello" + "world"</pre>
      <hr />
      <p> obj = name:"john", age:24 </p>
      <p>obj.name : {myobject.name}</p>
      <hr />
      <p>trim(): this method removes white spaces from both sides of string </p>
      <p>
        original : {string2},length = {string2.length}{" "}
      </p>
      <p>
        trim : {string2.trim()} , length = {string2.trim().length}
      </p>
      <hr />
      <p>Array.isArray() : checks if an object is array</p>
      <p>Array.isArray(string) : {Array.isArray(string1)}</p>
      <p>Array.isArray(array) : {Array.isArray(array1)}</p>
      <hr />
      <p>
        array.forEach() : calls a function once for each array element, it does
        NOT return a new array.
      </p>
      <p>const text = ""</p>
      <p>
        [23,45,65,43,78].forEach(value ={">"} text = text + value) :{string3}
      </p>
      <hr />
      <p>
        array.map() : calls a function once for each array element, it DOES
        return a new array.
      </p>
      <p>
        [23,45,65,43,78].map((value,index,array) ={">"} value + 2) :{" "}
        {array2.map((e) => e + 2)}
      </p>
      <hr />
      <p>
        array.filter : filters out values based on condition. return multiple.
      </p>
      <p>
        [23,45,65,43,78].filter((value,index,array) ={">"} value {">"} 60) :{" "}
        {array2.filter((e) => e > 60)}
      </p>
      <hr />
      <p>array.reduce() : </p>
      <p>
        [23,45,65,43,78].reduce((total,value,index,array) ={">"} total + value){" "}
      </p>
      <p>{array2.reduce((t, v) => t + v)}</p>
      <hr />
      <p>
        array.reduceRight() : array.reduce() iterates over the array elements
        left to right but array.reduceRight() iterates ove the lements from
        right to left
      </p>
      <p>
        [23,45,65,43,78].reduceRight((total,value) ={">"} total +
        value){" "}
      </p>
      <p>{array2.reduceRight((t, v) => t + v)}</p>
      <hr />
    </>
  );
}
