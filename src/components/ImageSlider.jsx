import React, { useState } from "react";
import {
  FaChevronLeft,
  FaChevronRight,
  FaTimes,
  FaSearchPlus,
  FaSearchMinus,
} from "react-icons/fa";

const ImageSlider = ({ images, currentImage, setCurrentImage }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [zoom, setZoom] = useState(1);

  const currentIndex = images.findIndex((img) => img === currentImage);

  const handleNext = () => {
    const nextIndex = (currentIndex + 1) % images.length;
    setCurrentImage(images[nextIndex]);
    setZoom(1);
  };

  const handlePrev = () => {
    const prevIndex = (currentIndex - 1 + images.length) % images.length;
    setCurrentImage(images[prevIndex]);
    setZoom(1);
  };

  return (
    <div className="w-full flex flex-col items-center">
      {/* ✅ Main Product Image with Left/Right Arrows */}
      <div
        className="relative w-[500px] h-[500px] mb-6 overflow-hidden group"
      >
        <img
          src={currentImage}
          alt="Main Product"
          onClick={() => setIsModalOpen(true)}
          className="w-full h-full object-cover rounded-xl shadow-lg transition-transform duration-300 cursor-zoom-in"
        />

        {/* 🔄 Scroll Arrows on Main Image */}
        <button
          onClick={handlePrev}
          
       className="absolute left-2 top-1/2 -translate-y-1/2  text-[#000000] p-2 rounded-full hover:bg-[#000000] hover:text-white z-10"
        >
          <FaChevronLeft />
        </button>
        <button
          onClick={handleNext}
          className="absolute right-2 top-1/2 -translate-y-1/2 text-[#000000] p-2 rounded-full hover:bg-[#000000] hover:text-white z-10"
        >
          <FaChevronRight />
        </button>
      </div>

      {/* Thumbnails Below */}
      <div className="flex gap-3 overflow-x-auto max-w-[520px] px-2 scrollbar-thin">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`thumb-${index}`}
            onClick={() => setCurrentImage(img)}
            className={`w-[80px] h-[80px] object-cover rounded-md cursor-pointer border-2 ${
              currentImage === img ? "border-black" : "border-gray-300"
            }`}
          />
        ))}
      </div>

      {/* Modal View */}
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black/80 z-50 flex flex-col justify-center items-center px-4 py-6"
          onClick={() => setIsModalOpen(false)}
        >
          <div
            className="relative bg-white rounded-lg shadow-lg p-4 max-w-[90vw] max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* ❌ Close Button */}
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 text-white text-2xl bg-black/70 rounded-full p-1 hover:bg-black z-50"
            >
              <FaTimes />
            </button>

            {/* Zoomable Image */}
            <div className="relative flex justify-center items-center max-w-full max-h-[75vh] overflow-hidden">
              <img
                src={currentImage}
                alt="Zoomed"
                style={{ transform: `scale(${zoom})` }}
                className="h-[80vh] w-auto object-contain mx-auto transition-transform duration-300"
              />

              {/* Arrows inside Modal */}
              <button
                onClick={handlePrev}
                className="absolute left-2 top-1/2 -translate-y-1/2  text-[#000000] p-2 rounded-full hover:bg-[#000000] hover:text-white z-10"
              >
                <FaChevronLeft />
              </button>
              <button
                onClick={handleNext}
                className="absolute right-2 top-1/2 -translate-y-1/2 text-[#000000] p-2 rounded-full hover:bg-[#000000] hover:text-white z-10"
              >
                <FaChevronRight />
              </button>
            </div>

            {/* Zoom Buttons */}
            <div className="flex justify-center items-center gap-4 mt-4">
              <button
                onClick={() => setZoom((z) => Math.max(1, z - 0.2))}
                className="text-black bg-gray-200 hover:bg-gray-300 p-2 rounded-full"
              >
                <FaSearchMinus />
              </button>
              <span className="text-black text-sm font-medium">
                {Math.round(zoom * 100)}%
              </span>
              <button
                onClick={() => setZoom((z) => Math.min(3, z + 0.2))}
                className="text-black bg-gray-200 hover:bg-gray-300 p-2 rounded-full"
              >
                <FaSearchPlus />
              </button>
            </div>

            {/* Scrollable Thumbnails Inside Modal */}
            <div className="flex gap-3 overflow-x-auto mt-4 px-2 max-w-[600px]">
              {images.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`thumb-${index}`}
                  onClick={() => {
                    setCurrentImage(img);
                    setZoom(1);
                  }}
                  className={`w-[80px] h-[80px] object-cover rounded-md cursor-pointer border-2 ${
                    currentImage === img ? "border-black" : "border-gray-300"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageSlider;
