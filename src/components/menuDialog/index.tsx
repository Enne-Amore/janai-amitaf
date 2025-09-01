import { Dialog, DialogBackdrop, DialogPanel } from "@headlessui/react";
import { useState } from "react";
import { MdClose, MdMenu } from "react-icons/md";
import Image from "next/image";
import ListsMenu, { ListsMenuInterface } from "../listsMenu";

export default function MenuDialog() {
  const [isOpen, setIsOpen] = useState(false);

  const lists: ListsMenuInterface[] = [
    {
      title: "Produtos",
      links: [
        {
          url: "https://gibizada.com.br/vendor/janaiamitaf/",
          ariaLabel: "Ir à loja de produtos",
          label: "Loja",
        },
        {
          url: "https://forms.gle/3k5i75RRhyvQtAQa9",
          ariaLabel: "Ir ao formulário de encomenda de desenho",
          label: "Commissions: Encomenda de Desenho",
        },
      ],
    },
    {
      title: "Onde nos encontrar",
      links: [
        {
          url: "https://fliptru.com.br/@janaiamitaf",
          ariaLabel: "Acessar quadrinhos no Fliptru",
          label: "Quadrinhos no Fliptru",
        },
        {
          url: "https://www.wattpad.com/user/AmitafJanai",
          ariaLabel: "Acessar contos no Wattpad",
          label: "Contos no Wattpad",
        },
      ],
    },
    {
      title: "Contatos",
      links: [
        {
          url: "mailto:janaiamitaf@gmail.com",
          ariaLabel: "Contatar via email",
          label: "janaiamitaf@gmail.com",
        },
        {
          url: "https://www.instagram.com/janai.amitaf/",
          ariaLabel: "Acessar perfil no Instagram",
          label: "Instagram",
        },
        {
          url: "https://www.behance.net/janaiamitaf",
          ariaLabel: "Acessar perfil no Behance",
          label: "Behance",
        },
      ],
    },
  ];

  return (
    <div>
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className={`absolute top-9 lg:top-11 left-4 lg:left-16 rounded-xl px-1 cursor-pointer transition hover:bg-[#E057F2] focus-visible:bg-[#E057F2] active:bg-[#C522F2]`}
      >
        <MdMenu
          className={`text-[#FCFAFF] text-4xl lg:text-6xl text-shadow-2xs`}
          aria-label="Menu de navegação"
        />
      </button>

      <Dialog
        open={isOpen}
        onClose={() => setIsOpen(false)}
        className={`relative z-50`}
      >
        <DialogBackdrop
          transition
          className="fixed inset-0 bg-[#252228]/50 duration-300 ease-out data-closed:opacity-0"
        />

        <div
          className={`fixed inset-0 -top-4 -left-4 -bottom-8 flex p-4 overflow-scroll`}
        >
          <DialogPanel
            transition
            className={`bg-[#FCFAFF] px-4 pt-8 pb-12 lg:p-12 max-w-9/12 lg:max-w-auto min-h-screen h-max shadow transition duration-300 ease-out data-closed:-translate-x-4 data-closed:opacity-0`}
          >
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className={`-mt-3 lg:-mt-2 p-2 rounded-full cursor-pointer transition hover:bg-[#F0F0F0] focus-visible:bg-[#F0F0F0] active:bg-[#252228]/10`}
            >
              <MdClose
                className={`text-[#252228] text-3xl lg:text-4xl text-shadow-2xs`}
                aria-label="Fechar o menu de navegação"
              />
            </button>

            <article>
              <figure className={`flex flex-col items-center gap-3 lg:gap-4`}>
                <Image
                  src={`/assets/janai-amitaf.png`}
                  alt="Estrelas do espaço"
                  width={144}
                  height={144}
                  className={`bg-[#F0F0F0] w-36 lg:w-52 h-auto drop-shadow rounded-full`}
                />

                <figcaption className={`flex flex-col items-center gap-1 lg:gap-2`}>
                  <span className={`text-2xl lg:text-3xl text-shadow-2xs text-center font-medium`}>
                    Janai Amitáf Produções
                  </span>

                  <span className={`text-[#6C0CF2] text-lg lg:text-xl text-shadow-2xs`}>
                    (elu/ele)
                  </span>
                </figcaption>
              </figure>
            </article>

            {lists.map((list, index) => (
              <div key={index}>
                <hr className={`text-[#F0F0F0] shadow-2xs my-6 lg:my-10`} />

                <ListsMenu title={list.title} links={list.links} />
              </div>
            ))}
          </DialogPanel>
        </div>
      </Dialog>
    </div>
  );
}
