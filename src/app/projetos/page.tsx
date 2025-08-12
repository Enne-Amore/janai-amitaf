import Image from "next/image";
import Link from "next/link";
import cards from "../../assets/cards-capa.png";
import pets from "../../assets/pets-capa.png";
import cometaHeidi from "../../assets/cometa-heidi-capa.png";
import galaxia from "../../assets/galaxia-capa.png";

export default function Projects() {
  return (
    <main>
      <section className={`flex flex-col justify-center gap-8 w-9/12 mx-auto my-10`}>
        <h1 className={`bg-gradient-to-r from-[#F1ACF2] to-[#FCFAFF00] text-3xl font-medium text-shadow-2xs px-8 py-4 rounded-full`}>Projetos</h1>

        <ul className={`flex gap-10 mx-10`}>
          <li className={`bg-[#F2B705] h-max rounded-4xl shadow`}>
            <Link
              href="cards"
              aria-label="Ir à página do projeto: Cards"
            >
              <figure className={`flex flex-col items-center`}>
                <Image
                  src={cards}
                  alt="Capa do projeto: Cards"
                  width={0}
                  height={0}
                  className={`rounded-t-4xl`}
                />

                <figcaption lang="en" className={`text-2xl text-center text-shadow-2xs p-4`}>Cards</figcaption>
              </figure>
            </Link>
          </li>

          <li className={`bg-[#F2B705] h-max rounded-4xl shadow`}>
            <Link
              href="comissions-pets"
              className={``}
              aria-label="Ir à página do projeto: Commissions de Pets"
            >
              <figure className={`flex flex-col items-center`}>
                <Image
                  src={pets}
                  alt="Capa do projeto: Commissions De Pets"
                  width={0}
                  height={0}
                  className={`rounded-t-4xl`}
                />
                <figcaption lang="en" className={`text-2xl text-center text-shadow-2xs p-4`}>
                  Commissions de Pets
                </figcaption>
              </figure>
            </Link>
          </li>

          <li className={`bg-[#F2B705] h-max rounded-4xl shadow`}>
            <Link
              href="cometa-heidi"
              className={``}
              aria-label="Ir à página do projeto: O Cometa De Heidi"
            >
              <figure className={`flex flex-col items-center`}>
                <Image
                  src={cometaHeidi}
                  alt="Capa do projeto: O Cometa de Heidi"
                  width={0}
                  height={0}
                  className={`rounded-t-4xl`}
                />
                <figcaption className={`text-2xl text-center text-shadow-2xs p-4`}>O Cometa de Heidi</figcaption>
              </figure>
            </Link>
          </li>

          <li className={`bg-[#F2B705] h-max rounded-4xl shadow`}>
            <Link
              href="galaxia-estorias"
              className={``}
              aria-label="Ir à página do projeto: Uma Galáxia De Éstorias"
            >
              <figure className={`flex flex-col items-center`}>
                <Image
                  src={galaxia}
                  alt="Capa do projeto: Uma Galáxia de Éstorias"
                  width={0}
                  height={0}
                  className={`rounded-t-4xl`}
                />

                <figcaption className={`text-2xl text-center text-shadow-2xs p-4`}>Uma Galáxia de Éstorias</figcaption>
              </figure>
            </Link>
          </li>
        </ul>
      </section>
    </main>
  );
}
