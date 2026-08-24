const BenefitCard = ({ benefit }) => {
  return (
    <article className="group rounded-3xl border border-gray-200 bg-gray-600 p-7 transition-colors duration-300 hover:border-gray-300 sm:p-8">
      <span className="text-sm font-semibold tracking-wider text-white">
        {benefit.number}
      </span>

      <h3 className="mt-12 text-2xl font-semibold tracking-tight text-gray-950">
        {benefit.title}
      </h3>

      <p className="mt-4 text-sm leading-6 text-white sm:text-base">
        {benefit.description}
      </p>

      <div className="mt-8 h-px w-10 bg-gray-300 transition-all duration-300 group-hover:w-16" />
    </article>
  );
};

export default BenefitCard;
