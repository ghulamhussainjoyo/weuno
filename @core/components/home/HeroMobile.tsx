"use client";

import { FC, useCallback, useEffect, useRef, useState } from "react";
import HeroOverlay from "./HeroOverlay";
import Navbar from "../nav/Navbar";
import { images } from "@/rda/constants/hero";
import { cn } from "@/rda/lib/utils";

interface HeroProps {
  className?: string;
}

export const HeroMobile: FC<HeroProps> = ({ className }) => {
  const navbarRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const observerRef = useRef<IntersectionObserver | null>(null);

  const handleIntersection = useCallback(
    (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = Number(entry.target.getAttribute("data-index"));
          setCurrentIndex(index);
        }
      });
    },
    []
  );

  useEffect(() => {
    // Initialize intersection observer
    observerRef.current = new IntersectionObserver(handleIntersection, {
      root: null, // Use viewport as root
      threshold: 0.5, // Trigger when 50% of element is visible
    });

    // Get all slide elements and observe them
    const slides = document.querySelectorAll("[data-slide]");
    slides.forEach((slide) => {
      if (observerRef.current) {
        observerRef.current.observe(slide);
      }
    });

    return () => {
      // Cleanup
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [handleIntersection]);

  return (
    <div className={cn("relative w-full h-full", className)}>
      <Navbar className="absolute z-50" ref={navbarRef} />
      <div className="absolute inset-0 flex overflow-x-auto snap-x snap-mandatory">
        {images.map((item, index) => (
          <HeroOverlay
            key={index}
            imageSrc={item.src}
            className="w-screen flex-shrink-0 snap-center"
          >
            {/* Add data attributes for tracking */}
            <div
              data-slide
              data-index={index}
              className="text-white w-full h-full flex flex-col justify-between px-8 pr-[3rem] py-24"
            >
              {/* TEXT  */}
              <section
                className="w-full space-y-6"
                style={{
                  marginTop: 20 + (navbarRef.current?.clientHeight || 0),
                }}
              >
                <div className="space-y-4">
                  <h6 className="text-xs font-medium">{item.prefixTitle}</h6>
                  <img
                    src="/assets/images/hero-h2.png"
                    alt="hero heading"
                    className="w-auto"
                  />
                  <p className="text-xs">{item.description}</p>
                </div>

                <button
                  style={{ marginTop: 64 }}
                  className=" flex justify-between px-5 py-[14px] space-x-20  bg-gradient-to-b from-[#AD8749] to-[#DCBB75] rounded-[16px]"
                >
                  <span>Book reservation now</span>
                  <img
                    src={"/assets/svgs/arrow-right.svg"}
                    alt="chevron-down"
                    className="w-5 h-5"
                  />
                </button>
              </section>

              {/* SCROLL */}
              <section></section>
            </div>
          </HeroOverlay>
        ))}
      </div>

      {/* Updated indicators to show active state */}
      <div className="absolute right-0 bottom-10 text-white mr-3 flex gap-x-[0.5px]">
        {images.map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full mx-1 transition-all duration-300 ${
              currentIndex === index ? "bg-white scale-110" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroMobile;
