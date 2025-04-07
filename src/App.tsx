import { useState } from "react";
import { createContext } from "react";
import "./App.css";

import Header from "./components/Header/Header";
import PlanetCard from "./components/PlanetCard/PlanetCard";
import PlanetContext from "./context/PlanetContext";

const initialPlanet = {
  id : "terre",
  name : "La Terre",
  moons : [
      {
          moon : "La lune",
          rel : "https://api.le-systeme-solaire.net/rest/bodies/lune"
      }
  ],
  gravity : 9.8,
  meanRadius : 6371.00840,
  avgTemp : 288
}

function App() {

  const [planet, setPlanet] = useState(initialPlanet);

  return (
    <>
      <PlanetContext.Provider value={{planet : planet, setPlanet : setPlanet}}>
        <Header />
        <PlanetCard planet={planet} />
      </PlanetContext.Provider>
    </>
  );
}

export default App;
