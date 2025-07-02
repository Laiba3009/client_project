import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const Accordion = ({ product }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const sections = [
    { title: "Description", content: product.description },
    { title: "Specification", content: product.specification },
    { title: "Warranty & Support", content: product.warrantySupport },
  ];

  const toggleSection = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="my-10 space-y-4 px-4 max-w-5xl mx-auto">
      {sections.map((section, index) => {
        const isOpen = openIndex === index;
        const isFirst = index === 0;
        return (
          <div
            key={index}
            className={`group transition-all duration-200 px-2 py-3 rounded ${
              !isFirst ? "border-t border-gray-300" : ""
            } hover:bg-gray-100`}
          >
            <button
              className="flex items-center justify-between w-full text-left font-semibold text-lg text-black"
              onClick={() => toggleSection(index)}
            >
              <span>{section.title}</span>
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-200 group-hover:bg-black group-hover:text-white transition-all">
                {isOpen ? <FaChevronUp size={14} /> : <FaChevronDown size={14} />}
              </span>
            </button>

            <div
              className={`transition-all duration-300 ease-in-out overflow-hidden ${
                isOpen ? "max-h-[500px] opacity-100 mt-2" : "max-h-0 opacity-0"
              }`}
            >
              <div className="text-gray-700 whitespace-pre-line text-sm">
                {section.content}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Accordion;
