import React from "react";
import "@testing-library/jest-dom";

function createMockIcon(displayName: string) {
  return function MockIcon() {
    return React.createElement("svg", {
      "data-testid": displayName.toLowerCase(),
    });
  };
}

const mockIcons = {
  HomeIcon: createMockIcon("HomeIcon"),
  ExperienceIcon: createMockIcon("ExperienceIcon"),
  ProjectsIcon: createMockIcon("ProjectsIcon"),
  AboutIcon: createMockIcon("AboutIcon"),
  NextIcon: createMockIcon("NextIcon"),
  PauseIcon: createMockIcon("PauseIcon"),
  PlayIcon: createMockIcon("PlayIcon"),
  PreviousIcon: createMockIcon("PreviousIcon"),
  VinylIcon: createMockIcon("VinylIcon"),
  GitHubIcon: createMockIcon("GitHubIcon"),
  LinkedInIcon: createMockIcon("LinkedInIcon"),
  MailIcon: createMockIcon("MailIcon"),
};

jest.mock("public/svgs/arcade.svg", () => mockIcons.HomeIcon);
jest.mock("public/svgs/computer.svg", () => mockIcons.ExperienceIcon);
jest.mock("public/svgs/disquete.svg", () => mockIcons.ProjectsIcon);
jest.mock("public/svgs/girl.svg", () => mockIcons.AboutIcon);
jest.mock("public/svgs/next.svg", () => mockIcons.NextIcon);
jest.mock("public/svgs/pause.svg", () => mockIcons.PauseIcon);
jest.mock("public/svgs/play.svg", () => mockIcons.PlayIcon);
jest.mock("public/svgs/previous.svg", () => mockIcons.PreviousIcon);
jest.mock("public/svgs/vinyl.svg", () => mockIcons.VinylIcon);
jest.mock("public/svgs/github.svg", () => mockIcons.GitHubIcon);
jest.mock("public/svgs/linkedin.svg", () => mockIcons.LinkedInIcon);
jest.mock("public/svgs/mail.svg", () => mockIcons.MailIcon);
