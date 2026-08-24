import StepsCard from "./StepsCard";
import steps from "../Data/steps";

const HowItWorks = () => {
  return (
    <section className="bg-gray-400 px-6 py-20 rounded-2xl z-10 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-black">
            How It Works
          </p>

          <h2 className="mt-4 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            Finding your next home shouldn't be complicated.
          </h2>
        </div>

        {/* Benefits */}
        <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-3">
          {steps.map((step) => (
            <StepsCard key={step.id} step={step} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
