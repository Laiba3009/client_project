import React, { useState } from "react";

export default function AddToCart({ slug, onOrder }) {
  const [quantity, setQuantity] = useState(1);

  const increase = () => setQuantity((q) => q + 1);
  const decrease = () => setQuantity((q) => (q > 1 ? q - 1 : 1));

  const handleOrder = () => {
    if (onOrder) onOrder(slug, quantity);
    else alert(`🛒 Order placed for ${quantity} item(s) of ${slug}`);
  };

  const handleAddToCart = () => {
    alert(`✅ ${quantity} ${slug} added to cart`);
  };

  return (
    <div className="mt-4">
      {/* 🔢 Quantity Controls */}
      <div className="flex gap-2 mb-4 items-center">
        <button
          onClick={decrease}
          className="bg-gray-200 px-3 py-1 rounded text-xl font-bold"
        >
          −
        </button>
        <span className="text-lg font-medium">{quantity}</span>
        <button
          onClick={increase}
          className="bg-gray-200 px-3 py-1 rounded text-xl font-bold"
        >
          +
        </button>
      </div>

      {/* 🛒 Action Buttons */}
      <div className="flex flex-wrap gap-4">
        <button
          onClick={handleAddToCart}
          className="bg-purple-700 hover:bg-purple-800 text-white px-5 py-2 rounded shadow transition"
        >
          Add to Cart
        </button>

        <button
          onClick={handleOrder}
          className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded shadow transition"
        >
          Order Now
        </button>
      </div>
    </div>
  );
}
