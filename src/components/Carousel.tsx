/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";

type TCarouselProps = {
  children: any;
  auto?: boolean;
  autoSlidesInterval?: number;
};

const Carousel = ({
  children: slides,
  auto = false,
  autoSlidesInterval = 3000,
}: TCarouselProps) => {
  const [current, setCurrent] = useState(0);

  const len = slides.length;

  const prev = () => {
    setCurrent((current) => (current === 0 ? len - 1 : current - 1));
  };
  const next = () => {
    setCurrent((current) => (current === len - 1 ? 0 : current + 1));
  };

  useEffect(() => {
    if (!auto) return;

    const interval = setInterval(next, autoSlidesInterval);
    return () => clearInterval(interval);
  });
  return (
    <div className="overflow-hidden relative w-full">
      <div
        className="flex transition-transform ease-out duration-500"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {slides}
      </div>
      <div className="absolute inset-0 flex justify-between items-center p-4">
        <button
          className="py-2.5 px-4 rounded-full shadow bg-accent/70 hover:bg-accent/50"
          onClick={prev}
        >
          <div className="triangle-right2 flex items-center justify-center rotate-180"></div>
        </button>
        <button
          className="py-2.5 px-4 rounded-full shadow bg-accent/70 text-white hover:bg-accent/50"
          onClick={next}
        >
          <div className="triangle-right2 flex items-center justify-center"></div>
        </button>
      </div>
      <div className="absolute bottom-4 right-0 left-0">
        <div className="flex items-center gap-2 justify-center">
          {slides.map((_: string, i: number) => (
            <div
              key={i}
              className={`transition-all w-3 h-3 bg-black z-50 rounded-full ${
                current === i ? "p-2" : "bg-opacity-50"
              }`}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
