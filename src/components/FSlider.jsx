import React, { useState } from "react";
import Typewriter from "typewriter-effect";
import { FiShoppingBag } from "react-icons/fi";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { motion } from "framer-motion";

const products = [
  {
    title: "Bamboo Hanging Art",
    description: "Eco-friendly wall decor with a natural rustic feel perfect for any space.",
    image: "/images/f-slide1.png",
  },
  {
    title: "Indoor Plant Pot",
    description: "Elegant handcrafted bamboo pot for modern interiors and gardens.",
    image: "/images/f-slide2.png",
  },
  {
    title: "Hanging Swing Chair",
    description: "Comfortable swing chair with bamboo elements, perfect for outdoors.",
    image: "/images/f-slide3.png",
  },
  {
    title: "Bubble Hanging Chair",
    description: "Modern clear bubble chair that fits perfectly in minimalistic homes.",
    image: "/images/f-slide4.png",
  },
  {
    title: "Wooden Plant Stand",
    description: "Space-saving wooden stand for indoor and outdoor use.",
    image: "/images/f-slide5.png",
  },
  {
    title: "Bamboo Floor Lamp",
    description: "Ambient bamboo lighting piece that enhances earthy aesthetics.",
    image: "/images/f-slide6.png",
  },
];

const ITEMS_PER_PAGE = 4;

const FSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => Math.max(0, prev - ITEMS_PER_PAGE));
  };

  const handleNext = () => {
    setCurrentIndex((prev) =>
      Math.min(products.length - ITEMS_PER_PAGE, prev + ITEMS_PER_PAGE)
    );
  };

  const visibleItems = products.slice(
    currentIndex,
    currentIndex + ITEMS_PER_PAGE
  );

  return (
    <section className="bg-gray-100 py-12 px-4 relative">
      {/* Top Typewriter Title (smaller) */}
      <h2 className="text-xl md:text-2xl font-semibold text-center mt-4 mb-1">
        <Typewriter
          options={{
            strings: ["Explore Full Collection"],
            autoStart: true,
            loop: true,
            delay: 50,
          }}
        />
      </h2>

      {/* Second Title (larger) */}
      <motion.h3
        className="text-2xl md:text-3xl text-center font-bold text-gray-800 mb-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        All Time Popular Products
      </motion.h3>

      {/* Slider Arrows */}
      <button
        onClick={handlePrev}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white text-black p-2 rounded-full shadow hover:bg-black hover:text-white"
        disabled={currentIndex === 0}
      >
        <FaChevronLeft />
      </button>
      <button
        onClick={handleNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white text-black p-2 rounded-full shadow hover:bg-black hover:text-white"
        disabled={currentIndex + ITEMS_PER_PAGE >= products.length}
      >
        <FaChevronRight />
      </button>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-7xl mx-auto">
        {visibleItems.map((product, index) => (
          <motion.div
            key={index}
            className="rounded-xl overflow-hidden shadow group relative transition"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            {/* Image with Add to Cart */}
            <div className="relative h-56 w-full overflow-hidden group">
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-full object-cover"
              />

              {/* Add to Cart Button at bottom of image */}
              <div className="absolute bottom-2 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition duration-300">
                <button className="bg-black text-white px-4 py-1 rounded-[20px] text-sm flex items-center gap-2 hover:bg-white hover:text-black border hover:border-black">
                  <FiShoppingBag className="text-base" />
                  Add to Cart
                </button>
              </div>
            </div>

            {/* Description below image */}
            <div className="p-3">
              <p className="text-sm text-gray-800 line-clamp-1">
                {product.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default FSlider;
