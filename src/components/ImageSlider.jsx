import React, { useState, useRef } from "react";
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
  const thumbnailRef = useRef(null);
  const modalThumbRef = useRef(null);

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

  const scrollThumbnails = (ref, direction) => {
    if (ref.current) {
      ref.current.scrollBy({ left: direction * 100, behavior: "smooth" });
    }
  };

  return (
    <div className="w-full flex flex-col items-center px-0 sm:px-2">
      {/* ✅ Main Large Image */}
      <div className="relative w-full sm:w-[600px] h-[400px] sm:h-[600px] overflow-hidden rounded-xl">
        <img
          src={currentImage}
          alt="Main Product"
          onClick={() => setIsModalOpen(true)}
          className="w-full h-full object-cover cursor-zoom-in transition-transform duration-300"
        />

        <button
          onClick={handlePrev}
          className="absolute left-2 top-1/2 -translate-y-1/2 text-black bg-white/80 text-xs p-1 rounded-full hover:bg-black hover:text-white z-10"
        >
          <FaChevronLeft />
        </button>
        <button
          onClick={handleNext}
          className="absolute right-2 top-1/2 -translate-y-1/2 text-black bg-white/80 text-xs p-1 rounded-full hover:bg-black hover:text-white z-10"
        >
          <FaChevronRight />
        </button>
      </div>

      {/* ✅ Thumbnails with Scroll Buttons */}
      <div className="relative w-full max-w-[600px] mt-4">
        <button
          onClick={() => scrollThumbnails(thumbnailRef, -1)}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 text-black bg-white text-xs p-1 rounded-full hover:bg-black hover:text-white"
        >
          <FaChevronLeft />
        </button>
        <div
          ref={thumbnailRef}
          className="flex gap-3 overflow-x-auto scrollbar-thin px-8"
        >
          {images.map((img, i) => (
            <img
              key={i}
              src={img}
              alt={`thumb-${i}`}
              onClick={() => setCurrentImage(img)}
              className={`w-[90px] h-[90px] sm:w-[100px] sm:h-[100px] object-cover rounded-md cursor-pointer border-2 ${
                currentImage === img ? "border-black" : "border-gray-300"
              }`}
            />
          ))}
        </div>
        <button
          onClick={() => scrollThumbnails(thumbnailRef, 1)}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 text-black bg-white text-xs p-1 rounded-full hover:bg-black hover:text-white"
        >
          <FaChevronRight />
        </button>
      </div>

      {/* ✅ Modal View */}
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black/80 z-50 flex justify-center items-center px-2"
          onClick={() => setIsModalOpen(false)}
        >
          <div
            className="relative bg-white rounded-lg shadow-lg p-4 max-w-[95vw] max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-3 right-3 text-white text-xl bg-black/70 rounded-full p-1 hover:bg-black z-50"
            >
              <FaTimes />
            </button>

            {/* Zoomable Image */}
            <div className="relative flex justify-center items-center max-w-full max-h-[75vh] overflow-hidden">
              <img
                src={currentImage}
                alt="Zoomed"
                style={{ transform: `scale(${zoom})` }}
                className="max-h-[70vh] w-auto object-contain transition-transform duration-300"
              />
              <button
                onClick={handlePrev}
                className="absolute left-2 top-1/2 -translate-y-1/2 text-black bg-white/70 text-xs p-1 rounded-full hover:bg-black hover:text-white"
              >
                <FaChevronLeft />
              </button>
              <button
                onClick={handleNext}
                className="absolute right-2 top-1/2 -translate-y-1/2 text-black bg-white/70 text-xs p-1 rounded-full hover:bg-black hover:text-white"
              >
                <FaChevronRight />
              </button>
            </div>

            {/* Zoom Controls */}
            <div className="flex justify-center gap-4 mt-4">
              <button
                onClick={() => setZoom((z) => Math.max(1, z - 0.2))}
                className="text-black bg-gray-200 hover:bg-gray-300 p-2 rounded-full"
              >
                <FaSearchMinus />
              </button>
              <span className="text-sm font-medium text-black">
                {Math.round(zoom * 100)}%
              </span>
              <button
                onClick={() => setZoom((z) => Math.min(3, z + 0.2))}
                className="text-black bg-gray-200 hover:bg-gray-300 p-2 rounded-full"
              >
                <FaSearchPlus />
              </button>
            </div>

            {/* Modal Thumbnails with Scroll Buttons */}
            <div className="relative mt-4 w-full">
              <button
                onClick={() => scrollThumbnails(modalThumbRef, -1)}
                className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white text-xs p-1 rounded-full hover:bg-black hover:text-white"
              >
                <FaChevronLeft />
              </button>
              <div
                ref={modalThumbRef}
                className="flex gap-3 overflow-x-auto px-8"
              >
                {images.map((img, i) => (
                  <img
                    key={i}
                    src={img}
                    alt={`thumb-modal-${i}`}
                    onClick={() => {
                      setCurrentImage(img);
                      setZoom(1);
                    }}
                    className={`w-[90px] h-[90px] sm:w-[100px] sm:h-[100px] object-cover rounded-md cursor-pointer border-2 ${
                      currentImage === img ? "border-black" : "border-gray-300"
                    }`}
                  />
                ))}
              </div>
              <button
                onClick={() => scrollThumbnails(modalThumbRef, 1)}
                className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white text-xs p-1 rounded-full hover:bg-black hover:text-white"
              >
                <FaChevronRight />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageSlider;
