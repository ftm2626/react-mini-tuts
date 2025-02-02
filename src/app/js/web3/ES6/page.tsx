/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable react/no-unescaped-entities */
"use client";
import React from "react";
let string3 = "this is my string1 sentence.";
let string1 = "string1";
let string2 = "";
let object1 = { name: "john", age: 50 };
let id = Symbol("id");
object1[id] = 123456;

const array1 = Array.from("abcdefg");
const array2 = ["Banana", "Orange", "Apple", "Mango"];
const findarray = array2.find((i) => i == "Mango");
const findarrayIndex = array2.findIndex((i) => i == "Mango");

console.log(findarray);

const forof = () => {
  for (let x of string1) {
    string2 = x + string2;
  }
};
forof();

export default function Index() {
  return (
    <div>
      <p>
        let and const : let keyword allows you to declear a variable with block
        scope. const is the same but can not be changed.
      </p>
      <hr />
      <p>
        arrow functions : for writing functions. they do not need the 'function'
        keyword or the return 'keyword'
      </p>
      <p>
        arrow functions do NOT have "this" keyword, they are not suited fo
        defining object methods. they are not hoised and must be defined before
        using.
      </p>
      <hr />
      <p>
        the spred oprator (...) : the ... oprator expands an iterable (like an
        array) into more elements.
      </p>
      <hr />
      <p>
        the for/of loop : loops through the values of an iterable objects such
        as : Arrays, Strings, Maps, NodeLists and more.
      </p>
      <p>
        for(let x of 'string1') {"{"} string2 = x + string2 {"}"} : {string2}
      </p>
      <hr />
      <p>
        Promises : a promise in a javascript object that links 'producing code'
        and 'consuming code', 'producing code' can take some time and 'consuming
        code' must wait for the result.
      </p>
      <pre>
        const myPromise = new promise(function(myResolve,myReject){"{"}{" "}
        myResolve()--{">"} when successfull; myReject() --{">"} when error {"}"}
        )
      </pre>
      <pre>
        myPromise.then(function (value) {"{"}code if successfull{"}"},
        function(error) {"{"} code if some error{"}"} )
      </pre>
      <hr />
      <p>
        the symbol type : a js symbol is a primitive datatype like number. it
        represents a uniqe 'hidden' identifier that no other code can
        accidentally access.
      </p>
      <pre>
        const person = {"{"} name:'john',age :50 {"}"}{" "}
      </pre>
      <pre>let id = Symbol(id)</pre>
      <pre>person[id] = 123456</pre>
      <p>person[id] = {object1[id]}</p>
      <p>person.id : {object1.id} //undefined</p>
      <p>
        Symbols are always unique. if you create 2 the values will be diffrent
      </p>
      <hr />
      <p>
        default prameter values : funciton myfunc(x,y = 10) return x + y ;
        myfunc(5) --{">"} returns 50
      </p>
      <hr />
      <p>
        funciton reset parameter : (...props) allows function to treat an
        indefinit number of arguments as an ARRAY
      </p>
      <hr />
      <p>
        String.includes() : returns boolean if an string includes something.
      </p>
      <p>
        {string3}.inclues({string1}) : {string3.includes(string1)}
      </p>
      <hr />
      <p>
        String.startsWith() / String.endsWith() : returns a boolean if a string
        starts/ends with a spicific value.
      </p>
      <pre>
        {string3}.startsWith("this") : {string3.startsWith("this")} true
      </pre>
      <pre>
        {string3}.endsWith("string1") : {string3.endsWith("string1")} false
      </pre>
      <hr />
      <p>
        Array.from() : returns an array from any object with a length property
        or any iterable object.
      </p>
      <pre>Array.from("abcdefg") : [a,b,c,d,e,f,g]</pre>
      <hr />
      <p>
        array.keys() : returns an array iterator object with the keys of an
        array
      </p>
      <pre>["Banana", "Orange", "Apple", "Mango"].keys() : </pre>
      <hr />
      <p>
        array.find() : returns the value of the first array element that passes
        a test function
      </p>
      <pre>
        ["Banana", "Orange", "Apple", "Mango"].find((value,index,array) ={">"}{" "}
        return value === "Mango") : {findarray}
      </pre>
      <hr />
      <p>
        array.findIndex() : return the index of the first array element that
        passes a test funciton
      </p>
      <pre>
        ["Banana", "Orange", "Apple", "Mango"].findIndex((value,index,array) =
        {">"} return value === "Mango") : {findarrayIndex}
      </pre>
      <hr />
      <p>Math.trunc(x) : returns the integer part of x</p>
      <pre>Math.trunc(1.4) : {Math.trunc(1.4)}</pre>
      <pre>Math.trunc(1.7) : {Math.trunc(1.7)}</pre>
      <pre>Math.trunc(-1.5) : {Math.trunc(-1.5)}</pre>
      <hr />
      <p>Math.sign(x) : returns if x is negative, null or positive</p>
      <pre>Math.sign(-2) : {Math.sign(-2)} </pre>
      <pre>Math.sign(5) : {Math.sign(5)} </pre>
      <pre>Math.sign(0) : {Math.sign(0)} </pre>
      <pre>Math.sign(3.5) : {Math.sign(3.5)} </pre>
      <hr />
      <p>Math.cbrt(x) : returns the cube root of x</p>
      <pre>Math.cbrt(8) : {Math.cbrt(8)}</pre>
      <pre>Math.cbrt(25) : {Math.cbrt(25)}</pre>
      <pre>Math.cbrt(30) : {Math.cbrt(30)}</pre>
      <hr />
      <p>Math.log2(x) : returns the base 2 legarithm of x </p>
      <pre>Math.log2(2) : {Math.log2(2)}</pre>
      <pre>Math.log2(40) : {Math.log2(10)}</pre>
      <pre>Math.log2(15) : {Math.log2(15)}</pre>
      <hr />
      <p>Math.log10(x) : returns the base 10 legarithm of x </p>
      <pre>Math.log10(10) : {Math.log10(10)}</pre>
      <pre>Math.log10(40) : {Math.log10(10)}</pre>
      <pre>Math.log10(15) : {Math.log10(15)}</pre>
      <hr />
      <p>Number.isInteger(x) : returns true f x is integer</p>
      <hr />
      <p>
        Number.isSafeInteger(x) : returns true f x is safe integer. A safe
        integer is an integer that can be exactly represented as a double
        precision number.
      </p>
      <hr />
      <p>isFinite() : returns false if the argument is Infinity or NaN.</p>
      <pre>isFinite(10/0); // returns false </pre>
      <pre> isFinite(10/1); // returns true</pre>
      <hr />
      <p>isNaN() : returns true if the argument is NaN</p>
      <hr />
      <p>
        object.entries() : returns an Array Iterator object with key/value
        pairs:
      </p>
      <hr />
      <p>Modules</p>
      <pre>
        import {"{"} name, age {"}"} from "./person.js"
      </pre>
      <pre>import message from "./message.js";</pre>
    </div>
  );
}
