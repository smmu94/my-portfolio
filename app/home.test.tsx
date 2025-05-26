import { render, screen } from "@testing-library/react";
import { profile } from "./constants";
import Home from "./page";

describe("Home", () => {
  it("render default", () => {
    render(<Home />);
    expect(screen.getByTestId("home")).toBeInTheDocument();
    expect(screen.getByRole("img", { name: "myself" })).toBeInTheDocument();
    expect(screen.getByTestId("home-text")).toBeInTheDocument();
    expect(screen.getByText(profile.name)).toBeInTheDocument();
    expect(screen.getByText(profile.title)).toBeInTheDocument();
    expect(screen.getByText(profile.description)).toBeInTheDocument();
  });
});
