"use client";
import React, { useReducer } from "react";
import { myReducer, myInitialState, ActionsType } from "./reducerInfo";

export default function Index() {
  const [state, dispatch] = useReducer(myReducer, myInitialState);
  return (
    <div>
      <h1>UseReducer</h1>
      <div>
        <button onClick={() => dispatch({ type: ActionsType.decrease })}>
          -
        </button>
        {state.number}
        <button onClick={() => dispatch({ type: ActionsType.increase })}>
          {" "}
          +{" "}
        </button>
      </div>
      <div>
        <input
          type="text"
          onChange={(e) =>
            dispatch({ type: ActionsType.textChange, payload: e.target.value })
          }
          value={state.text}
        />
        this text is rendering from useReducer :{state.text}
      </div>
    </div>
  );
}
