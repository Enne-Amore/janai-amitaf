"use client";

import NavItem, { NavItemInterface } from "../navItem";
import { usePathname } from "next/navigation";
import MenuDialog from "../menuDialog";

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

  const pathname = usePathname();

  return (
    <header className={`flex flex-col items-center`}>
      <div className={`bg-[#6C0CF2] w-full rounded-b-[30px] lg:rounded-b-[100px] py-6 lg:py-8 shadow-md`}>
        <MenuDialog />

        <div className={`flex flex-col items-center gap-0.5 lg:gap-2 pl-20 pr-8 lg:px-0`}>
          <h1 className={`text-[#FCFAFF] text-2xl lg:text-4xl text-shadow-2xs text-center font-semibold`}>
            Janai Amitáf Produções
          </h1>

          <h2 className={`text-[#F0F0F0] text-lg lg:text-3xl text-shadow-md text-center font-medium`}>
            Estórias, ilustrações e editoração
          </h2>
        </div>
      </div>

      <nav
        className={`bg-gradient-to-r from-[#C522F2] to-[#E057F2] w-10/12 lg:w-8/12 rounded-b-3xl lg:rounded-b-full shadow-md`}
      >
        <ul className={`flex justify-evenly lg:mx-20`} role="menu">
          {items.map((item, index) => (
            <NavItem
              key={index}
              url={item.url}
              ariaLabel={item.ariaLabel}
              label={item.label}
              isActive={pathname === item.url}
            />
          ))}
        </ul>
      </nav>
    </header>
  );
}
