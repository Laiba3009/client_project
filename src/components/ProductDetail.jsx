import React, { useEffect, useState } from "react";
import ImageSlider from "./ImageSlider";
import AddToCart from "./AddToCart";
import TextSlider from "./TextSlider";
import Accordion from "./Accordion";
import {FaShippingFast} from "react-icons/fa";

const ProductDetail = () => {
  const [product, setProduct] = useState(null);
  const [selectedVariant, setSelectedVariant] = useState(null);
  const [currentImage, setCurrentImage] = useState(null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" }); // ✅ Move this inside the component

    fetch("/data/product.json")
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
        setSelectedVariant(data.variants[0]);
        setCurrentImage(data.variants[0].image);
      });
  }, []);

  if (!product || !selectedVariant) return null;

  const handleColorClick = (variant) => {
    setSelectedVariant(variant);
    setCurrentImage(variant.image);
  };

  return (
    <>
      <div className="max-w-6xl mx-auto px-4 py-10 grid md:grid-cols-2 gap-8">
        <ImageSlider
          images={product.images}
          currentImage={currentImage}
          setCurrentImage={setCurrentImage}
        />

        <div className="flex flex-col space-y-4">
          <h1 className="text-[28px] font-bold text-[#000000] font-albert">{product.title}</h1>

          <div className="flex items-center gap-2">
            <div className="flex text-[#000000] text-lg">
              {Array(5).fill().map((_, i) => <span key={i}>★</span>)}
            </div>
            <p className="text-black">{product.ratings}</p>
          </div>

          <div className="flex items-center gap-2 mt-1">
            <span className="text-red-500 text-lg">⚡</span>
            <p className="text-[#000000] text-[24px] font-jost">{product.note}</p>
          </div>

          <div className="flex items-center gap-4 text-xl font-bold text-[#000000] font-albert">
            <span>{product.price}</span>
            <span className="line-through text-gray-400">{product.originalPrice}</span>
            <span className="bg-[#0167FF] text-white text-[12px] px-2 rounded-md">
              {product.discount}
            </span>
          </div>

          <p className="text-md text-gray-600 text-md flex items-center gap-2">
            <FaShippingFast className="text-black" />
            {product.deliveryEstimate}
          </p>

          <div>
            <h2 className="font-albert mb-2">Color</h2>
            <div className="flex gap-2 mb-2">
              {product.variants.map((variant, index) => (
                <img
                  key={index}
                  src={variant.image}
                  alt={variant.color}
                  title={variant.color}
                  onClick={() => handleColorClick(variant)}
                  className={`w-10 h-10 object-cover rounded-full border-2 cursor-pointer ${
                    variant.color === selectedVariant.color
                      ? "border-black"
                      : "border-gray-300"
                  }`}
                />
              ))}
            </div>
            <p className="text-md">{selectedVariant.color}</p>

            <AddToCart product={product} selectedVariant={selectedVariant} />
          </div>
        </div>
      </div>

      <Accordion product={product} />
      <TextSlider />
    </>
  );
};

export default ProductDetail;
