import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { AnimatePresence, motion } from "framer-motion";

const Accordion = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const convertToHtml = (text) =>
    text
      .replace(/\n/g, "<br>")
      .replace(/–/g, "-")
      .replace(/×/g, "x")
      .replace(/≈/g, "~");

  const product = {
    description: `Crafted from durable bamboo for long-lasting use. Enhance your garden with our large bamboo flower pot with stand — perfect for outdoor pots and planters. Designed for large flower pots, it adds elegance to any space. Ideal for flower pots for outside. 

Key Features:
• Best container plants for your space
• Premium quality for those looking to buy plant pots
• Perfect for flower pots for sale seekers
• Versatile choice for any setting
• Made with Dracaena Lucky Bamboo
• Free from harmful weather effects
• Easy on the pocket
• Made from sustainable bamboo with a natural look

Indoor Use:
• Long-lasting quality for indoor decor
• Suitable for all seasons
• Lightweight, durable & eco-friendly`,
    specification: `Product Name: Bamboo Flower Pot - Perfect for Home & Garden
Material: 100% sustainable, hand-woven bamboo (stronger than plastic alternatives)
Finish & Protection: UV-stable varnish, waterproof sealant, anti-insect chemical treatment (longer life, high gloss)
Weather Resistance: Fade-proof colour; safe from rain, sun (-5°C to 45°C) and high humidity
Dimensions / Size Options: Ø 25 cm x H 60 cm (Large), Ø 20 cm x H 45 cm (Medium)
Weight: ~ 1.2 kg (lightweight yet sturdy)
Colour Choices: Natural Bamboo, Honey, Caramel
Plant Compatibility: Fits 10–12 in nursery pots; ideal for Lucky Bamboo, Dracaena, Snake Plant, Artificial Flowers
Best Use-Cases: Living rooms, balconies, offices, cafes, restaurants, weddings, birthdays — great gift item
Eco-Credentials: Plastic-free, biodegradable, low-carbon craft; supports local artisans (100% hand-crafted)
Maintenance: Simply wipe with a damp cloth; no repainting needed
Package Includes: 1 x Bamboo Planter, 1 x Detachable Stand, Optional Artificial Lucky Bamboo Stems`,
    warrantySupport: `Customers must provide photo or video evidence of the issue before the return is approved.

How to Request a Return:
Email us at ecobambooarts@gmail.com with your order number and proof of the issue.

Return Address:
Bamboohandicrafts, Near PSO Petrol Pump Chakian, Shop Number 35, Karkhane Wali Abadi, Near Ali Niaz Sweet, Chakian, Dakkhana Khas, Dhori, Tehsil Bhalwal, District Sargodha, Postal Code 40100, Phularwa 40410, Pakistan.

Important: Items sent back without prior approval will not be accepted.

2. Damages & Issues:
Please inspect your order upon delivery. If your item is damaged, defective, or incorrect, contact us immediately at ecobambooarts@gmail.com or call +92 341 6995870 so we can resolve the issue.

3. Non-Returnable Items:
Certain items cannot be returned, including used or washed items. If unsure, contact us before initiating a return.

4. Exchange Policy:
To exchange an item:
• Request a return for the current item
• Once approved, place a new order for the desired size/color
Exchanges will only be processed after receiving and inspecting the returned item.

5. Refund Process:
Once the returned item is inspected, we will notify you of the refund status.
• Approved refunds will be issued to your original payment method within 10 business days.
• Some banks or credit card companies may take extra time to process the refund.
If 15 business days pass without a refund, contact us at ecobambooarts@gmail.com or call +92 341 6995870.

Need Help?
Email: ecobambooarts@gmail.com
Phone: +92 341 6995870

Return Address:
Bamboohandicrafts, Near PSO Petrol Pump Chakian, Shop Number 35, Karkhane Wali Abadi, Near Ali Niaz Sweet, Chakian, Dakkhana Khas, Dhori, Tehsil Bhalwal, District Sargodha, Postal Code 40100, Phularwa 40410, Pakistan.`,
  };

  const sections = [
    { title: "Description", content: product.description },
    { title: "Specification", content: product.specification },
    { title: "Warranty & Support", content: product.warrantySupport },
  ];

  const toggleSection = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="my-8 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto space-y-4">
      {sections.map((section, index) => {
        const isOpen = openIndex === index;
        const isFirst = index === 0;

        return (
          <div
            key={index}
            className={`group transition-all duration-200 px-3 py-4 rounded-xl shadow-sm ${
              !isFirst ? "border-t border-gray-200" : ""
            } bg-white hover:bg-gray-50`}
          >
            <button
              className="flex items-center justify-between w-full text-left text-[17px] sm:text-lg font-semibold text-gray-900"
              onClick={() => toggleSection(index)}
            >
              <span>{section.title}</span>
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-200 group-hover:bg-black group-hover:text-[#B8860B] transition-all duration-300">
                {isOpen ? <FaChevronUp size={14} /> : <FaChevronDown size={14} />}
              </span>
            </button>

            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <div
                    className="mt-3 text-gray-700 text-sm sm:text-base leading-relaxed whitespace-pre-line"
                    dangerouslySetInnerHTML={{ __html: convertToHtml(section.content) }}
                  />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
};

export default Accordion;
