import React from "react";
import {
  FaShippingFast,
  FaCreditCard,
  FaUndoAlt,
  FaMoneyBillWave,
} from "react-icons/fa";
import { motion } from "framer-motion";

const features = [
  {
    icon: <FaShippingFast className="text-4xl text-black mb-2" />,
    title: "Free Shipping",
    description: "You will love at great low prices",
  },
  {
    icon: <FaCreditCard className="text-4xl text-black mb-2" />,
    title: "Flexible Payment",
    description: "Pay with Multiple Credit Cards",
  },
  {
    icon: <FaUndoAlt className="text-4xl text-black mb-2" />,
    title: "14 Day Returns",
    description: "Within 30 days for an exchange.",
  },
  {
    icon: <FaMoneyBillWave className="text-4xl text-black mb-2" />,
    title: "Cash on Delivery",
    description: "Service Available within 24 hours",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const FeatureHighlights = () => {
  return (
    <section className="py-10 px-4 bg-gray-100">
      <div className="max-w-7xl mx-auto flex flex-wrap justify-between text-center gap-y-10">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            className="w-full sm:w-1/2 md:w-1/4 flex flex-col items-center px-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            custom={index}
            variants={cardVariants}
          >
            {feature.icon}
            <h4 className="text-lg font-bold text-gray-800">{feature.title}</h4>
            <p className="text-sm font-semibold text-gray-600 mt-1">
              {feature.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default FeatureHighlights;
