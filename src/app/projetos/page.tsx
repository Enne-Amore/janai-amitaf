import Image from "next/image";
import cards from "../../assets/cards-capa.png";
import pets from "../../assets/pets-capa.png";
import cometaHeidi from "../../assets/cometa-heidi-capa.png";
import galaxia from "../../assets/galaxia-capa.png";

export default function Projects() {
  return (
    <main>
      <section className={``}>
        <h1>Projetos</h1>

        <div className="cards">
          <a
            href="cards.html"
            className="card"
            aria-label="Ir à página do projeto: Cards"
          >
            <figure>
              <Image
                src={cards}
                alt="Capa do projeto: Cards"
                width={0}
                height={0}
                className={``}
              />
            </figure>

            <h2 lang="en">Cards</h2>
          </a>

          <a
            href="comissions-pets.html"
            className="card"
            aria-label="Ir à página do projeto: Commissions de Pets"
          >
            <figure>
              <Image
                src={pets}
                alt="Capa do projeto: Commissions De Pets"
                width={0}
                height={0}
                className={``}
              />
            </figure>

            <h2>
              <span lang="en">Commissions</span>
              De
              <span lang="en">Pets</span>
            </h2>
          </a>

          <a
            href="cometa-heidi.html"
            className="card"
            aria-label="Ir à página do projeto: O Cometa De Heidi"
          >
            <figure>
              <Image
                src={cometaHeidi}
                alt="Capa do projeto: O Cometa de Heidi"
                width={0}
                height={0}
                className={``}
              />
            </figure>

            <h2>O Cometa De Heidi</h2>
          </a>

          <a
            href="galaxia-estorias.html"
            className="card"
            aria-label="Ir à página do projeto: Uma Galáxia De Éstorias"
          >
            <figure>
              <Image
                src={galaxia}
                alt="Capa do projeto: Uma Galáxia de Éstorias"
                width={0}
                height={0}
                className={``}
              />
            </figure>

            <h2>Uma Galáxia De Éstorias</h2>
          </a>
        </div>
      </section>

      <span
        className="material-symbols-outlined sr-only"
        id="topo"
        aria-hidden="true"
        aria-label="Volte ao topo da página clicando aqui"
        tabIndex={0}
      >
        shift
      </span>
    </main>
  );
}
