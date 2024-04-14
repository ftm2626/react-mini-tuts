import React from "react";
import { CounterPropsT } from "./7.counterProps.types";

export default function CounterProp(props: CounterPropsT) {
  return (
    <div>
      <h1>Counter Props</h1>
      <p>{props.count}</p>
      {props.handleIncrement && (
        <button onClick={props.handleIncrement}>increment</button>
      )}
      {props.handleDecrement && (
        <button onClick={props.handleDecrement}>decrement</button>
      )}
    </div>
  );
}
