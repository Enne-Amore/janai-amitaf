import Image from "next/image";
import Link from "next/link";
import { ProjectsType } from "@/types/projectsType";
import { allProjects } from "@/data/allProjects";
import PageTitle from "@/components/pageTitle";

export default async function Projects() {
  const projects: ProjectsType[] = allProjects;

  return (
    <main>
      <section
        className={`flex flex-col justify-center gap-8 w-10/12 lg:w-9/12 mx-auto my-10 animate-(--page-section-animation)`}
      >
        <PageTitle label={"Projetos"} />

        <ul className={`flex flex-col lg:flex-row gap-10 mx-14 lg:mx-10`}>
          {projects.map((project) => (
            <li
              key={project.id}
              className={`bg-[#F2B705] h-max rounded-4xl shadow overflow-hidden transition duration-300 ease-out hover:bg-[#E057F2] active:bg-[#C522F2]`}
            >
              <Link
                href={`/projetos/${project.id}`}
                aria-label={`Ir à página do projeto: ${project.figcaption}`}
              >
                <figure className={`flex flex-col items-center gap-4`}>
                  <Image
                    src={`/assets/${project.img}`}
                    alt={project.altImg}
                    width={173}
                    height={190}
                    className={`rounded-t-4xl w-full h-auto transition duration-300 ease-out hover:scale-105`}
                  />

                  <figcaption
                    lang="en"
                    className={`text-xl lg:text-2xl text-center text-shadow-2xs px-4 pb-4`}
                  >
                    {project.figcaption}
                  </figcaption>
                </figure>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
