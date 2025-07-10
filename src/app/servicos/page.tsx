import Image from "next/image";
import servicePrice from "../../assets/precos-de-servicos.png";
import serviceRule from "../../assets/regras-de-servicos.png";
import styles from "./page.module.css";

export default function Services() {
  return (
    <main>
      <section className={`${styles.services}`}>
        <h1>Produtos e Serviços</h1>

        <div className="subsecoes">
          <article className="precos">
            <figure className="img">
              <Image
                src={servicePrice}
                alt="Preços do desenho: busto por 30 reais, meio-corpo por 40 reais e corpo inteiro por 50 reais"
                width={0}
                height={0}
                className={``}
              />
            </figure>

            <div className="descricao">
              <p>
                Uma <span lang="en">commission</span> é um desenho que uma
                pessoa física encomenda a um artista para uso pessoal
              </p>

              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSd_1A2bwvCD-MPEfDox7ygLS2W3tbfo7WL9oroz39gz487Q6g/viewform?pli=1"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Encomendar desenho via formulário"
              >
                Encomendar Desenho
              </a>
            </div>
          </article>

          <article className="condicoes">
            <table className="tabela">
              <thead className="titulo">
                <tr>
                  <th>Desenharei</th>
                </tr>
              </thead>

              <tbody className="dados">
                <tr>
                  <td>Humanos</td>
                </tr>

                <tr>
                  <td>Animais/Pokémon e cia</td>
                </tr>

                <tr>
                  <td>Furry</td>
                </tr>

                <tr>
                  <td>Seres Mitológicos/Mágicos</td>
                </tr>

                <tr>
                  <td>Aliens</td>
                </tr>

                <tr>
                  <td>Robôs humanoides e zoomórficos</td>
                </tr>

                <tr>
                  <td>Fanarts/OCs/Personagens de RPG</td>
                </tr>

                <tr>
                  <td>Familiares e Pets</td>
                </tr>
              </tbody>
            </table>

            <table className="tabela">
              <thead className="titulo">
                <tr>
                  <th>
                    <u>Não</u> Desenharei
                  </th>
                </tr>
              </thead>

              <tbody className="dados">
                <tr>
                  <td>Gore</td>
                </tr>

                <tr>
                  <td>Veículo/meccha</td>
                </tr>

                <tr>
                  <td>Mensagens de ódio</td>
                </tr>

                <tr>
                  <td>Personagens infantis</td>
                </tr>

                <tr>
                  <td>Animais em situações adultas</td>
                </tr>

                <tr>
                  <td>Quaisquer contextos religiosos reais</td>
                </tr>
              </tbody>
            </table>
          </article>

          <article className="regras">
            <div className="descricao">
              <p>
                Saiba das regras necessárias e preencha o formulário para
                encomendar
              </p>

              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSd_1A2bwvCD-MPEfDox7ygLS2W3tbfo7WL9oroz39gz487Q6g/viewform?pli=1"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Encomendar desenho via formulário"
              >
                Encomendar Desenho
              </a>
            </div>

            <figure className="img">
              <Image
                src={serviceRule}
                alt="Regras do serviço: estilo de próprie artista, pagamento adiantado via PIX, discussão a cada etapa do processo, sem modificações em etapas já aprovadas, e imagens com assinatura"
                width={0}
                height={0}
                className={``}
              />
            </figure>
          </article>
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
