import DrawingTable, { DrawingTableInterface } from "@/components/drawingTable";
import PageTitle from "@/components/pageTitle";
import Image from "next/image";

export default function Services() {
  const tables: DrawingTableInterface[] = [
    {
      title: "Desenharei",
      items: [
        "Humanos",
        "Animais/Pokémon e cia",
        "Furry",
        "Seres Mitológicos/Mágicos",
        "Aliens",
        "Robôs humanoides e zoomórficos",
        "Fanarts/OCs/Personagens de RPG",
        "Familiares e Pets",
      ],
    },
    {
      title: "Não desenharei",
      items: [
        "Gore",
        "Veículo/meccha",
        "Mensagens de ódio",
        "Personagens infantis",
        "Animais em situações adultas",
        "Quaisquer contextos religiosos reais",
      ],
    },
  ];

  return (
    <main>
      <section
        className={`flex flex-col justify-center gap-8 w-10/12 lg:w-9/12 mx-auto my-10 animate-(--page-section-animation)`}
      >
        <PageTitle label={"Produtos e Serviços"} />

        <div className={`flex flex-col items-center gap-16 mx-6 lg:mx-10`}>
          <article className={`flex flex-col lg:flex-row justify-center`}>
            <figure>
              <Image
                src={`/assets/precos-de-servicos.avif`}
                alt="Preços do desenho: busto por 30 reais, meio-corpo por 40 reais e corpo inteiro por 50 reais"
                width={384}
                height={384}
                className={`w-96 h-auto rounded-t-3xl lg:rounded-t-none lg:rounded-b-4xl lg:rounded-l-4xl shadow`}
              />
            </figure>

            <div
              className={`flex flex-col items-center gap-1.5 bg-[#F2B705] lg:w-5/12 h-max px-6 pt-5 pb-6 rounded-b-3xl lg:rounded-bl-none lg:rounded-br-4xl lg:rounded-tr-4xl space-y-5 shadow`}
            >
              <p
                className={`text-[#252228] text-xl lg:text-2xl text-shadow-2xs leading-9`}
              >
                Uma <span lang="en">commission</span> é um desenho que uma pessoa física encomenda a um artista para uso pessoal.
              </p>

              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSd_1A2bwvCD-MPEfDox7ygLS2W3tbfo7WL9oroz39gz487Q6g/viewform?pli=1"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Encomendar desenho via formulário"
                className={`bg-[#C522F2] text-[#FCFAFF] text-xl lg:text-2xl text-shadow-2xs text-center font-semibold px-8 py-4 rounded-3xl lg:rounded-full shadow transition hover:bg-[#6C0CF2] focus-visible:bg-[#6C0CF2] active:bg-[#FCFAFF] active:text-[#6C0CF2]`}
              >
                Encomendar Desenho
              </a>
            </div>
          </article>

          <div
            className={`flex flex-col lg:flex-row justify-center gap-10 lg:gap-20 w-full`}
          >
            {tables.map((table, index) => (
              <DrawingTable
                key={index}
                title={table.title}
                items={table.items}
              />
            ))}
          </div>

          <article className={`flex flex-col lg:flex-row justify-center`}>
            <div
              className={`flex flex-col items-center gap-1.5 bg-[#F2B705] lg:w-5/12 h-max px-7 pt-5 pb-6 rounded-t-3xl lg:rounded-t-none lg:rounded-l-4xl space-y-5 shadow`}
            >
              <p
                className={`text-[#252228] text-xl lg:text-2xl text-shadow-2xs leading-9`}
              >
                Saiba das regras necessárias e preencha o formulário para encomendar.
              </p>

              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSd_1A2bwvCD-MPEfDox7ygLS2W3tbfo7WL9oroz39gz487Q6g/viewform?pli=1"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Encomendar desenho via formulário"
                className={`bg-[#C522F2] text-[#FCFAFF] text-xl lg:text-2xl text-shadow-2xs text-center font-semibold px-8 py-4 rounded-3xl lg:rounded-full shadow transition hover:bg-[#6C0CF2] focus-visible:bg-[#6C0CF2] active:bg-[#FCFAFF] active:text-[#6C0CF2]`}
              >
                Encomendar Desenho
              </a>
            </div>

            <figure className={``}>
              <Image
                src={`/assets/regras-de-servicos.avif`}
                alt="Regras do serviço: estilo de próprie artista, pagamento adiantado via PIX, discussão a cada etapa do processo, sem modificações em etapas já aprovadas, e imagens com assinatura"
                width={384}
                height={384}
                className={`w-96 h-auto rounded-b-3xl lg:rounded-b-4xl lg:rounded-tr-4xl shadow`}
              />
            </figure>
          </article>
        </div>
      </section>
    </main>
  );
}
