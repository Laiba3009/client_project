import React from "react";
import Typewriter from "typewriter-effect";

const PromoBanner = () => {
  return (
    <section className="py-8 px-4">
      {/* Typewriter Title */}
      <h2 className="text-xl sm:text-2xl md:text-4xl font- text-center mb-8 text-black">
        <Typewriter
          options={{
            strings: ["Coastal Farmhouse Decor House Plants for Sale!"],
            autoStart: true,
            loop: true,
            delay: 10,
          }}
        />
      </h2>

      {/* Grid Layout */}
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-5 gap-2 sm:gap-2">
        {/* Left Large Image */}
        <div className="relative group md:col-span-3 h-[600px] overflow-hidden rounded-xl">
          <img
            src="/images/b-g1.png"
            alt="Banner 1"
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <button className="absolute bottom-4 left-4 px-4 py-2 rounded-full bg-black text-white font-semibold transition-all duration-300 opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 group-hover:bg-white group-hover:text-black text-sm sm:text-base">
            Shop Now
          </button>
        </div>

        {/* Right Stacked Images */}
        <div className="md:col-span-2 flex flex-col gap-1 h-[600px]">
          {[2, 3].map((n, i) => (
            <div key={i} className="relative group h-1/2 overflow-hidden rounded-xl">
              <img
                src={`/images/b-g${n}.png`}
                alt={`Banner ${n}`}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <button className="absolute bottom-4 left-4 px-4 py-2 rounded-full bg-black text-white font-semibold transition-all duration-300 opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 group-hover:bg-white group-hover:text-black text-sm sm:text-base">
                Shop Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PromoBanner;
