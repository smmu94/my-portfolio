import Link from "next/link";
import { CardProps } from "./types";

const Card = ({ route, children, label }: CardProps) => {
  return (
    <Link
      href={route}
      className="
        inline-flex flex-col items-center justify-center
        w-[100px] h-[100px] md:w-[120px] md:h-[120px]
        p-3 md:p-5
        bg-dark border-2 border-secondary rounded-2xl
        shadow-md text-center
        transition-all duration-300 ease-in-out transform
        hover:scale-105 hover:shadow-neon
      "
    >
      <div className="flex-1 flex items-center justify-center w-full h-full">
        {children}
      </div>
      <p
        className="
          mt-2 text-light text-center break-words
          text-xs md:text-base lg:text-lg
          leading-tight
        "
      >
        {label}
      </p>
    </Link>
  );
};

export default Card;
