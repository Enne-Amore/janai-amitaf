import Image from "next/image";

export default function Services() {
  return (
    <main>
      <section className={`flex flex-col justify-center gap-8 w-9/12 mx-auto my-10`}>
        <h2 className={`bg-gradient-to-r from-[#F1ACF2] to-[#FCFAFF00] text-3xl font-medium text-shadow-2xs px-8 py-4 rounded-full`}>Produtos e Serviços</h2>

        <div className={`flex flex-col items-center gap-16 mx-10`}>
          <article className={`flex justify-center`}>
            <figure>
              <Image
                src={`/assets/precos-de-servicos.png`}
                alt="Preços do desenho: busto por 30 reais, meio-corpo por 40 reais e corpo inteiro por 50 reais"
                width={384}
                height={0}
                className={`w-96 h-auto rounded-l-4xl shadow`}
              />
            </figure>

            <div className={`flex flex-col items-center gap-1.5 bg-[#F2B705] w-5/12 h-max px-6 pt-5 pb-6 rounded-e-4xl space-y-5 shadow`}>
              <p className={`text-2xl text-shadow-2xs leading-9`}>
                Uma <span lang="en">commission</span> é um desenho que uma
                pessoa física encomenda a um artista para uso pessoal.
              </p>

              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSd_1A2bwvCD-MPEfDox7ygLS2W3tbfo7WL9oroz39gz487Q6g/viewform?pli=1"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Encomendar desenho via formulário"
                className={`bg-[#C522F2] text-[#FCFAFF] text-2xl text-shadow-2xs font-semibold px-8 py-4 rounded-full shadow`}
              >
                Encomendar Desenho
              </a>
            </div>
          </article>

          <div className={`flex justify-center gap-20 w-full`}>
            <article className="overflow-hidden rounded-4xl border-2 border-[#6C0CF2] w-full shadow">
              <table className="border-separate border-spacing-0 text-center w-full">
                <thead>
                  <tr>
                    <th className="bg-[#6C0CF2] text-[#FCFAFF] text-3xl text-shadow-2xs py-5 shadow">Desenharei</th>
                  </tr>
                </thead>

                <tbody>
                  <tr className="bg-[#FCFAFF]">
                    <td className="text-2xl text-shadow-2xs py-3 px-4">Humanos</td>
                  </tr>

                  <tr className="bg-[#F1ACF2]">
                    <td className="text-2xl text-shadow-2xs py-3 px-4">Animais/Pokémon e cia</td>
                  </tr>

                  <tr className="bg-[#FCFAFF]">
                    <td className="text-2xl text-shadow-2xs py-3 px-4">Furry</td>
                  </tr>

                  <tr className="bg-[#F1ACF2]">
                    <td className="text-2xl text-shadow-2xs py-3 px-4">Seres Mitológicos/Mágicos</td>
                  </tr>

                  <tr className="bg-[#FCFAFF]">
                    <td className="text-2xl text-shadow-2xs py-3 px-4">Aliens</td>
                  </tr>

                  <tr className="bg-[#F1ACF2]">
                    <td className="text-2xl text-shadow-2xs py-3 px-4">Robôs humanoides e zoomórficos</td>
                  </tr>

                  <tr className="bg-[#FCFAFF]">
                    <td className="text-2xl text-shadow-2xs py-3 px-4">Fanarts/OCs/Personagens de RPG</td>
                  </tr>

                  <tr className="bg-[#F1ACF2]">
                    <td className="text-2xl text-shadow-2xs py-3 px-4">Familiares e Pets</td>
                  </tr>
                </tbody>
              </table>
            </article>

            <article className="overflow-hidden rounded-4xl border-2 border-[#6C0CF2] w-full h-max shadow">
              <table className="border-separate border-spacing-0 text-center w-full">
                <thead>
                  <tr>
                    <th className="bg-[#6C0CF2] text-[#FCFAFF] text-3xl text-shadow-2xs py-5 shadow">
                      <u>Não</u> Desenharei
                    </th>
                  </tr>
                </thead>

                <tbody>
                  <tr className="bg-[#FCFAFF]">
                    <td className="text-2xl text-shadow-2xs py-3 px-4">Gore</td>
                  </tr>

                  <tr className="bg-[#F1ACF2]">
                    <td className="text-2xl text-shadow-2xs py-3 px-4">Veículo/meccha</td>
                  </tr>

                  <tr className="bg-[#FCFAFF]">
                    <td className="text-2xl text-shadow-2xs py-3 px-4">Mensagens de ódio</td>
                  </tr>

                  <tr className="bg-[#F1ACF2]">
                    <td className="text-2xl text-shadow-2xs py-3 px-4">Personagens infantis</td>
                  </tr>

                  <tr className="bg-[#FCFAFF]">
                    <td className="text-2xl text-shadow-2xs py-3 px-4">Animais em situações adultas</td>
                  </tr>
                  
                  <tr className="bg-[#F1ACF2]">
                    <td className="text-2xl text-shadow-2xs py-3 px-4">Quaisquer contextos religiosos reais</td>
                  </tr>
                </tbody>
              </table>
            </article>
          </div>

          <article className={`flex justify-center`}>
            <div className={`flex flex-col items-center gap-1.5 bg-[#F2B705] w-5/12 h-max px-7 pt-5 pb-6 rounded-l-4xl space-y-5 shadow`}>
              <p className={`text-2xl text-shadow-2xs leading-9`}>
                Saiba das regras necessárias e preencha o formulário para
                encomendar
              </p>

              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSd_1A2bwvCD-MPEfDox7ygLS2W3tbfo7WL9oroz39gz487Q6g/viewform?pli=1"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Encomendar desenho via formulário"
                className={`bg-[#C522F2] text-[#FCFAFF] text-2xl text-shadow-2xs font-semibold px-8 py-4 rounded-full shadow`}
              >
                Encomendar Desenho
              </a>
            </div>

            <figure className={``}>
              <Image
                src={`/assets/regras-de-servicos.png`}
                alt="Regras do serviço: estilo de próprie artista, pagamento adiantado via PIX, discussão a cada etapa do processo, sem modificações em etapas já aprovadas, e imagens com assinatura"
                width={384}
                height={0}
                className={`w-96 h-auto rounded-e-4xl shadow`}
              />
            </figure>
          </article>
        </div>
      </section>
    </main>
  );
}
