import Image from "next/image";
import Link from "next/link";
import { ProjectsType } from "@/types/projectsType";

export default async function Projects() {
  const response = await fetch(`http://localhost:4000/projects`);
  const data: ProjectsType[] = await response.json();

  return (
    <main>
      <section
        className={`flex flex-col justify-center gap-8 w-9/12 mx-auto my-10`}
      >
        <h2
          className={`bg-gradient-to-r from-[#F1ACF2] to-[#FCFAFF00] text-3xl font-medium text-shadow-2xs px-8 py-4 rounded-full`}
        >
          Projetos
        </h2>

        <ul className={`flex gap-10 mx-10`}>
          {data.map((project) => (
            <li
              key={project.id}
              className={`bg-[#F2B705] h-max rounded-4xl shadow`}
            >
              <Link
                href={`/projetos/${project.id}`}
                aria-label={`Ir à página do projeto: ${project.figcaption}`}
              >
                <figure className={`flex flex-col items-center`}>
                  <Image
                    src={require(`../../assets/${project.img
                      .split("/")
                      .pop()}`)}
                    alt={project.altImg}
                    width={0}
                    height={0}
                    className={`rounded-t-4xl`}
                  />

                  <figcaption
                    lang="en"
                    className={`text-2xl text-center text-shadow-2xs p-4`}
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
