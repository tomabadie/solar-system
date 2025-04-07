import "./PlanetCard.css"


const PlanetCard = () => {
    return (
        <article>
            <h2>Planet Name</h2>
            <section className="planet-data">
                <p>
                <strong>Average temperature :</strong>
                <br />
                <strong>Gravity :</strong>
                <br />
                <strong>Radius compared to Earth :</strong>
                <br />
                <strong>Number of moons :</strong>
                </p>
            </section>
        </article>
    )
}

export default PlanetCard;