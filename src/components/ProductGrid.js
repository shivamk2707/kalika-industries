"use client";

import React from 'react';
import Image from 'next/image';

const ProductGrid = ({ title, description, items }) => {
  return (
    <div className="py-12 bg-white">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {title}
          </h2>
          <div className="w-24 h-1 bg-gray-300 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {description}
          </p>
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {items.map((item, index) => (
            <div key={index} className="bg-white border border-gray-200">
              <div className="relative aspect-square p-4 flex items-center justify-center">
                <Image 
                  src={item.image} 
                  alt={item.name} 
                  fill
                  className="object-contain"
                  sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, (max-width: 1024px) 25vw, 20vw"
                />
              </div>
              
              <div className="p-4 border-t border-gray-200">
                <h3 className="font-medium text-gray-900">
                  {item.name}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductGrid;