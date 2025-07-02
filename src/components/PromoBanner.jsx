import React from "react";
import Typewriter from "typewriter-effect";

const PromoBanner = () => {
  return (
    <section className="py-12 px-4">
      {/* Typewriter Title */}
      <h2 className="text-2xl md:text-4xl font-bold text-center mt-4 mb-10">
        <Typewriter
          options={{
            strings: [
              "Best Plants for Bedroom Setup Tutorial – Watch & Learn!",
            ],
            autoStart: true,
            loop: true,
            delay: 50,
          }}
        />
      </h2>

      {/* Grid Banner */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-2">
        {/* Left Side - Large Image (3 columns out of 5) */}
        <div className="relative group md:col-span-3 h-[700px] overflow-hidden ">
          <img
            src="/images/b-g1.png"
            alt="Banner 1"
            className="w-full h-full object-cover rounded-[20px] transition duration-500 group-hover:scale-105"
          />
          <button className="absolute bottom-4 left-4 px-4 py-2 rounded-[20px] bg-black text-white group-hover:bg-white group-hover:text-black transition font-semibold">
            Shop Now
          </button>
        </div>

        {/* Right Side - Stacked Images (2 columns out of 5) */}
        <div className="flex flex-col gap-2 md:col-span-2">
          <div className="relative group h-[345px] overflow-hidden ">
            <img
              src="/images/b-g2.png"
              alt="Banner 2"
              className="w-full h-full object-cover rounded-[20px] transition duration-500 group-hover:scale-105"
            />
            <button className="absolute bottom-4 left-4 px-4 py-2 rounded-[20px] bg-black text-white group-hover:bg-white group-hover:text-black transition font-semibold">
              Shop Now
            </button>
          </div>
          <div className="relative group h-[345px] overflow-hidden ">
            <img
              src="/images/b-g3.png"
              alt="Banner 3"
              className="w-full h-full object-cover rounded-[20px] transition duration-500 group-hover:scale-105"
            />
            <button className="absolute bottom-4 left-4 px-4 py-2 rounded-[20px] bg-black text-white group-hover:bg-white group-hover:text-black transition font-semibold">
              Shop Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PromoBanner;
