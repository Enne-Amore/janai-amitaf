import PageTitle from "@/components/pageTitle";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <section
        className={`flex flex-col justify-center gap-8 w-10/12 lg:w-9/12 mx-auto my-10`}
      >
        <PageTitle label={"Sobre"} />

        <article
          className={`flex flex-col lg:flex-row items-center justify-center gap-6 lg:gap-3 mx-6 lg:mx-auto`}
        >
          <figure>
            <Image
              src={`/assets/logo.png`}
              alt="Logo de artista: Janai Amitáf Produções"
              width={240}
              height={0}
              className={`w-60 h-auto`}
            />
          </figure>

          <div
            className={`bg-[#F2B705] rounded-3xl lg:rounded-4xl px-6 lg:px-8 py-4 lg:py-6 lg:w-8/12 space-y-3 shadow`}
          >
            <p
              className={`text-[#252228] text-xl lg:text-2xl text-shadow-2xs leading-8 lg:leading-9`}
            >
              Janai Amitáf Produções é uma empresa focada em duas frentes: colocar minhas histórias no mundo e ajudar outros criativos a botarem as suas.
            </p>

            <p
              className={`text-[#252228] text-xl lg:text-2xl text-shadow-2xs leading-8 lg:leading-9`}
            >
              É uma iniciativa sobre sonhos e sobre ser apaixonado por espalha-los por aí. Criando para esquisites e uniques com olhos brilhantes e imaginação de multiverso.
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
