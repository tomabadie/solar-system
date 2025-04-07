import "./PlanetCard.css"

interface PlanetCardInterface {
    planet : {
        id : string,
        name : string,
        moons? : [
            {
                moon : string,
                rel : string
            }
        ],
        gravity : number,
        meanRadius : number,
        avgTemp : number
    }
}

const PlanetCard = ( {planet} : PlanetCardInterface) => {

    const earthMeanRadius = 6371.00840;
    const earthGravity = 9.8;

    return (
        <article>
            <h2>{planet.name}</h2>
            <section className="planet-data">
                <p>
                <strong>Average temperature :</strong> {planet.avgTemp} K - {planet.avgTemp - 273.15} °C
                <br />
                <strong>Gravity :</strong> {planet.gravity} m/s2 (i.e. {planet.gravity / earthGravity} Earth gravity)
                <br />
                <strong>Radius :</strong> {planet.meanRadius} km (i.e. {planet.meanRadius / earthMeanRadius} Earth radius)
                <br />
                <strong>Number of moons :</strong> {planet.moons ? planet.moons.length : "no moon"}
                </p>
            </section>
        </article>
    )
}

export default PlanetCard;