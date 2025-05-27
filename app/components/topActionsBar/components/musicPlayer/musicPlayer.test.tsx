import { fireEvent, render, screen } from "@testing-library/react";
import MusicPlayer from ".";

describe("MusicPlayer", () => {
  beforeEach(() => {
    Object.defineProperty(window.HTMLMediaElement.prototype, "play", {
      configurable: true,
      value: jest.fn(),
    });
    Object.defineProperty(window.HTMLMediaElement.prototype, "pause", {
      configurable: true,
      value: jest.fn(),
    });
  });
  it("renders default", () => {
    render(<MusicPlayer />);
    expect(screen.getByTestId("previous-button")).toBeInTheDocument();
    expect(screen.getByTestId("play-pause-button")).toBeInTheDocument();
    expect(screen.getByTestId("next-button")).toBeInTheDocument();
  });
  it("plays and pauses audio", () => {
    render(<MusicPlayer />);
    fireEvent.click(screen.getByTestId("play-pause-button"));
    expect(window.HTMLMediaElement.prototype.play).toHaveBeenCalled();
    fireEvent.click(screen.getByTestId("play-pause-button"));
    expect(window.HTMLMediaElement.prototype.pause).toHaveBeenCalled();
  });
  it("goes to next track", () => {
    render(<MusicPlayer />);
    fireEvent.click(screen.getByTestId("next-button"));
    expect(window.HTMLMediaElement.prototype.play).toHaveBeenCalled();
  });
  it("goes to previous track", () => {
    render(<MusicPlayer />);
    fireEvent.click(screen.getByTestId("previous-button"));
    expect(window.HTMLMediaElement.prototype.play).toHaveBeenCalled();
  });
  it("handles track end", () => {
    render(<MusicPlayer />);
    const audio = screen.getByRole("audio") as HTMLAudioElement;
    fireEvent.ended(audio);
    expect(window.HTMLMediaElement.prototype.play).toHaveBeenCalled();
  });
});
