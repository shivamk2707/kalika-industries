import React from 'react';
import Image from 'next/image';

const PromoBanner = () => {
  return (
    <section className="bg-pink-50 py-8">
      <div className="container mx-auto px-4 flex items-center justify-center">
        <div className="flex flex-col md:flex-row items-center w-full">
          {/* Text content */}
          <div className="md:w-1/3 text-center md:text-left mb-8 md:mb-0">
            <h2 className="text-4xl md:text-5xl font-serif text-gray-800">Furniture To Suit</h2>
            <p className="text-3xl md:text-4xl font-serif text-gray-700 italic mt-2">Your Style & Decor</p>
          </div>

          {/* Image */}
          <div className="md:w-2/3">
            <Image 
              src="https://img.freepik.com/premium-photo/modern-living-room-interior_252025-58671.jpg?ga=GA1.1.990952046.1750501572&semt=ais_hybrid&w=740" 
              alt="Promotional banner" 
              width={800} 
              height={400} 
              className="rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PromoBanner; 