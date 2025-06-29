import React from "react";
import { Link } from "react-router-dom";
import products from "../data/products.json";
import ImageSlider from "../components/ImageSlider";

export default function Home() {
  return (
    <div>
      {/* 🔹 Top Banner Slider */}
      <ImageSlider images={[
        "/images/blue1.jpg",
        "/images/blue2.jpg",
        "/images/blue3.jpg"
      ]} />

      {/* 🔹 Page Heading */}
      <h1 className="text-2xl font-bold text-center mt-6">
        Welcome to Our Product Collection
      </h1>

      {/* 🔹 Product Cards */}
      <div className="p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <div key={product.slug} className="border rounded-lg p-4 hover:shadow transition flex flex-col">
            <Link to={`/product/${product.slug}`}>
              <img
                src={product.images[0]}
                alt={product.title}
                className="w-full h-48 object-cover rounded mb-3"
              />
              <h2 className="text-lg font-semibold">{product.title}</h2>
              <p className="text-green-600 font-bold">PKR {product.price}</p>
            </Link>

            {/* 🔹 Add To Cart */}
          </div>
        ))}
      </div>
    </div>
  );
}
