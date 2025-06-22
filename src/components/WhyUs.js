"use client";

import React from 'react';
import { FaTree, FaWrench, FaShippingFast, FaAward } from 'react-icons/fa';

const features = [
  {
    icon: <FaTree className="text-4xl text-brand-red" />,
    title: 'BEST WOODS & OFFICE',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    icon: <FaWrench className="text-4xl text-brand-red" />,
    title: 'FREE ASSEMBLING',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    icon: <FaShippingFast className="text-4xl text-brand-red" />,
    title: 'ON TIME DELIVERY',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    icon: <FaAward className="text-4xl text-brand-red" />,
    title: 'ASSURED QUALITY',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
];

const WhyUs = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-white via-gray-50 to-slate-100 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(34,197,94,0.03),transparent_50%)]"></div>
      <div className="absolute top-0 left-1/3 w-96 h-96 bg-gradient-to-br from-brand-green/5 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-gradient-to-tl from-emerald-500/5 to-transparent rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-brand-green to-emerald-600 rounded-2xl mb-6 shadow-lg">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 tracking-tight leading-tight">
            Why Choose Us
          </h2>
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="w-16 h-0.5 bg-gradient-to-r from-transparent to-brand-green rounded-full"></div>
            <div className="w-24 h-1.5 bg-gradient-to-r from-brand-green to-emerald-500 rounded-full shadow-sm"></div>
            <div className="w-16 h-0.5 bg-gradient-to-l from-transparent to-emerald-500 rounded-full"></div>
          </div>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
            We provide exceptional service and quality that sets us apart from the competition
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="group relative"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-brand-green/20 to-emerald-500/20 rounded-3xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-sm hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border border-gray-100/50">
                {/* Icon container with enhanced styling */}
                <div className="relative mb-6">
                  <div className="absolute inset-0 bg-gradient-to-br from-brand-green/10 to-emerald-500/10 rounded-2xl transform scale-0 group-hover:scale-100 transition-transform duration-500"></div>
                  <div className="relative w-20 h-20 bg-gradient-to-br from-brand-green to-emerald-600 rounded-2xl flex items-center justify-center shadow-lg transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 mx-auto">
                    <div className="text-white text-3xl">
                      {React.cloneElement(feature.icon, { className: "text-white text-3xl" })}
                    </div>
                  </div>
                  
                  {/* Floating accent */}
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transform scale-0 group-hover:scale-100 transition-all duration-500">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  </div>
                </div>
                
                {/* Content */}
                <div className="text-center">
                  <h3 className="text-xl font-bold text-gray-900 mb-4 leading-tight group-hover:text-brand-green transition-colors duration-300">
                    {feature.title}
                  </h3>
                  
                  {/* Progress indicator */}
                  <div className="w-full bg-gray-200 rounded-full h-1.5 mb-4">
                    <div className="bg-gradient-to-r from-brand-green to-emerald-500 h-1.5 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 ease-out origin-left"></div>
                  </div>
                  
                  {/* Feature highlight */}
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-brand-green/10 to-emerald-500/10 rounded-full text-sm font-medium text-brand-green opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-500">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Premium Service</span>
                  </div>
                </div>
                
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-brand-green/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Bottom CTA section */}
        <div className="text-center mt-16">
          <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-8 shadow-lg border border-gray-100/50">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Experience the Difference?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Join thousands of satisfied customers who trust us for their furniture needs
            </p>
            <button className="px-8 py-4 bg-gradient-to-r from-brand-green to-emerald-600 text-white font-semibold rounded-2xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2 mx-auto">
              <span>Get Started Today</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </div>
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

export default WhyUs; 