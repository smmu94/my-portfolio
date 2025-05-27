import Link from "next/link";
import { experienceData, resumeLink, skills } from "./constants";

const Experience = () => {
  return (
    <section
      className="w-full px-6 md:px-16 mt-4 max-w-6xl mx-auto flex flex-col gap-10 items-center justify-center text-light text-xs leading-loose"
      data-testid="experience"
    >
      <h2 className="text-lg font-semibold text-center text-primary mb-2">
        Experience
      </h2>
      {experienceData.map(
        ({ role, company, location, date, summary, tech }) => (
          <div
            key={role + company}
            className="w-full mb-4"
            data-testid={`experience-${role}`}
          >
            <h3 className="text-sm font-medium mb-1">{role}</h3>
            <p className="text-text-secondary mb-0">
              {company}
              {location && ` – ${location}`}
            </p>
            <p className="text-xs italic text-text-secondary mb-3">{date}</p>
            <p className="text-light">{summary}</p>
            <p className="mt-3 text-text-secondary">
              <span className="font-medium text-primary">Tech:</span>{" "}
              {tech.join(", ")}
            </p>
          </div>
        ),
      )}
      <h2 className="text-lg font-semibold text-center text-primary mb-2">
        Skills
      </h2>
      <ul className="flex flex-wrap justify-center gap-2 w-full max-w-md">
        {skills.map((skill) => (
          <li
            key={skill}
            className="text-xs text-light border border-primary rounded px-2 py-0.5"
          >
            {skill}
          </li>
        ))}
      </ul>
      <h2 className="text-lg font-semibold text-center text-primary mb-2">
        Resume
      </h2>
      <p className="text-light text-center">
        You can download my resume{" "}
        <Link
          href={resumeLink}
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary hover:underline"
        >
          HERE
        </Link>
        .
      </p>
    </section>
  );
};

export default Experience;
