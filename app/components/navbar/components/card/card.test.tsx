import { render } from "@testing-library/react";
import Card from ".";
import { routes } from "../../constants";

const props = {
  route: routes.home.route,
  label: routes.home.label,
};

describe("Card Component", () => {
  it("renders default", () => {
    render(
      <Card {...props}>
        <div data-testid="icon">Icon</div>
      </Card>,
    );
    const linkElement = document.querySelector("a");
    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveAttribute("href", props.route);
    const iconElement = document.querySelector("[data-testid='icon']");
    expect(iconElement).toBeInTheDocument();
    expect(iconElement).toHaveTextContent("Icon");
    const labelElement = document.querySelector("p");
    expect(labelElement).toBeInTheDocument();
    expect(labelElement).toHaveTextContent(props.label);
  });
});
