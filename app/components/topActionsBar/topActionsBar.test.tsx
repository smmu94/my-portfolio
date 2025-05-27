import { render, screen } from "@testing-library/react";
import TopActionsBar from ".";
import { SOCIAL_LINKS } from "./constants";

describe("TopActionsBar", () => {
  it("renders MusicPlayer component", () => {
    render(<TopActionsBar />);
    expect(screen.getByTestId("music-player")).toBeInTheDocument();
  });

  it("renders social links with correct href and icons", () => {
    render(<TopActionsBar />);
    const githubLink = screen.getByRole("link", { name: "GitHub" });
    expect(githubLink).toHaveAttribute("href", SOCIAL_LINKS.github);
    expect(githubLink).toHaveAttribute("target", "_blank");
    const linkedinLink = screen.getByRole("link", {
      name: "LinkedIn",
    });
    expect(linkedinLink).toHaveAttribute("href", SOCIAL_LINKS.linkedin);
    expect(linkedinLink).toHaveAttribute("target", "_blank");
    const mailLink = screen.getByRole("link", { name: "Email" });
    expect(mailLink).toHaveAttribute("href", SOCIAL_LINKS.email);
    expect(mailLink).not.toHaveAttribute("target");
  });
});
