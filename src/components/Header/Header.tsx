import { useState } from "react";
import Hamburger from "../Hamburger/Hamburger";
import "./Header.css";

interface HeaderProps {
  changePlanet: (id: string) => void;
}

function Header({ changePlanet }: HeaderProps) {
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
  const [hamburgerOpen, setHamburgerOpen] = useState(false);
  const toggleHamburger = () => {
    setHamburgerOpen(!hamburgerOpen);
  };
  return (
    <header className="top-header">
      <div className="hamburger" onClick={toggleHamburger}>
        <Hamburger />
      </div>
      {/* Desktop */}
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
      {/* navBar onclick burger */}
      {hamburgerOpen ? (
        <nav className="mobile-nav">
          {planets.map((planet) => (
            <button
              type="button"
              key={planet.id}
              onClick={() => {
                changePlanet(planet.id);
              }}
            >
              {planet.id}
            </button>
          ))}
        </nav>
      ) : null}
    </header>
  );
}

export default Header;
