import { render, screen } from "@testing-library/react";
import { projects } from "./constants";
import Projects from "./page";

describe("Projects", () => {
  it("render default", () => {
    render(<Projects />);
    expect(screen.getByTestId("projects")).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: "Projects" }),
    ).toBeInTheDocument();
    expect(screen.getAllByRole("img")).toHaveLength(projects.length);
    projects.forEach((project, i) => {
      expect(screen.getByText(project.title)).toBeInTheDocument();
      expect(screen.getByText(project.description)).toBeInTheDocument();
      project.tech.forEach((tech) => {
        expect(screen.getAllByText(tech).length).toBeGreaterThan(0);
      });
      expect(
        screen.getAllByRole("link", { name: "GitHub" })[i],
      ).toBeInTheDocument();
      expect(
        screen.getAllByRole("link", { name: "Demo" })[i],
      ).toBeInTheDocument();
    });
  });
  it("renders projects with correct links", () => {
    render(<Projects />);
    projects.forEach((project, i) => {
      expect(
        screen.getAllByRole("link", { name: "GitHub" })[i].getAttribute("href"),
      ).toBe(project.repo);
      expect(
        screen.getAllByRole("link", { name: "Demo" })[i].getAttribute("href"),
      ).toBe(project.demo);
    });
  });
});
