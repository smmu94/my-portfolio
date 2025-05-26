import Image from "next/image";
import ChevronLeft from "public/svgs/chevron_left.svg";
import ChevronRight from "public/svgs/chevron_right.svg";
import { useEffect, useState } from "react";
import { images, visibleCards_desktop, visibleCards_mobile } from "./constants";

export default function Carousel() {
  const [index, setIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState(visibleCards_desktop);

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth < 768) {
        setVisibleCards(visibleCards_mobile);
      } else {
        setVisibleCards(visibleCards_desktop);
      }
    }

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const maxIndex = images.length - visibleCards;

  const handlePrev = () => {
    setIndex((prev) => (prev === 0 ? maxIndex : prev - 1));
  };

  const handleNext = () => {
    setIndex((prev) => (prev === maxIndex ? 0 : prev + 1));
  };

  return (
    <div className="relative w-full h-48 mt-4">
      <button
        onClick={handlePrev}
        className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-primary p-2 rounded-full text-light"
        data-testid="previous"
      >
        <ChevronLeft size={20} data-testid="previous" />
      </button>
      <button
        onClick={handleNext}
        style={{ right: "24px" }}
        className="absolute top-1/2 -translate-y-1/2 z-10 bg-primary p-2 rounded-full text-light"
        data-testid="next"
      >
        <ChevronRight size={20} />
      </button>
      <div className="overflow-hidden w-full h-full px-12">
        <div
          className="flex gap-4 transition-transform duration-500 h-full"
          style={{
            transform: `translateX(-${index * (100 / images.length)}%)`,
            width: `${(images.length * 100) / visibleCards}%`,
          }}
          role="list"
        >
          {images.map((img, i) => (
            <div
              key={i}
              className="relative h-full rounded-xl overflow-hidden flex-shrink-0"
              style={{ width: `${100 / images.length}%` }}
            >
              <Image
                src={img}
                alt={`Interest ${i + 1}`}
                fill
                className="object-cover rounded-xl"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
