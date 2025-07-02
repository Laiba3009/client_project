import React from "react";

const TextSlider = () => {
  const textItems = [
    "Off Indoor Plant Pots 15%",
    "Style Your Room with Ease",
    "Best Pots at Best Prices",
    "Nationwide Delivery Included",
    "!Order Big Pots Today",
    "Free Delivery Across Pakistan",
  ];

  const renderTextWithIcons = () =>
    textItems.map((text, index) => (
      <React.Fragment key={index}>
        <span className="px-2">{text}</span>
        {index < textItems.length - 1 && (
          <img
            src="/images/s-shine.png"
            alt="shine"
            className="w-4 h-5 inline-block mx-2"
          />
        )}
      </React.Fragment>
    ));

  return (
    <div className="w-full overflow-hidden bg-white py-2">
      <div className="flex animate-marqueeRight whitespace-nowrap text-black text-base font-medium gap-10">
        {renderTextWithIcons()}
        {renderTextWithIcons()} {/* 👈 duplicate for seamless scroll */}
      </div>
    </div>
  );
};

export default TextSlider;
