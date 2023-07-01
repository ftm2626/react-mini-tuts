import React from "react";
import Greet from "./components/Greet";
import { Application } from "./components/Application";
import { Counter } from "./components/Counter";
import { AppProvider } from "./components/AppProvider";

function Index() {
  return (
    <AppProvider>
      <h1 data-testid="1">this is my text</h1>
      {/* <Greet name="jasiiii" /> */}
      {/* <Application /> */}
      {/* <Skills skills={["html", "css"]} /> */}
      <Counter />
    </AppProvider>
  );
}

export default Index;
