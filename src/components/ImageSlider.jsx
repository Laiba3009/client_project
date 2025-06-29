import { useState } from "react";

export default function ImageSlider({ images }) {
  const [selected, setSelected] = useState(0);

  return (
    <div className="flex flex-col items-center gap-4">
      {/* 🔹 Main Image */}
      <img
        src={images[selected]}
        alt={`image-${selected}`}
        className="w-full h-[400px] object-cover rounded shadow-md"
      />

      {/* 🔹 Thumbnail Selector */}
      <div className="flex gap-3 mt-2">
        {images.map((img, i) => (
          <img
            key={i}
            src={img}
            onClick={() => setSelected(i)}
            alt={`thumb-${i}`}
            className={`w-20 h-20 object-cover rounded cursor-pointer border-2 ${
              selected === i ? "border-blue-600" : "border-transparent"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
