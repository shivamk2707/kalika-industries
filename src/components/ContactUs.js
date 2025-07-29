"use client";

import React from 'react';
import { FaMapMarkerAlt, FaEnvelope, FaClock } from 'react-icons/fa';

const ContactUs = () => {
  const contactInfo = [
    {
      icon: <FaMapMarkerAlt className="text-xl sm:text-2xl lg:text-3xl" />,
      title: 'Our Store Address',
      details: ['R7P2+34Q, Ranjangaon Rd, Waluj, Pandharpur, Chhatrapati Sambhajinagar, Maharashtra 431136'],
      color: 'from-red-500 to-pink-600'
    },
    {
      icon: <FaEnvelope className="text-xl sm:text-2xl lg:text-3xl" />,
      title: 'General Enquiries',
      details: ['sales@kalikaindustries.com'],
      color: 'from-blue-500 to-cyan-600'
    },
    {
      icon: <FaClock className="text-xl sm:text-2xl lg:text-3xl" />,
      title: 'Our Timing',
      details: ['Mon - Sat : 09:30 AM - 09:00 PM'],
      color: 'from-purple-500 to-indigo-600'
    }
  ];

  return (
    <section className="py-8 sm:py-12 md:py-16 lg:py-20 bg-gradient-to-br from-white via-slate-50 to-yellow-50 relative overflow-hidden">
      {/* Responsive background decorations */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute -top-20 -left-20 sm:-top-32 sm:-left-32 w-64 h-64 sm:w-96 sm:h-96 bg-gradient-to-br from-yellow-900/10 to-yellow-700/20 rounded-full blur-xl sm:blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 bg-gradient-to-tr from-yellow-100/30 to-yellow-900/10 rounded-full blur-lg sm:blur-2xl -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 sm:w-96 sm:h-96 bg-gradient-to-tl from-yellow-900/10 to-yellow-700/20 rounded-full blur-xl sm:blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <div className="text-center mb-6 sm:mb-8 md:mb-12">
            <h2 className="text-2xl xs:text-3xl sm:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
              Get In Touch
            </h2>
            <div className="w-16 sm:w-20 md:w-24 h-0.5 sm:h-1 bg-gray-300 mx-auto mb-4 sm:mb-6"></div>
            <p className="text-sm xs:text-base sm:text-lg text-gray-600 max-w-xs xs:max-w-sm sm:max-w-md md:max-w-2xl mx-auto px-2 sm:px-0">
              We&apos;d love to hear from you. Send us a message and we&apos;ll respond as soon as possible.
            </p>
          </div>
        </div>
        
        {/* Horizontal layout for contact info blocks */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {contactInfo.map((info, index) => (
            <div 
              key={index} 
              className="group bg-white/80 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 shadow-sm hover:shadow-md sm:hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5 sm:hover:-translate-y-1 border border-gray-100/50"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex flex-col items-center text-center h-full">
                <div className={`w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br ${info.color} rounded-lg sm:rounded-xl flex items-center justify-center text-white shadow-md sm:shadow-lg group-hover:scale-105 sm:group-hover:scale-110 transition-transform duration-300 mb-3 sm:mb-4`}>
                  {info.icon}
                </div>
                <h3 className="text-base sm:text-lg md:text-xl font-semibold text-gray-900 mb-1 sm:mb-2 group-hover:text-yellow-900 transition-colors duration-300">
                  {info.title}
                </h3>
                {info.details.map((detail, detailIndex) => (
                  <p key={detailIndex} className="text-xs xs:text-sm sm:text-base text-gray-600 leading-snug sm:leading-relaxed">
                    {detail}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .group {
          animation: fade-in-up 0.5s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </section>
  );
};

export default ContactUs;
