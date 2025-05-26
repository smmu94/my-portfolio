import Image from "next/image";
import Link from "next/link";
import { projects } from "./constants";

export default function Projects() {
  return (
    <section
      id="projects"
      className="w-full px-6 md:px-16 text-xs mt-4"
      data-testid="projects"
    >
      <div className="max-w-5xl mx-auto flex flex-col gap-10 items-center justify-center">
        <h2 className="text-lg font-semibold text-center text-primary mb-2">
          Projects
        </h2>
        <div className="flex flex-col gap-6 w-full">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="rounded-2xl flex flex-col lg:flex-row overflow-hidden lg:h-[300px]"
            >
              <div className="relative w-full h-[300px] lg:w-1/2 lg:h-full bg-primary-light">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-contain"
                  priority={idx === 0}
                />
              </div>
              <div className="bg-light flex flex-col justify-between p-4 gap-2 w-full lg:w-1/2">
                <div>
                  <h3 className="text-primary font-semibold text-sm mb-4">
                    {project.title}
                  </h3>
                  <p className="mb-2 leading-loose">{project.description}</p>
                  <ul className="flex flex-wrap gap-1 text-[10px]">
                    {project.tech.map((tech, i) => (
                      <li
                        key={i}
                        className="rounded-full bg-primary text-light px-2 py-0.5"
                      >
                        {tech}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex justify-between text-[11px] text-primary font-medium mt-2">
                  <Link
                    href={project.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline"
                  >
                    GitHub
                  </Link>
                  <Link
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline"
                  >
                    Demo
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
