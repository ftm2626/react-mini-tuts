import React from "react";
import Greet from "./components/Greet";

function Index() {
  return (
    <div>
      <h1 data-testid="1">this is my text</h1>
      <Greet name="jasi" />
    </div>
  );
}

export default Index;
