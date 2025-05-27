import { render, screen } from "@testing-library/react";
import { ABOUT_CONSTANTS } from "./constants";
import About from "./page";

jest.mock("./components/carousel", () => {
  const Carousel = () => <div data-testid="carousel">Carousel Component</div>;
  Carousel.displayName = "Carousel";
  return Carousel;
});

describe("About Page", () => {
  it("renders default", () => {
    render(<About />);
    const title = screen.getByText(ABOUT_CONSTANTS.title);
    const description = screen.getByText(ABOUT_CONSTANTS.description[0]);
    const carousel = screen.getByTestId("carousel");
    expect(title).toBeInTheDocument();
    expect(description).toBeInTheDocument();
    expect(carousel).toBeInTheDocument();
    expect(screen.getByTestId("personal-interests")).toHaveTextContent(
      ABOUT_CONSTANTS.personalInterests.title,
    );
    expect(screen.getByTestId("personal-interests")).toHaveTextContent(
      ABOUT_CONSTANTS.personalInterests.description,
    );
  });
});
