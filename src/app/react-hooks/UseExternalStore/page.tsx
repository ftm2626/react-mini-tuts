"use client"
import store, { type ValuesStore } from "./store";
import React from "react";

export default function index() {
  const DisplayValue = ({ item }: { item: keyof ValuesStore }) => (
    <div>
      {item}: {store.useStore((state) => state[item])}
    </div>
  );

  const IncrementValue = ({ item }: { item: keyof ValuesStore }) => (
    <button
      onClick={() => {
        const state = store.getState();
        store.setState({
          ...state,
          [item]: state[item] + 1,
        });
      }}
    >
      Increment {item}
    </button>
  );
  return (
    <div>
      <p>
        managing a connection between and external store like redux/mobx and
        your react app{" "}
      </p>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          maxWidth: 600,
          gap: "1rem",
        }}
      >
        <IncrementValue item="value1" />
        <DisplayValue item="value1" />
        <IncrementValue item="value2" />
        <DisplayValue item="value2" />
      </div>
    </div>
  );
}
