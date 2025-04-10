import { useState } from "react";
import Hamburger from "../Hamburger/Hamburger";
import "./Header.css";

interface HeaderProps {
  changePlanet: (id: string) => void;
}

function Header({ changePlanet }: HeaderProps) {
  const planets = [
    { id: "Mercure" },
    { id: "Venus" },
    { id: "Terre" },
    { id: "Mars" },
    { id: "Jupiter" },
    { id: "Saturne" },
    { id: "Uranus" },
    { id: "Neptune" },
    { id: "Pluton" },
  ];
  const [hamburgerOpen, setHamburgerOpen] = useState(false);
  const toggleHamburger = () => {
    setHamburgerOpen(!hamburgerOpen);
  };

  return (
    <header className="top-header">
      <div
        className="hamburger"
        onClick={toggleHamburger}
        onKeyUp={toggleHamburger}
      >
        <Hamburger />
      </div>
      {/* Desktop */}
      <nav className="desktop-nav">
        {planets.map((planet) => (
          <button
            type="button"
            key={planet.id}
            onClick={() => changePlanet(planet.id)}
            className={planet.id}
          >
            {planet.id}
          </button>
        ))}
      </nav>
      {/* navBar onclick burger */}
      {hamburgerOpen && (
        <nav className="mobile-nav">
          {planets.map((planet) => (
            <button
              type="button"
              key={planet.id}
              onClick={() => {
                changePlanet(planet.id);
              }}
              className={planet.id}
            >
              {planet.id}
            </button>
          ))}
        </nav>
      )}
    </header>
  );
}

export default Header;
