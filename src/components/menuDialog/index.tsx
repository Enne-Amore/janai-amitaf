import { Dialog, DialogBackdrop, DialogPanel } from "@headlessui/react";
import { useState } from "react";
import { MdMenu } from "react-icons/md";
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
        onClick={() => setIsOpen(true)}
        className={`absolute top-10 left-16 rounded-xl px-1 cursor-pointer transition hover:bg-[#E057F2] active:bg-[#C522F2]`}
      >
        <MdMenu
          className={`text-[#FCFAFF] text-6xl text-shadow-2xs`}
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
          className="fixed inset-0 bg-black/30 duration-300 ease-out data-closed:opacity-0"
        />

        <div
          className={`fixed inset-0 -top-4 -left-4 -bottom-8 flex p-4 overflow-scroll`}
        >
          <DialogPanel
            transition
            className={`bg-[#FCFAFF] p-12 h-max transition duration-300 ease-out data-closed:-translate-x-4 data-closed:opacity-0`}
          >
            <article>
              <figure className={`flex flex-col items-center gap-4`}>
                <Image
                  src={`/assets/janai-amitaf.png`}
                  alt="Estrelas do espaço"
                  width={500}
                  height={0}
                  className={`w-52 h-auto`}
                />

                <figcaption className={`flex flex-col items-center gap-2`}>
                  <span className={`text-3xl text-shadow-2xs font-medium`}>
                    Janai Amitáf Produções
                  </span>
                  <span className={`text-[#6C0CF2] text-xl text-shadow-2xs`}>
                    (elu/ele)
                  </span>
                </figcaption>
              </figure>
            </article>

            {lists.map((list, index) => (
              <div key={index}>
                <hr className={`text-[#F0F0F0] shadow-2xs my-10`} />

                <ListsMenu title={list.title} links={list.links} />
              </div>
            ))}
          </DialogPanel>
        </div>
      </Dialog>
    </div>
  );
}
