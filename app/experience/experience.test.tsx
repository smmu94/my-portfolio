import { render, screen, within } from "@testing-library/react";
import { experienceData, resumeLink, skills } from "./constants";
import Experience from "./page";

describe("Experience", () => {
  it("renders default", () => {
    render(<Experience />);
    expect(screen.getByTestId("experience")).toBeInTheDocument();
    expect(screen.getByText("Experience")).toBeInTheDocument();
    experienceData.forEach(({ role, company, location, tech }) => {
      const experienceData = screen.getByTestId(`experience-${role}`);
      expect(experienceData).toBeInTheDocument();
      expect(screen.getByText(role)).toBeInTheDocument();
      expect(experienceData).toHaveTextContent(company);
      if (location) {
        expect(experienceData).toHaveTextContent(location);
      }
      const techLabel = within(experienceData).getByText("Tech:");
      const techParagraph = techLabel.parentElement;
      expect(techParagraph).toBeInTheDocument();
      expect(techParagraph).toHaveTextContent(tech.join(", "));
    });
    expect(screen.getByText("Skills")).toBeInTheDocument();
    const skillsList = screen.getByRole("list");
    expect(skillsList).toBeInTheDocument();
    const skillsItems = within(skillsList).getAllByRole("listitem");
    expect(skillsItems).toHaveLength(skills.length);
    skills.forEach((skill, index) => {
      expect(skillsItems[index]).toHaveTextContent(skill);
    });
    expect(screen.getByText("Resume")).toBeInTheDocument();
    const resume = screen.getByRole("link", {
      name: "HERE",
    });
    expect(resume).toBeInTheDocument();
    expect(resume).toHaveAttribute("href", resumeLink);
  });
});
