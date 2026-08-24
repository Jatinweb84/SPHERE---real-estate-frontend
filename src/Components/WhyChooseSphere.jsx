import BenefitCard from "./BenefitCard";
import benefits from "../Data/benefits";

const WhyChooseSphere = () => {
  return (
    <section className="bg-gray-50 px-6 py-20 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-gray-400">
            Why Sphere
          </p>

          <h2 className="mt-4 text-4xl font-semibold tracking-tight text-gray-950 sm:text-5xl">
            A better way to find your next property.
          </h2>

          <p className="mt-5 text-base leading-7 text-gray-500 sm:text-lg">
            We make the property search experience simpler, clearer, and more
            reliable from discovery to decision.
          </p>
        </div>

        {/* Benefits */}
        <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-3">
          {benefits.map((benefit) => (
            <BenefitCard key={benefit.id} benefit={benefit} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSphere;
