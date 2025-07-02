import React, { useState } from "react";
import { FiPlus, FiMinus } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "Is a Rocking Chair Automatic Safe for Outdoor Use?",
    answer:
      "Yes, automatic rocking chairs are crafted with high-quality weather-resistant materials that make them perfect for outdoor use. These chairs are not just functional but also elevate the look of your outdoor setting—whether it’s a bamboo canopy in your lawn, a stylish gazebo, or a relaxing setup near flower pots and hanging bamboo décor. They’re a great match for bamboo furniture and provide comfort and motion for your garden seating area.",
  },
  {
    question: "What Makes the Hanging Bubble Chair So Popular?",
    answer:
      "Its modern aesthetic, see-through acrylic design, and cozy feel make it a trending choice for both indoor and outdoor spaces. Plus, it pairs beautifully with minimal bamboo or wooden accents.",
  },
  {
    question: "Can I Buy a Porch Swing That Fits Small Lawns?",
    answer:
      "Absolutely. Many compact and foldable porch swings are designed specifically for smaller outdoor spaces without sacrificing comfort or design.",
  },
  {
    question: "Is the Outdoor Hammock Chair Comfortable for Long Use?",
    answer:
      "Yes! These chairs offer ergonomic support with breathable fabric, making them ideal for lounging long hours in your garden, patio, or balcony.",
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section className="max-w-4xl mx-auto py-16 px-4">
      {/* Animated Title */}
      <motion.h2
        className="text-3xl font-bold text-center mb-10"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        Everything You Need to Know
      </motion.h2>

      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border border-gray-300 rounded-md p-4 shadow-sm hover:shadow-md transition cursor-pointer"
            onClick={() => toggleFAQ(index)}
          >
            <div className="flex justify-between items-center">
              <p className="font-semibold text-base md:text-lg">{faq.question}</p>

              <motion.div
                initial={false}
                animate={{ rotate: openIndex === index ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                {openIndex === index ? (
                  <FiMinus className="text-xl" />
                ) : (
                  <FiPlus className="text-xl" />
                )}
              </motion.div>
            </div>

            <AnimatePresence>
              {openIndex === index && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.4 }}
                  className="mt-3 text-gray-700 text-sm leading-relaxed"
                >
                  {faq.answer}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQSection;
