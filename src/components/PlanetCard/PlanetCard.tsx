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
    <article className="planet-card">
      <h2>{planet.name}</h2>
      <ul className="planet-data">
        <li><strong>Température moyenne :</strong> {planet.avgTemp} K ({Math.round((planet.avgTemp - 273.15)*100)/100} °C)</li>
        <li><strong>Pesanteur :</strong> {planet.gravity} m.s<sup>-2</sup> ({Math.round((planet.gravity / earthGravity)*100)/100} fois la pesanteur terrestre)</li>
        <li><strong>Rayon :</strong> {planet.meanRadius} km ({Math.round((planet.meanRadius / earthMeanRadius)*100)/100} fois le rayon de la Terre)</li>
        <li><strong>Nombre de satellites :</strong> {planet.moons ? planet.moons.length : 0}</li>
        <li>{planet.moons && (
          <ul className="moons-list">
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
          </ul>)}
        </li>
      </ul>
    </article>
  );
};

export default PlanetCard;
