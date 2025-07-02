import React, { useEffect, useState, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

const StepItem = ({ step, index }) => {
  const ref = useRef();
  const inView = useInView(ref, { threshold: 0.2 }); // triggers multiple times
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [inView, controls]);

  // Animation configs
  const textAnimation = {
    hidden: { opacity: 0, x: index % 2 === 0 ? -60 : 60 },
    visible: { opacity: 1, x: 0 },
  };

  const imageAnimation = {
    hidden: { opacity: 0, x: index % 2 === 0 ? 60 : -60 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <div
      ref={ref}
      className="relative flex flex-col md:flex-row items-center gap-8 mb-16"
    >
      {/* Vertical center line */}
      <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-[#000000] z-0" />

      {/* Text Section */}
      <motion.div
        initial="hidden"
        animate={controls}
        variants={textAnimation}
        transition={{ duration: 0.8 }}
        className={`relative z-10 md:w-1/2 p-4 ${
          index % 2 === 0 ? "order-1 md:order-1" : "order-1 md:order-2"
        }`}
      >
        <h3 className="text-xl font-bold  mb-2">{step.title}</h3>
        <p className="text-gray-700">{step.description}</p>
      </motion.div>

      {/* Image Section */}
      <motion.div
        initial="hidden"
        animate={controls}
        variants={imageAnimation}
        transition={{ duration: 0.8, delay: 0.2 }}
        className={`relative z-10 md:w-1/2 p-4 ${
          index % 2 === 0 ? "order-2 md:order-2" : "order-2 md:order-1"
        }`}
      >
        <img
          src={step.image}
          alt={step.title}
          className="rounded w-full shadow-md"
        />
      </motion.div>
    </div>
  );
};

const StepTutorial = () => {
  const [steps, setSteps] = useState([]);

  useEffect(() => {
    fetch("/data/product.json")
      .then((res) => res.json())
      .then((data) => {
        if (data.steps) {
          setSteps(data.steps);
        }
      });
  }, []);

  return (
    <section className="py-16 px-4  max-w-6xl mx-auto">
      <h2 className="text-2xl py-16 md:text-3xl font-bold text-center mb-5">
        Best Plants for Bedroom Setup Tutorial - Watch & Learn!
      </h2>

      <div className="relative">
        {steps.map((step, index) => (
          <StepItem key={index} step={step} index={index} />
        ))}
      </div>
    </section>
  );
};

export default StepTutorial;
