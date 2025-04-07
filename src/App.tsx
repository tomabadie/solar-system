import { useState } from "react";
import "./App.css";

import Header from "./components/Header/Header";
import PlanetCard from "./components/PlanetCard/PlanetCard";

function App() {
  return (
    <>
      <Header />
      <PlanetCard planet={planet} />
    </>
  );
}

export default App;
