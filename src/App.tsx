import { useState } from "react";
import "./App.css";

import Header from "./components/Header/Header";
import PlanetCard from "./components/PlanetCard/PlanetCard";

const initialPlanet = {
  id : "terre",
  name : "La Terre",
  englishName : "Earth",
  moons : [
      {
          moon : "La lune",
          rel : "https://api.le-systeme-solaire.net/rest/bodies/lune"
      }
  ],
  gravity: 9.8,
  meanRadius: 6371.0084,
  avgTemp: 288,
};

function App() {
  const [planet, setPlanet] = useState(initialPlanet);

  const changePlanet = (newPlanet: string) => {
    const newUrl = `https://api.le-systeme-solaire.net/rest/bodies/${newPlanet}`;
    fetch(newUrl)
      .then((response) => response.json())
      .then((data) => {
        setPlanet(data);
      })
      .catch((err) => console.error(err));
  };

  return (
    <>
      <main className="main-container">
        <Header changePlanet={changePlanet} />
        <PlanetCard planet={planet} changePlanet={changePlanet} />
      </main>
    </>
  );
}

export default App;
