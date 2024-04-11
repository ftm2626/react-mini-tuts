import React from "react";
import { Counter } from "./components/4.Counter";
import { AppProvider } from "./components/5.AppProvider";

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
//37