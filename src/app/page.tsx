import Image from "next/image";
import logo from "../assets/logo.png";

export default function Home() {
  return (
    <main>
      <section className={``}>
        <h1>Sobre</h1>

        <article className={``}>
          <figure>
            <Image
              src={logo}
              alt="Logo de artista: Janai Amitáf Produções"
              width={0}
              height={0}
              className={`w-60 h-auto`}
            />
          </figure>

          <div className={``}>
            <p>
              Janai Amitáf Produções é uma empresa focada em duas frentes:
              colocar minhas histórias no mundo e ajudar outros criativos a
              botarem as suas.
            </p>

            <p>
              É uma iniciativa sobre sonhos e sobre ser apaixonado por
              espalha-los por aí. Criando para esquisites e uniques com olhos
              brilhantes e imaginação de multiverso.
            </p>
          </div>
        </article>
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
