import Image from "next/image";
import { profile } from "./constants";

export default function Home() {
  return (
    <div
      className="flex flex-col items-center justify-center h-full p-2 gap-4 lg:flex-row lg:w-2/3 mx-auto"
      data-testid="home"
    >
      <Image
        src="/images/photo_circle.png"
        alt="myself"
        width={300}
        height={300}
        className="w-52 h-52 md:w-64 md:h-64 lg:w-80 lg:h-80"
      />
      <div
        className="text-center text-light p-4 md:p-8 lg:p-0"
        data-testid="home-text"
      >
        <h1 className="text-xl md:text-3xl text-primary">{profile.name}</h1>
        <h2 className="text-sm md:text-xl">{profile.title}</h2>
        <p className="text-xs mt-6 md:text-sm md:px-4 leading-loose ">
          {profile.description}
        </p>
      </div>
    </div>
  );
}
