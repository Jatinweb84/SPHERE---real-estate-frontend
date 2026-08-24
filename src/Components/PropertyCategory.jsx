import CategoryCard from "./CategoryCard";
import categories from "../data/categories";

const PropertyCategories = () => {
  return (
    <section className="bg-black px-6 py-20 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-12 max-w-2xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-gray-400">
            Explore
          </p>

          <h2 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            Find a property that fits your lifestyle.
          </h2>

          <p className="mt-5 text-base leading-7 text-gray-500 sm:text-lg">
            Explore different types of properties and discover a place that
            feels right for you.
          </p>
        </div>

        {/* Category Grid */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((category) => (
            <CategoryCard key={category.id} category={category} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PropertyCategories;
