import { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import PropertyCard from "./PropertyCard";
import { properties } from "../data/properties";

const PropertyCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const visibleCards = 3;

  const maxIndex = Math.max(0, properties.length - visibleCards);

  const next = () => {
    setCurrentIndex((current) => Math.min(current + 1, maxIndex));
  };

  const previous = () => {
    setCurrentIndex((current) => Math.max(current - 1, 0));
  };

  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="mb-10 flex items-end justify-between gap-6">
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-gray-400">
              Handpicked for you
            </p>

            <h2 className="text-4xl font-semibold tracking-[-0.03em] text-gray-950 sm:text-5xl">
              Featured Properties
            </h2>

            <p className="mt-4 max-w-xl text-gray-500">
              Explore a selection of exceptional properties chosen for their
              location, design, and lifestyle.
            </p>
          </div>

          {/* Navigation */}
          <div className="hidden gap-2 sm:flex">
            <button
              onClick={previous}
              disabled={currentIndex === 0}
              aria-label="Previous properties"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-gray-200 transition hover:bg-gray-100 disabled:cursor-not-allowed disabled:opacity-30"
            >
              <ArrowLeft size={18} />
            </button>

            <button
              onClick={next}
              disabled={currentIndex === maxIndex}
              aria-label="Next properties"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-gray-200 transition hover:bg-gray-100 disabled:cursor-not-allowed disabled:opacity-30"
            >
              <ArrowRight size={18} />
            </button>
          </div>
        </div>

        {/* Carousel */}
        <div className="overflow-hidden">
          <div
            className="grid grid-flow-col auto-cols-[85%] gap-5 transition-transform duration-500 ease-out sm:auto-cols-[48%] lg:auto-cols-[32.5%]"
            style={{
              transform: `translateX(calc(-${currentIndex} * (32.5% + 20px)))`,
            }}
          >
            {properties.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
        </div>

        {/* Mobile controls */}
        <div className="mt-6 flex justify-center gap-2 sm:hidden">
          <button
            onClick={previous}
            disabled={currentIndex === 0}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-gray-200 disabled:opacity-30"
          >
            <ArrowLeft size={18} />
          </button>

          <button
            onClick={next}
            disabled={currentIndex === maxIndex}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-gray-200 disabled:opacity-30"
          >
            <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default PropertyCarousel;
