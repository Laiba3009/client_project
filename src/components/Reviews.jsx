import React, { useState, useEffect } from "react";
import { FaStar } from "react-icons/fa";
import { motion } from "framer-motion";

const reviews = [
  {
    name: "Laiba Jaweed",
    image: "/images/image3.png",
    avatar: "/images/user.png",
    text: "Absolutely loved this product! The quality and finish exceeded my expectations. Highly recommended for any eco-friendly home decor.",
  },
  {
    name: "Ayesha Khan",
    image: "/images/image2.png",
    avatar: "/images/user.png",
    text: "Stylish and sustainable! Looks perfect in my bedroom. The craftsmanship is clearly visible in every detail.",
  },
  {
    name: "Zainab Malik",
    image: "/images/image7.png",
    avatar: "/images/user.png",
    text: "Delivered on time and beautifully packed. Will definitely buy more for gifting purposes. Love the natural feel.",
  },
  {
    name: "Sara Ahmed",
    image: "/images/image4.png",
    avatar: "/images/user.png",
    text: "This added a beautiful natural vibe to my living room. Really appreciate the eco-conscious design!",
  },
  {
    name: "Fatima Shah",
    image: "/images/image5.png",
    avatar: "/images/user.png",
    text: "Perfect quality and fast delivery! I will be ordering more. It suits every kind of room decor.",
  },
  {
    name: "Noor Bukhari",
    image: "/images/image6.png",
    avatar: "/images/user.png",
    text: "Such a unique and eye-catching product. Totally worth it, and I loved the eco packaging too!",
  },
];

const Reviews = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % reviews.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const handleSelect = (index) => {
    setCurrent(index);
  };

  return (
    <section className="max-w-6xl mx-auto py-16 px-4">
      {/* Animated Title */}
      <motion.h2
        className="text-3xl font-bold text-center mb-10"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.8 }}
      >
        Hear What Our Customers Say About Indoor Plant Wall!
      </motion.h2>

      <div className="grid md:grid-cols-2 gap-10 items-center">
        {/* Left: Image Slider */}
        <div className="relative w-full h-[400px] rounded-xl overflow-hidden">
          {reviews.map((review, index) => (
            <img
              key={index}
              src={review.image}
              alt={review.name}
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
                current === index ? "opacity-100" : "opacity-0"
              }`}
            />
          ))}

          {/* Dots */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
            {reviews.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full ${
                  current === index ? "bg-black" : "bg-gray-300"
                }`}
                onClick={() => handleSelect(index)}
              ></button>
            ))}
          </div>
        </div>

        {/* Right: Text Review */}
        <div className="text-gray-800">
          <p className="text-lg italic mb-4">
            “{reviews[current].text}”
          </p>

          {/* Customer Info */}
          <div className="flex items-center gap-4">
            <img
              src={reviews[current].avatar}
              alt={reviews[current].name}
              className="w-12 h-12 rounded-full object-cover border-2 border-yellow-400"
            />
            <p className="text-sm font-semibold">{reviews[current].name}</p>
          </div>

          {/* Stars */}
          <div className="flex items-center gap-1 mt-2 text-yellow-500">
            {Array.from({ length: 5 }).map((_, i) => (
              <FaStar key={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
