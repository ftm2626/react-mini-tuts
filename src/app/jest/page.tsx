import React from "react";
import Greet from "./components/Greet";
import { Application } from "./components/Application";
import { Skills } from "./components/skills";

function Index() {
  return (
    <div>
      <h1 data-testid="1">this is my text</h1>
      {/* <Greet name="jasiiii" /> */}
      {/* <Application /> */}
      <Skills skills={["html", "css"]} />
    </div>
  );
}

export default Index;
