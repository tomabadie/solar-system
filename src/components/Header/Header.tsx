import Hamburger from "../Hamburger/Hamburger";
import "./Header.css";

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
