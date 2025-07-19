"use client";

import React from 'react';
import { FaMapMarkerAlt, FaDirections, FaPhone, FaGlobe } from 'react-icons/fa';

const Map = () => {
  return (
    <section className="relative">
      {/* Map container with enhanced styling */}
      <div className="relative overflow-hidden">
        {/* Map iframe */}
        <iframe
          src="https://www.google.com/maps/place/Kalika+Furniture/@19.812819,75.2244973,13.33z/data=!4m10!1m2!2m1!1skalika+furniture+sambhajinagar!3m6!1s0x3bdb99618776d827:0xa2f54366b57b0a92!8m2!3d19.8352237!4d75.2503663!15sCh5rYWxpa2EgZnVybml0dXJlIHNhbWJoYWppbmFnYXJaICIea2FsaWthIGZ1cm5pdHVyZSBzYW1iaGFqaW5hZ2FykgEPZnVybml0dXJlX3N0b3JlqgFdEAEqFCIQa2FsaWthIGZ1cm5pdHVyZSgAMh8QASIb7CSTCSjYD2avo4twRY_adTRoAF9l4r7qj0QMMiIQAiIea2FsaWthIGZ1cm5pdHVyZSBzYW1iaGFqaW5hZ2Fy4AEA!16s%2Fg%2F11b6_gx502?entry=ttu&g_ep=EgoyMDI1MDYxNy4wIKXMDSoASAFQAw%3D%3D"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="w-full h-[450px] sm:h-[500px] lg:h-[600px]"
        />
        
        {/* Overlay with location info */}
        <div className="absolute top-4 left-4 right-4 sm:left-8 sm:right-8 lg:left-12 lg:right-12">
          <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl border border-gray-100/50 p-4 sm:p-6 max-w-sm">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-yellow-900 to-yellow-700 rounded-xl flex items-center justify-center">
                <FaMapMarkerAlt className="text-white text-lg" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900">Our Location</h3>
                <p className="text-sm text-gray-600">R7P2+34Q, Ranjangaon Rd, Waluj, Pandharpur, Chhatrapati Sambhajinagar, Maharashtra 431136</p>
              </div>
            </div>
            
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm">
                <FaDirections className="text-yellow-900 w-4 h-4" />
                <span className="text-gray-700">Get Directions</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <FaPhone className="text-yellow-900 w-4 h-4" />
                <span className="text-gray-700">+91 9850004078</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <FaGlobe className="text-yellow-900 w-4 h-4" />
                <span className="text-gray-700">www.kalikafurniture.com</span>
              </div>
            </div>
            
            <button className="w-full mt-4 bg-gradient-to-r from-yellow-900 to-yellow-700 text-white font-semibold py-2 px-4 rounded-xl hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2">
              <FaDirections className="w-4 h-4" />
              <span>Get Directions</span>
            </button>
          </div>
        </div>
        
        {/* Bottom info bar */}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent text-white p-4 sm:p-6">
          <div className="container mx-auto">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <h4 className="text-lg sm:text-xl font-bold mb-1">Visit Our Showroom</h4>
                <p className="text-sm sm:text-base opacity-90">
                  Experience our furniture collection in person at our Sambhajinagar Store
                </p>
              </div>
              <div className="flex items-center gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold">10+</div>
                  <div className="text-xs opacity-75">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold">5000+</div>
                  <div className="text-xs opacity-75">Happy Customers</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Map; 