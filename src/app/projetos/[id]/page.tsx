import Image from "next/image";
import { projects } from "@/data/projects";

export default function ProjectPage({ params }: { params: { id: string } }) {
  const project = projects.find((p) => p.id === params.id);

  if (!project) {
    return (
      <div className="text-center mt-20 text-red-500 text-xl">
        Projeto não encontrado
      </div>
    );
  }

  return (
    <main>
      <section className="flex flex-col justify-center gap-8 w-9/12 mx-auto my-10">
        <h2
          className="bg-gradient-to-r from-[#F1ACF2] to-[#FCFAFF00] text-3xl font-medium text-shadow-2xs px-8 py-4 rounded-full"
          lang="en"
        >
          {project.title}
        </h2>

        {project.description && (
          <p className="bg-[#F2B705] text-2xl text-center text-shadow-2xs leading-9 rounded-4xl px-8 py-6 mx-auto w-8/12 shadow">
            {project.description}
          </p>
        )}

        {project.images && (
          <ul className="flex flex-wrap justify-center gap-20 w-9/12 mx-auto my-6">
            {project.images.map((image) => (
              <li key={image.id}>
                <figure>
                  <Image
                    src={`/assets/${image.img}`}
                    alt={image.altImg}
                    width={200}
                    height={0}
                    className="rounded-4xl w-full h-72"
                  />
                </figure>
              </li>
            ))}
          </ul>
        )}
      </section>
    </main>
  );
}
