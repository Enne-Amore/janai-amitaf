import { MdMenu } from "react-icons/md";
import NavItem, { NavItemInterface } from "../navItem";

export default function Header() {
  const items: NavItemInterface[] = [
    {
      url: "/",
      ariaLabel: "Acessar página inicial",
      label: "Sobre",
    },
    {
      url: "/projetos",
      ariaLabel: "Acessar página de projetos",
      label: "Projetos",
    },
    {
      url: "/servicos",
      ariaLabel: "Acessar página de serviços",
      label: "Serviços",
    },
  ];

  return (
    <header className={`flex flex-col items-center`}>
      <div className={`bg-[#6C0CF2] w-full rounded-b-full py-8 shadow-md`}>
        <button className={`absolute top-10 left-16`}>
          <MdMenu
            className={`text-[#FCFAFF] text-6xl text-shadow-2xs`}
            aria-label="Menu de navegação"
          />
        </button>

        <div className={`flex flex-col items-center gap-2 text-shadow-md`}>
          <h1 className={`text-4xl text-[#FCFAFF] font-medium text-shadow-2xs`}>
            Janai Amitáf Produções
          </h1>

          <h2 className={`text-3xl text-[#F0F0F0] font-medium`}>
            Estórias, ilustrações e editoração
          </h2>
        </div>
      </div>

      <nav
        className={`bg-gradient-to-r from-[#C522F2] to-[#E057F2] w-8/12 rounded-b-full shadow-md`}
      >
        <ul className={`flex justify-center`}>
          {items.map((item, index) => (
            <NavItem
              key={index}
              url={item.url}
              ariaLabel={item.ariaLabel}
              label={item.label}
            />
          ))}
        </ul>
      </nav>
    </header>
  );
}
