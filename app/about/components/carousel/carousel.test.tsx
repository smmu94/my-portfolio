import { fireEvent, render, screen } from "@testing-library/react";
import Carousel from ".";

describe("Carousel", () => {
  beforeEach(() => {
    Object.defineProperty(window, "innerWidth", {
      writable: true,
      configurable: true,
      value: 1024,
    });
    window.dispatchEvent(new Event("resize"));
  });

  it("renders default", () => {
    render(<Carousel />);
    const images = screen.getAllByRole("img");
    expect(images.length).toBeGreaterThan(0);
  });

  it("navigates to next image when right button is clicked", () => {
    render(<Carousel />);
    const carouselList =
      screen.getByRole("list", { hidden: true }) ||
      document.querySelector("div.flex");
    const nextButton = screen.getByTestId("next").closest("button");
    const initialTransform = carouselList?.getAttribute("style");
    fireEvent.click(nextButton!);
    const afterClickTransform = carouselList?.getAttribute("style");
    expect(afterClickTransform).not.toBe(initialTransform);
  });

  it("navigates to previous image when left button is clicked", () => {
    render(<Carousel />);
    const carouselList =
      screen.getByRole("list", { hidden: true }) ||
      document.querySelector("div.flex");
    const prevButton = screen.getByTestId("previous").closest("button");
    const initialTransform = carouselList?.getAttribute("style");
    fireEvent.click(prevButton!);
    const afterClickTransform = carouselList?.getAttribute("style");
    expect(afterClickTransform).not.toBe(initialTransform);
  });
});
