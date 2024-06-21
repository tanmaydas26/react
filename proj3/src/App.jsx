import { useState } from "react";
import "./App.css";
import Card from "./components/Card";


function App() {
  const user = {
    name: "Emily",
    age:"36"
  }
  return (
    <>
      <Card user={user} />
    </>
  );
}

export default App;
