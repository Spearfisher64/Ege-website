// src/components/StoreDemoContent.jsx

import { useState } from "react";

const StoreDemoContent = () => {
  const [cart, setCart] = useState([]);

  const products = [
    {
      id: 1,
      name: "Minimalist Leather Jacket",
      price: 299,
      image:
        "https://images.unsplash.com/photo-1562156075-7cf9b1dbc76e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      new: true,
    },
    {
      id: 2,
      name: "Premium Wool Turtleneck",
      price: 149,
      image:
        "https://images.unsplash.com/photo-1576566588028-4147f3842f27?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 3,
      name: "Handcrafted Black Boots",
      price: 349,
      image:
        "https://images.unsplash.com/photo-1543163588028-4147f3842f22?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      sale: true,
      discount: 20,
    },
    {
      id: 4,
      name: "Modern Oversized Sunglasses",
      price: 89,
      image:
        "https://images.unsplash.com/photo-1511499767150-a48a237f0083?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
  ];

  const addToCart = (product) => {
    setCart([...cart, product]);
    alert(`${product.name} added to cart!`);
  };

  const formatPrice = (price) => `$${price.toFixed(2)}`;

  return (
    <div className="mt-16 pt-12">
      <h2 className="text-3xl font-semibold mb-8 text-center tracking-tight">
        The Sample Collection
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {products.map((product) => (
          <div
            key={product.id}
            className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 transform hover:-translate-y-1 border border-gray-100"
          >
            {/* Image */}
            <div className="relative overflow-hidden">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-700"
              />
              {product.new && (
                <span className="absolute top-4 left-4 bg-black text-white text-xs px-3 py-1 rounded-full font-medium tracking-wider animate-pulse">
                  NEW
                </span>
              )}
              {product.sale && (
                <span className="absolute top-4 left-4 bg-white text-gray-800 text-xs px-3 py-1 rounded-full font-bold shadow-md border">
                  -{product.discount}%
                </span>
              )}
            </div>

            {/* Info */}
            <div className="p-5">
              <h3 className="text-lg font-medium text-gray-900 group-hover:text-primary transition-colors">
                {product.name}
              </h3>
              <div className="flex items-center justify-between mt-2">
                <span className="text-lg font-semibold text-gray-900">
                  {product.sale
                    ? formatPrice(product.price * 0.8)
                    : formatPrice(product.price)}
                </span>
                {product.sale && (
                  <span className="text-sm text-gray-500 line-through">
                    {formatPrice(product.price)}
                  </span>
                )}
              </div>

              {/* Add to Cart Button */}
              <button
                onClick={() => addToCart(product)}
                className="w-full mt-4 bg-gray-900 text-white py-2.5 rounded-xl font-medium hover:bg-black hover:shadow-md transition-all duration-300 transform hover:scale-105 focus:outline-none"
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Subtle CTA */}
      <div className="text-center mt-16">
        <p className="text-gray-500 text-sm">
          Free shipping on orders over $200 • 30-day return policy
        </p>
      </div>
    </div>
  );
};

export default StoreDemoContent;
