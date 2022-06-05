import React from "react";
import "./App.css";
import { BadSingleResponsibilityComponent } from "./snippets/01-singleResponsibility/react/before";
import { GoodSingleResponsibilityComponent } from "./snippets/01-singleResponsibility/react/after";

function App() {
  return (
    <>
      <BadSingleResponsibilityComponent />
      <GoodSingleResponsibilityComponent />
    </>
  );
}

export default App;
