import { ArrowUpRight } from "lucide-react";

const CTA = () => {
  return (
    <section className="px-6 py-16 sm:py-20 lg:px-8 lg:py-24">
      <div
        className="relative mx-auto min-h-125 max-w-7xl overflow-hidden rounded-4xl bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=2000&q=85')",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/55" />

        {/* Content */}
        <div className="relative z-10 flex min-h-125 flex-col items-center justify-center px-6 py-16 text-center sm:px-10">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-white/60">
            Find your place
          </p>

          <h2 className="mt-5 max-w-3xl text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
            Your next chapter starts here.
          </h2>

          <p className="mt-6 max-w-xl text-base leading-7 text-white/70 sm:text-lg">
            Explore exceptional properties and discover a place that feels like
            it was made for you.
          </p>

          {/* CTA Buttons */}
          <div className="mt-9 flex w-full flex-col justify-center gap-3 sm:w-auto sm:flex-row">
            <a
              href="#properties"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-white px-7 text-sm font-semibold text-gray-950 transition hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-900"
            >
              Explore Properties
              <ArrowUpRight size={17} />
            </a>

            <a
              href="#contact"
              className="inline-flex h-12 items-center justify-center rounded-full border border-white/30 bg-white/10 px-7 text-sm font-semibold text-white backdrop-blur-sm transition hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white"
            >
              Talk to an Expert
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
