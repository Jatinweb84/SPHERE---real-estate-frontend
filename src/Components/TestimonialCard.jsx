import { Star } from "lucide-react";

const TestimonialCard = ({ testimonial, isActive, onClick }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`w-full rounded-2xl p-4 text-left transition-all duration-300 ${
        isActive
          ? "bg-white text-gray-950"
          : "bg-white/5 text-white hover:bg-white/10"
      }`}
    >
      <div className="flex items-center gap-4">
        <img
          src={testimonial.image}
          alt={testimonial.name}
          className="h-12 w-12 rounded-full object-cover"
        />

        <div className="min-w-0">
          <p className="truncate text-sm font-semibold">{testimonial.name}</p>

          <p
            className={`mt-1 text-xs ${
              isActive ? "text-gray-500" : "text-white/50"
            }`}
          >
            {testimonial.role}
          </p>
        </div>
      </div>
    </button>
  );
};

export default TestimonialCard;
