import { useState } from "react";
import { Star, Quote } from "lucide-react";
import TestimonialCard from "./TestimonialCard";
import { testimonials } from "../Data/testimonials";

const TestimonialSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const activeTestimonial = testimonials[activeIndex];

  return (
    <section className="overflow-hidden bg-gray-950 px-6 py-20 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="flex flex-col justify-between gap-6 border-b border-white/10 pb-10 md:flex-row md:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-white/40">
              Client Stories
            </p>

            <h2 className="mt-4 max-w-2xl text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              Real people.
              <br />
              Real experiences.
            </h2>
          </div>

          <p className="max-w-sm text-sm leading-6 text-white/50">
            Discover why people choose SPHERE when searching for their next
            property.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid gap-12 py-14 lg:grid-cols-[1.5fr_1fr] lg:items-center">
          {/* Large Quote */}
          <div>
            <Quote size={42} strokeWidth={1.5} className="text-white/20" />

            <blockquote className="mt-8 max-w-3xl text-3xl font-medium leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
              “{activeTestimonial.quote}”
            </blockquote>

            {/* Rating */}
            <div className="mt-8 flex gap-1">
              {Array.from({ length: activeTestimonial.rating }).map(
                (_, index) => (
                  <Star
                    key={index}
                    size={16}
                    fill="currentColor"
                    className="text-white"
                  />
                ),
              )}
            </div>

            {/* Active Client */}
            <div className="mt-8 flex items-center gap-4">
              <img
                src={activeTestimonial.image}
                alt={activeTestimonial.name}
                className="h-12 w-12 rounded-full object-cover"
              />

              <div>
                <p className="font-semibold text-white">
                  {activeTestimonial.name}
                </p>

                <p className="mt-1 text-sm text-white/40">
                  {activeTestimonial.role}
                </p>
              </div>
            </div>
          </div>

          {/* Testimonial Selectors */}
          <div className="space-y-3">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={testimonial.id}
                testimonial={testimonial}
                isActive={activeIndex === index}
                onClick={() => setActiveIndex(index)}
              />
            ))}
          </div>
        </div>

        {/* Bottom indicator */}
        <div className="flex items-center gap-3 border-t border-white/10 pt-8">
          <span className="text-sm font-medium text-white">
            {String(activeIndex + 1).padStart(2, "0")}
          </span>

          <div className="h-px w-16 bg-white/20">
            <div
              className="h-full bg-white transition-all duration-300"
              style={{
                width: `${((activeIndex + 1) / testimonials.length) * 100}%`,
              }}
            />
          </div>

          <span className="text-sm text-white/30">
            {String(testimonials.length).padStart(2, "0")}
          </span>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
