import React from "react";
import Greet from "./components/Greet";
import { Application } from "./components/Application";
import { Skills } from "./components/skills";
import { Counter } from "./components/Counter";

function Index() {
  return (
    <div>
      <h1 data-testid="1">this is my text</h1>
      {/* <Greet name="jasiiii" /> */}
      {/* <Application /> */}
      {/* <Skills skills={["html", "css"]} /> */}
      <Counter />
    </div>
  );
}

export default Index;
