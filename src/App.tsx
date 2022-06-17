import React from "react";
import "./App.css";
import { BadSingleResponsibilityComponent } from "./snippets/01-singleResponsibility/react/before";
import { GoodSingleResponsibilityComponent } from "./snippets/01-singleResponsibility/react/after";
import { DisplayUserName } from "./snippets/04-interfaceSegregation/react/before";

function App() {
  return (
    <>
      <BadSingleResponsibilityComponent />
      <GoodSingleResponsibilityComponent />
      <DisplayUserName />
    </>
  );
}

export default App;
