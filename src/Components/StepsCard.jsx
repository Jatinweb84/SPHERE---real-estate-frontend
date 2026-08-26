const StepsCard = ({ step }) => {
  return (
    <article className="border-t border-white/30 pt-6">
      <span className="text-sm font-medium text-white/60">{step.number}</span>

      <h3 className="mt-8 text-2xl font-semibold text-white">{step.title}</h3>

      <p className="mt-4 text-sm leading-6 text-white/70">{step.description}</p>
    </article>
  );
};

export default StepsCard;
