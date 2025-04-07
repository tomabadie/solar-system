import "./PlanetCard.css";
interface Moon {
  moon: string;
  rel: string;
}
interface PlanetCardInterface {
  planet: {
    id: string;
    name: string;
    englishName : string;
    moons?: Moon[];
    gravity: number;
    meanRadius: number;
    avgTemp: number;
  };
  changePlanet : (id : string) => void
}

const PlanetCard = ({ planet, changePlanet }: PlanetCardInterface) => {
  const earthMeanRadius = 6371.0084;
  const earthGravity = 9.8;

  return (
    <article>
      <h2>{planet.englishName}</h2>
      <section className="planet-data">
        <p>
          <strong>Average temperature :</strong> {planet.avgTemp} K ({Math.round((planet.avgTemp - 273.15)*100)/100} °C)
          <br />
          <strong>Gravity :</strong> {planet.gravity} m/s2 (i.e. {Math.round((planet.gravity / earthGravity)*100)/100} Earth gravity)
          <br />
          <strong>Radius :</strong> {planet.meanRadius} km (i.e. {Math.round((planet.meanRadius / earthMeanRadius)*100)/100} Earth radius)
          <br />
          <strong>Number of moons :</strong> {planet.moons ? planet.moons.length : "no moon"}
        </p>
        {planet.moons && (
            <ul>
                {planet.moons.map(el => (
                    <li key={el.moon}> 
                        <button 
                            type="button" 
                            onClick={() => changePlanet(el.rel.replace("https://api.le-systeme-solaire.net/rest/bodies/",""))}
                        >
                            {el.moon}
                        </button>
                    </li>
                ))}
            </ul>
        )}
      </section>
    </article>
  );
};

export default PlanetCard;
