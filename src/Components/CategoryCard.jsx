const CategoryCard = ({ category }) => {
  return (
    <article className="group overflow-hidden rounded-3xl bg-gray-100">
      {/* Image */}
      <div className="relative aspect-4/3 overflow-hidden">
        <img
          src={category.image}
          alt={category.title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-linear-to-r from-black/50 via-transparent to-transparent" />

        {/* Content */}
        <div className="absolute bottom-0 left-0 right-0 p-6 text-white  stroke-blue-50">
          <h3 className="text-2xl font-semibold">{category.title}</h3>

          <p className="mt-2 max-w-sm text-sm leading-6 text-white/80">
            {category.description}
          </p>

          <button
            type="button"
            className="mt-5 text-sm font-semibold transition-transform duration-300 group-hover:translate-x-1"
          >
            Explore →
          </button>
        </div>
      </div>
    </article>
  );
};

export default CategoryCard;
