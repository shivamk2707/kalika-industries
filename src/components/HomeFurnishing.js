"use client";

import React from "react";
import Image from "next/image";
import ProductGrid from "./ProductGrid";

const homeFurnishingItems = [
  {
    name: "TV Showcase",
    image: "/images/tv_showcase.jpg",
  },
  {
    name: "Modern Sofas",
    image: "/images/sofa.jpg",
  },
  {
    name: "Bedss",
    image: "/images/bed.png",
  },
  {
    name: "Office Setups",
    image: "/images/office_setup.jpg",
  },
  {
    name: "Cupboards",
    image: "/images/coubourd.jpg",
  },
];

const HomeFurnishing = () => {
  return (
    <>
      <div className="py-12 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Home Furnishing Products
            </h2>
            <div className="w-24 h-1 bg-gray-300 mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">All over furniture solutions for home Furnishing</p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {homeFurnishingItems.map((item, index) => (
              <div key={index} className="bg-white border border-gray-200">
                <div className="relative aspect-square p-4 flex items-center justify-center">
                  <Image
                    src={item.image}
                    alt="product"
                    fill
                    className="object-contain"
                    sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, (max-width: 1024px) 25vw, 20vw"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="flex justify-center my-2">
        <a href="/products">
          <button className="px-8 py-4 mb-8 bg-gradient-to-r from-yellow-700 to-yellow-500 text-white font-semibold rounded-2xl shadow-md hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2 hover:from-yellow-600 hover:to-yellow-400">
            <span>View All Products</span>
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </button>
        </a>
      </div>
    </>
  );
};

export default HomeFurnishing;
