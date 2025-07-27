"use client";

import React from 'react';
import Image from 'next/image';

const ManufacturingSection = () => {
  const factoryImages = [
    {
      src: "/images/factoryImages/20231112_204130.jpg",
      alt: "Kalkai Industries manufacturing facility - exterior view",
      caption: "State-of-the-art Facility"
    },
    {
      src: "/images/factoryImages/20231112_204135.jpg",
      alt: "Kalkai Industries production line",
      caption: "Precision Production Lines"
    },
    {
      src: "/images/factoryImages/20231112_204150.jpg",
      alt: "Kalkai Industries quality control area",
      caption: "Quality Control Center"
    },
    {
      src: "/images/factoryImages/20231112_204156.jpg",
      alt: "Kalkai Industries warehouse operations",
      caption: "Efficient Warehousing"
    }
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-white via-slate-50 to-yellow-50 relative overflow-hidden">
      {/* Background decorations matching your theme */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-gradient-to-br from-yellow-900/10 to-yellow-700/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-gradient-to-tr from-yellow-100/30 to-yellow-900/10 rounded-full blur-2xl -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-yellow-900/10 to-yellow-700/20 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Manufacturing Excellence
          </h2>
          <div className="w-24 h-1 bg-gray-300 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Discover our world-class manufacturing facilities where quality meets innovation to deliver exceptional products.
          </p>
        </div>

        {/* Image Grid - Responsive layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {factoryImages.map((image, index) => (
            <div 
              key={index} 
              className="group bg-white/80 backdrop-blur-sm rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 transform hover:-translate-y-1 border border-gray-100/50"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative aspect-square overflow-hidden">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="p-4 sm:p-5 md:p-6 text-center">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 group-hover:text-yellow-900 transition-colors duration-300">
                  {image.caption}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .group {
          animation: fade-in-up 0.6s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </section>
  );
};

export default ManufacturingSection;