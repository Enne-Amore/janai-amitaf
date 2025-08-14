// import Image from "next/image";

export default async function Project({params} : {params: Promise<{id: string}>}) {
  const { id } = await params;

  return (
    <main>
      <section className={`flex flex-col justify-center gap-8 w-9/12 mx-auto my-10`}>
        <h2 className={`bg-gradient-to-r from-[#F1ACF2] to-[#FCFAFF00] text-3xl font-medium text-shadow-2xs px-8 py-4 rounded-full`} lang="en">Cards {id} </h2>

        <p className={`bg-[#F2B705] text-2xl text-shadow-2xs leading-9 rounded-4xl px-8 py-6 w-8/12 shadow`}>
          Cards colecionáveis baseados no meu trabalho ficcional, por enquanto
          só daquele que se passa em Via Lúmina. E eles são vendidos na loja.
        </p>

        {/* <div className="cartas">
          <figure className="carta">
            <Image
              src="../img/brisa-magika-card.png"
              alt="Card: Brisa Magika"
              className={``}
            />
          </figure>

          <figure className="carta">
            <Image src="../img/cron-card.png" alt="Card: Cron" className={``} />
          </figure>

          <figure className="carta">
            <Image
              src="../img/terra-card.png"
              alt="Card: Terra"
              className={``}
            />
          </figure>

          <figure className="carta">
            <Image
              src="../img/elixir-essencia-card.png"
              alt="Card: Elixir da Essência"
              className={``}
            />
          </figure>

          <figure className="carta">
            <Image
              src="../img/crisalys-card.png"
              alt="Card: Crisalys"
              className={``}
            />
          </figure>
        </div> */}
      </section>
    </main>
  );
}
