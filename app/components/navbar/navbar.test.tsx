import { render, screen } from "@testing-library/react";
import Navbar from ".";
import { routes } from "./constants";

describe("Navbar component", () => {
  it("renders all navigation icons", () => {
    render(<Navbar />);
    const links = screen.getAllByRole("link");
    const hrefs = links.map((link) => link.getAttribute("href"));
    expect(hrefs).toContain(routes.home.route);
    expect(hrefs).toContain(routes.about.route);
    expect(hrefs).toContain(routes.experience.route);
    expect(hrefs).toContain(routes.projects.route);
    const navElement = document.querySelector("nav");
    expect(navElement).toHaveClass(
      "fixed bottom-0 left-0 right-0 shadow-md p-4 md:p-6 flex justify-center gap-2 md:gap-8 lg:gap-16 items-center z-30",
    );
  });
});
