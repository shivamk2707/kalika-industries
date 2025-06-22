"use client";

import React from 'react';
import Image from 'next/image';

const ProductGrid = ({ title, items }) => {
  return (
    <div className="py-20 bg-gradient-to-br from-slate-50 via-white to-gray-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(34,197,94,0.03),transparent_50%)]"></div>
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-brand-green/5 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-tl from-emerald-500/5 to-transparent rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-brand-green to-emerald-600 rounded-2xl mb-6 shadow-lg">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
            </svg>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 tracking-tight leading-tight">
            {title}
          </h2>
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="w-16 h-0.5 bg-gradient-to-r from-transparent to-brand-green rounded-full"></div>
            <div className="w-24 h-1.5 bg-gradient-to-r from-brand-green to-emerald-500 rounded-full shadow-sm"></div>
            <div className="w-16 h-0.5 bg-gradient-to-l from-transparent to-emerald-500 rounded-full"></div>
          </div>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
            Discover our carefully curated collection of premium furniture and home essentials
          </p>
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6 lg:gap-8">
          {items.map((item, index) => (
            <div key={index} className="group animate-fade-in-up" style={{ animationDelay: `${index * 100}ms` }}>
              <div className="relative overflow-hidden bg-white rounded-3xl shadow-sm hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border border-gray-100/50 backdrop-blur-sm">
                {/* Card background gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-white via-gray-50/50 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Image container with enhanced styling */}
                <div className="relative aspect-square p-6 flex items-center justify-center overflow-hidden">
                  <div className="absolute inset-2 bg-gradient-to-br from-gray-50 to-white rounded-2xl group-hover:from-brand-green/5 group-hover:to-emerald-50/50 transition-all duration-500"></div>
                  <div className="relative w-full h-full z-10">
                    <Image 
                      src={item.image} 
                      alt={item.name} 
                      fill
                      className="object-contain group-hover:scale-110 transition-transform duration-700 ease-out"
                      sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, (max-width: 1024px) 25vw, 20vw"
                    />
                  </div>
                  
                  {/* Floating badge */}
                  <div className="absolute top-3 right-3 w-8 h-8 bg-gradient-to-br from-brand-green to-emerald-600 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 transform scale-0 group-hover:scale-100">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                </div>
                
                {/* Product info section */}
                <div className="relative p-5 bg-gradient-to-t from-gray-50/80 to-white/90 border-t border-gray-100/50 backdrop-blur-sm">
                  <h3 className="font-bold text-gray-900 text-sm md:text-base leading-tight group-hover:text-brand-green transition-all duration-300 transform group-hover:translate-x-1">
                    {item.name}
                  </h3>
                </div>
                
                {/* Enhanced hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-brand-green/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
                
                {/* Glow effect */}
                <div className="absolute -inset-1 bg-gradient-to-r from-brand-green/20 to-emerald-500/20 rounded-3xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
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
        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default ProductGrid; 