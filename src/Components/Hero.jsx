import { useState } from "react";
import { Search, MapPin, ChevronDown, Check } from "lucide-react";

const Hero = () => {
  const [listingType, setListingType] = useState("Buy");
  const [location, setLocation] = useState("");
  const [propertyType, setPropertyType] = useState("");
  const [price, setPrice] = useState("");

  const [openMenu, setOpenMenu] = useState(null);
  const [searchMessage, setSearchMessage] = useState("");

  const locations = ["Indore", "Bhopal", "Jabalpur", "Mumbai", "Delhi"];

  const propertyTypes = [
    "Apartment",
    "Villa",
    "House",
    "Plot",
    "Commercial",
  ];

  const prices = [
    "Under ₹50 Lakh",
    "₹50 Lakh - ₹1 Cr",
    "₹1 Cr - ₹2 Cr",
    "Above ₹2 Cr",
  ];

  const handleSearch = () => {
    const selectedLocation = location || "Any location";
    const selectedProperty = propertyType || "Any property";
    const selectedPrice = price || "Any price";

    setSearchMessage(
      `Searching ${listingType.toLowerCase()} properties in ${selectedLocation} • ${selectedProperty} • ${selectedPrice}`
    );
  };

  const toggleMenu = (menu) => {
    setOpenMenu(openMenu === menu ? null : menu);
  };

  return (

    <section className="object-cover top-0 bg-cover bg-center" style={{
    backgroundImage:
      "url('https://images.unsplash.com/photo-1558442074-3c19857bc1dc?q=80&w=1031&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
  }}
    >
      <div className="mx-auto grid min-h-[calc(100vh-80px)] max-w-7xl items-center gap-12 px-6 py-16 lg:grid-cols-2 lg:px-8 lg:py-20">

        {/* Left Content */}
        <div className="max-w-2xl">
          <p className="mb-5 text-sm font-semibold uppercase tracking-[0.25em] text-black">
            Find your place
          </p>

          <h1 className="text-5xl font-semibold leading-[1.05] tracking-[-0.04em] text-white sm:text-6xl lg:text-7xl">
            Find a home that feels like yours.
          </h1>

          <p className="mt-6 max-w-xl text-base leading-7 text-amber-800 sm:text-lg">
            Discover exceptional homes, apartments, and properties in the
            places you want to live.
          </p>

          {/* Search Box */}
          <div className="mt-10 overflow-visible rounded-2xl border border-white bg-white shadow-xl shadow-gray-200/40">

            {/* Buy / Rent */}
            <div className="flex border-b border-gray-100">
              <button
                onClick={() => setListingType("Buy")}
                className={`px-6 py-4 text-sm font-semibold transition ${
                  listingType === "Buy"
                    ? "border-b-2 border-black text-black"
                    : "text-gray-500 hover:text-black"
                }`}
              >
                Buy
              </button>

              <button
                onClick={() => setListingType("Rent")}
                className={`px-6 py-4 text-sm font-semibold transition ${
                  listingType === "Rent"
                    ? "border-b-2 border-black text-black"
                    : "text-gray-500 hover:text-black"
                }`}
              >
                Rent
              </button>
            </div>

            {/* Search Fields */}
            <div className="grid gap-4 p-4 sm:grid-cols-2 lg:grid-cols-[1.2fr_1fr_1fr_auto] lg:items-end">

              {/* Location */}
              <div className="relative">
                <label className="mb-2 block text-xs font-semibold uppercase tracking-wide text-white">
                  Location
                </label>

                <button
                  onClick={() => toggleMenu("location")}
                  className="flex w-full items-center gap-2 text-left text-sm font-medium text-gray-800"
                >
                  <MapPin size={18} strokeWidth={1.8} />

                  <span>
                    {location || "Choose location"}
                  </span>

                  <ChevronDown
                    size={17}
                    className="ml-auto"
                  />
                </button>

                {openMenu === "location" && (
                  <div className="absolute left-0 top-full z-20 mt-3 w-full min-w-45 overflow-hidden rounded-xl border border-gray-200 bg-white p-2 shadow-xl">
                    {locations.map((item) => (
                      <button
                        key={item}
                        onClick={() => {
                          setLocation(item);
                          setOpenMenu(null);
                        }}
                        className="flex w-full items-center justify-between rounded-lg px-3 py-2.5 text-left text-sm hover:bg-gray-100"
                      >
                        {item}

                        {location === item && (
                          <Check size={16} />
                        )}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Property Type */}
              <div className="relative">
                <label className="mb-2 block text-xs font-semibold uppercase tracking-wide text-white">
                  Property
                </label>

                <button
                  onClick={() => toggleMenu("property")}
                  className="flex w-full items-center justify-between text-left text-sm font-medium text-gray-800"
                >
                  <span>
                    {propertyType || "Any type"}
                  </span>

                  <ChevronDown size={17} />
                </button>

                {openMenu === "property" && (
                  <div className="absolute left-0 top-full z-20 mt-3 w-full min-w-45 overflow-hidden rounded-xl border border-gray-200 bg-white p-2 shadow-xl">
                    {propertyTypes.map((item) => (
                      <button
                        key={item}
                        onClick={() => {
                          setPropertyType(item);
                          setOpenMenu(null);
                        }}
                        className="flex w-full items-center justify-between rounded-lg px-3 py-2.5 text-left text-sm hover:bg-gray-100"
                      >
                        {item}

                        {propertyType === item && (
                          <Check size={16} />
                        )}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Price */}
              <div className="relative">
                <label className="mb-2 block text-xs font-semibold uppercase tracking-wide text-white">
                  Price
                </label>

                <button
                  onClick={() => toggleMenu("price")}
                  className="flex w-full items-center justify-between text-left text-sm font-medium text-gray-800"
                >
                  <span>
                    {price || "Any price"}
                  </span>

                  <ChevronDown size={17} />
                </button>

                {openMenu === "price" && (
                  <div className="absolute left-0 top-full z-20 mt-3 w-full min-w-50 overflow-hidden rounded-xl border border-gray-200 bg-white p-2 shadow-xl">
                    {prices.map((item) => (
                      <button
                        key={item}
                        onClick={() => {
                          setPrice(item);
                          setOpenMenu(null);
                        }}
                        className="flex w-full items-center justify-between rounded-lg px-3 py-2.5 text-left text-sm hover:bg-gray-100"
                      >
                        {item}

                        {price === item && (
                          <Check size={16} />
                        )}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Search */}
              <button
                onClick={handleSearch}
                className="flex h-12 items-center justify-center gap-2 rounded-xl bg-black px-6 text-sm font-semibold text-white transition hover:bg-gray-800"
              >
                <Search size={18} />
                <span>Search</span>
              </button>
            </div>

            {/* Search Result */}
            {searchMessage && (
              <div className="border-t border-gray-100 px-4 py-3 text-sm text-gray-500">
                {searchMessage}
              </div>
            )}
          </div>
        </div>

      </div> 
    </section>
    
    
    
  );
};

export default Hero;