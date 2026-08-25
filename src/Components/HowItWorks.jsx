import StepsCard from "./StepsCard";
import steps from "../data/steps";

const HowItWorks = () => {
  return (
    <section
      className="relative min-h-162.5 overflow-hidden bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=2000&q=85')",
      }}
    >
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-black/55" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-162.5 max-w-7xl flex-col justify-between px-6 py-16 lg:px-8 lg:py-20">
        {/* Header */}
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-white/60">
            How It Works
          </p>

          <h2 className="mt-5 text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Finding your next home shouldn't be complicated.
          </h2>

          <p className="mt-6 max-w-xl text-base leading-7 text-white/70 sm:text-lg">
            From discovering the right property to connecting with the right
            people, SPHERE makes the journey simple.
          </p>
        </div>

        {/* Steps */}
        <div className="mt-16 grid gap-10 md:grid-cols-3 md:gap-8">
          {steps.map((step) => (
            <StepsCard key={step.id} step={step} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
