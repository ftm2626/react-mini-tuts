import React from "react";
import { Counter } from "./components/Counter";
import { AppProvider } from "./components/6.AppProvider";

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
