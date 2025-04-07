import "./Header.css";
function Header() {
  const planets = [
    "Terre",
    "Venus",
    "Mars",
    "Pluton",
    "Uranus",
    "Jupiter",
    "Neptune",
    "Mercure",
    "Saturne",
  ];
  return (
    <header>
      <nav className="desktop-nav">
        <ul>
          <li>
            {planets.map((planet) => (
              <button type="button" key={planet}>
                {planet}
              </button>
            ))}
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
