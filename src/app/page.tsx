import Image from "next/image";
import logo from "../assets/logo.png";

export default function Home() {
  return (
    <main>
      <section className={`flex flex-col justify-center gap-8 w-9/12 mx-auto my-10`}>
        <h1 className={`bg-gradient-to-r from-[#F1ACF2] to-[#FCFAFF00] text-3xl font-medium text-shadow-2xs px-8 py-4 rounded-full`}>Sobre</h1>

        <article className={`flex items-center justify-center gap-3`}>
          <figure>
            <Image
              src={logo}
              alt="Logo de artista: Janai Amitáf Produções"
              width={0}
              height={0}
              className={`w-60 h-auto`}
            />
          </figure>

          <div className={`bg-[#F2B705] rounded-4xl px-8 py-6 w-8/12 space-y-3 shadow`}>
            <p className={`text-2xl text-shadow-2xs leading-9`}>
              Janai Amitáf Produções é uma empresa focada em duas frentes:
              colocar minhas histórias no mundo e ajudar outros criativos a
              botarem as suas.
            </p>

            <p className={`text-2xl text-shadow-2xs leading-9`}>
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
