import "./PlanetCard.css";
interface Moon {
  moon: string;
  rel: string;
}
interface PlanetCardInterface {
  planet: {
    id: string;
    name: string;
    moons?: Moon[];
    gravity: number;
    meanRadius: number;
    avgTemp: number;
  };
}

const PlanetCard = ({ planet }: PlanetCardInterface) => {
  const earthMeanRadius = 6371.0084;
  const earthGravity = 9.8;

  return (
    <article>
      <h2>{planet.name}</h2>
      <section className="planet-data">
        <p>
          <strong>Average temperature :</strong> {planet.avgTemp} K -{" "}
          {planet.avgTemp - 273.15} °C
          <br />
          <strong>Gravity :</strong> {planet.gravity} m/s2 (i.e.{" "}
          {planet.gravity / earthGravity} Earth gravity)
          <br />
          <strong>Radius :</strong> {planet.meanRadius} km (i.e.{" "}
          {planet.meanRadius / earthMeanRadius} Earth radius)
          <br />
          <strong>Number of moons :</strong>{" "}
          {planet.moons ? planet.moons.length : "no moon"}
        </p>
      </section>
    </article>
  );
};

export default PlanetCard;
