"use client";
import Carrousel from "app/about/components/carousel";
import { ABOUT_CONSTANTS } from "./constants";

export default function About() {
  return (
    <div className="w-full px-6 md:px-16 text-light text-xs mt-4 leading-loose">
      <div className="max-w-5xl mx-auto flex flex-col gap-10 items-center justify-center">
        <h1 className="text-lg font-semibold text-center text-primary mb-2">
          {ABOUT_CONSTANTS.title}
        </h1>
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-6 w-full">
          <div className="text-justify w-full">
            <p className="mb-4">{ABOUT_CONSTANTS.description[0]}</p>
            <p className="mb-4">{ABOUT_CONSTANTS.description[1]}</p>
            <p>{ABOUT_CONSTANTS.description[2]}</p>
          </div>
        </div>
        <div className="w-full flex flex-col gap-6">
          <p data-testid="personal-interests">
            <span className="text-primary font-bold">
              {ABOUT_CONSTANTS.personalInterests.title}:
            </span>{" "}
            {ABOUT_CONSTANTS.personalInterests.description}
          </p>
          <Carrousel />
        </div>
      </div>
    </div>
  );
}
