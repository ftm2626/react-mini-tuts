/* eslint-disable react/no-unescaped-entities */
import React from "react";
let string1 = "string1";
let string2 = "";
let object1 = {name:'john',age :50 }
let id = Symbol('id')
object1[id] = 123456

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
      <p>the symbol type : a js symbol is a primitive datatype like number. it represents a uniqe 'hidden' identifier that no other code can accidentally access.</p>
      <pre>const person = {'{'} name:'john',age :50 {'}'} </pre>
      <pre>let id = Symbol(id)</pre>
      <pre>person[id] = 123456</pre>
      <p>person[id] = {object1[id]}</p>
      <p>person.id : {object1.id}  //undefined</p>
      <p>Symbols are always unique. if you create 2 the values will be diffrent</p>
    </div>
  );
}
