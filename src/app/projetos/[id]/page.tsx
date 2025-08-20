import Image from "next/image";
import { projects } from "@/data/projects";
import PageTitle from "@/components/pageTitle";

interface ProjectPageProps {
  params: {
    id: string;
  };
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const project = projects.find((p) => p.id === params.id);

  if (!project) {
    return (
      <div className={`text-center mt-20 text-red-500 text-xl`}>
        Projeto não encontrado
      </div>
    );
  }

  return (
    <main>
      <section
        className={`flex flex-col justify-center gap-8 w-10/12 lg:w-9/12 mx-auto my-10 animate-(--page-section-animation)`}
      >
        <PageTitle label={project.title} />

        {project.description && (
          <p
            className={`bg-[#F2B705] text-[#252228] text-xl lg:text-2xl lg:text-center text-shadow-2xs leading-8 lg:leading-9 rounded-3xl lg:rounded-4xl px-6 lg:px-8 py-4 lg:py-6 mx-6 lg:mx-auto lg:w-8/12 shadow`}
          >
            {project.description}
          </p>
        )}

        {project.cover && (
          <figure>
            <Image
              src={`/assets/${project.cover}`}
              alt={project.altCover}
              width={260}
              height={400}
              className={`rounded-3xl mx-auto my-2 lg:my-5 shadow`}
            />
          </figure>
        )}

        {project.paragraphs && (
          <div className={`max-w-[720px] mx-auto space-y-4 lg:space-y-5`}>
            {project.paragraphs.map((paragraph, index) => (
              <p
                key={index}
                className={`text-[#252228] text-xl lg:text-2xl text-shadow-2xs leading-10 lg:leading-12`}
              >
                {paragraph}
              </p>
            ))}
          </div>
        )}

        {project.images && (
          <ul
            className={`flex flex-wrap justify-center gap-10 lg:gap-20 lg:w-9/12 mx-auto my-6`}
          >
            {project.images.map((image) => (
              <li key={image.id}>
                <figure>
                  <Image
                    src={`/assets/${image.img}`}
                    alt={image.altImg}
                    width={200}
                    height={0}
                    className={`rounded-3xl lg:rounded-4xl lg:w-full lg:h-72 shadow`}
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
