import Hamburger from "../Hamburger/Hamburger";
import "./Header.css";

import { useContext } from "react";
import PlanetContext from "../../context/PlanetContext";


function Header() {
  const planets = [
    { id: "terre" },
    { id: "venus" },
    { id: "pluton" },
    { id: "uranus" },
    { id: "jupiter" },
    { id: "neptune" },
    { id: "mercure" },
    { id: "saturne" },
    { id: "mars" },
  ];

  const {planet, setPlanet} = useContext(PlanetContext);

  const changePlanet = (newPlanet : string) => {
    const newUrl = `https://api.le-systeme-solaire.net/rest/bodies/${newPlanet}`;
    fetch (newUrl)
    .then(response => response.json())
    .then(data => {
      setPlanet(data);
    })
    .catch(err => console.error(err))
  }

  return (
    <header className="top-header">
      <div className="hamburger">
        <Hamburger />
      </div>
      <nav className="desktop-nav">
        {planets.map((planet) => (
          <button
            type="button"
            key={planet.id}
            onClick={() => changePlanet(planet.id)}
          >
            {planet.id}
          </button>
        ))}
      </nav>
    </header>
  );
}

export default Header;
