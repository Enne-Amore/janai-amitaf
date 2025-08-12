import { MdMenu } from "react-icons/md";
import Link from "next/link";

export function Header() {
  return (
    <header className={`flex flex-col items-center`}>
      <div className={`bg-[#6C0CF2] w-screen rounded-b-full py-8 shadow-md`}>
        <button className={`absolute top-10 left-12`}>
          <MdMenu
            className={`text-[#FCFAFF] text-6xl text-shadow-2xs`}
            aria-label="Menu de navegação"
          />
        </button>

        <div className={`flex flex-col items-center gap-2 text-shadow-md`}>
          <h1 className={`text-4xl text-[#FCFAFF] font-medium text-shadow-2xs`}>Janai Amitáf Produções</h1>

          <h2 className={`text-3xl text-[#F0F0F0] font-medium`}>Estórias, ilustrações e editoração</h2>
        </div>
      </div>

      <nav className={`bg-gradient-to-r from-[#C522F2] to-[#E057F2] w-9/12 rounded-b-full shadow-md`}>
        <ul className={`flex justify-evenly`}>
          <li className={`text-2xl text-[#FCFAFF] font-medium p-5`}>
            <Link
              href="/"
              aria-label="Ver introdução sobre"
              id="selecionada"
            >
              Sobre
            </Link>
          </li>
          
          <li className={`text-2xl text-[#FCFAFF] font-medium p-5`}>
            <Link
              href="projetos"
              aria-label="Ver quais são os projetos realizados"
            >
              Projetos
            </Link>
          </li>
          
          <li className={`text-2xl text-[#FCFAFF] font-medium p-5`}>
            <Link
              href="servicos"
              aria-label="Ver quais são os produtos e serviços"
            >
              Serviços
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
