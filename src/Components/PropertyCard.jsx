import { Heart, MapPin, BedDouble, Bath, Maximize } from "lucide-react";
import { useState } from "react";

const PropertyCard = ({ property }) => {
  const [saved, setSaved] = useState(false);

  return (
    <article className="group min-w-0 overflow-hidden rounded-2xl border border-gray-200 bg-white">
      {/* Image */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={property.image}
          alt={property.title}
          className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
        />

        {/* Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-60" />

        {/* Type */}
        <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1.5 text-xs font-semibold backdrop-blur-sm">
          {property.type}
        </span>

        {/* Favorite */}
        <button
          onClick={() => setSaved(!saved)}
          aria-label={saved ? "Remove from favorites" : "Add to favorites"}
          className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 backdrop-blur-sm transition hover:scale-105"
        >
          <Heart size={17} className={saved ? "fill-black" : ""} />
        </button>
      </div>

      {/* Details */}
      <div className="p-5">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="text-lg font-semibold tracking-tight text-gray-950">
              {property.title}
            </h3>

            <div className="mt-1.5 flex items-center gap-1.5 text-sm text-gray-500">
              <MapPin size={14} />
              <span>{property.location}</span>
            </div>
          </div>

          <p className="whitespace-nowrap text-sm font-bold text-gray-950">
            {property.price}
          </p>
        </div>

        {/* Property details */}
        <div className="mt-5 flex items-center gap-4 border-t border-gray-100 pt-4 text-xs text-gray-500">
          <span className="flex items-center gap-1.5">
            <BedDouble size={15} />
            {property.beds} Beds
          </span>

          <span className="flex items-center gap-1.5">
            <Bath size={15} />
            {property.baths} Baths
          </span>

          <span className="flex items-center gap-1.5">
            <Maximize size={15} />
            {property.area}
          </span>
        </div>
      </div>
    </article>
  );
};

export default PropertyCard;
