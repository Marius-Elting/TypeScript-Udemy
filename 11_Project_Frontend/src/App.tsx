import React from "react";
import { useState } from "react";
import "./App.css";
import { FC, ReactElement } from "react";

const App: FC = (): ReactElement => {
  const [count, setCount] = useState(0);

  return <h1>hello</h1>;
};

export default App;
