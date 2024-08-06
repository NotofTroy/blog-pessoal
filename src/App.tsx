import Home from "./paginas/home/Home";
import "./App.css";
import { useState } from "react";


function App() {
  return (
    <>
      <h1>App</h1>
      <Home
        title="Componente Home"
        description="Este é um componente React que recebe props."
      />
    </>

  );
}

export default App;