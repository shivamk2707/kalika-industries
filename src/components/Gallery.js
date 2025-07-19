"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const galleryImages = [
  'https://img.freepik.com/premium-photo/living-room-with-couch-chair-lamp_7023-553981.jpg?ga=GA1.1.990952046.1750501572&semt=ais_hybrid&w=740',
  'https://img.freepik.com/premium-photo/3d-visualization-modern-bedroom-interior-design-concept-interior-modern-classic-style_727625-506.jpg?ga=GA1.1.990952046.1750501572&semt=ais_hybrid&w=740',
  'https://img.freepik.com/premium-photo/essential-kitchen-utensils-every-home-cook-should-have_848676-99.jpg?ga=GA1.1.990952046.1750501572&semt=ais_hybrid&w=740',
  'https://img.freepik.com/premium-photo/bedroom-table-furniture-dressing-table-mirror-close-up-baku-azerbaijan-01042022_267395-1655.jpg?ga=GA1.1.990952046.1750501572&semt=ais_hybrid&w=740',
  'https://img.freepik.com/premium-photo/office-room_933597-188.jpg?ga=GA1.1.990952046.1750501572&semt=ais_hybrid&w=740',
  'https://img.freepik.com/premium-photo/stylish-scandinavian-style-modern-armchairs-background_1276612-19184.jpg?ga=GA1.1.990952046.1750501572&semt=ais_hybrid&w=740',
  'https://img.freepik.com/free-photo/3d-rendering-classic-interior_23-2150943427.jpg?ga=GA1.1.990952046.1750501572&semt=ais_hybrid&w=740',
  'https://img.freepik.com/free-photo/cozy-classic-crib-light-baby-room-with-toys-soft-carpet-woven-basket-corner_181624-58183.jpg?ga=GA1.1.990952046.1750501572&semt=ais_hybrid&w=740',
  'https://img.freepik.com/premium-photo/desk-with-lamp-it-picture-plant-it_1093168-293.jpg?ga=GA1.1.990952046.1750501572&semt=ais_hybrid&w=740',
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const openLightbox = (index) => {
    setSelectedImage(index);
    // Prevent body scroll when lightbox is open
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    // Restore body scroll
    document.body.style.overflow = 'unset';
  };

  const nextImage = () => {
    setSelectedImage((prev) => (prev + 1) % galleryImages.length);
  };

  const prevImage = () => {
    setSelectedImage((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  };

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (selectedImage !== null) {
        if (e.key === 'Escape') {
          closeLightbox();
        } else if (e.key === 'ArrowRight') {
          nextImage();
        } else if (e.key === 'ArrowLeft') {
          prevImage();
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [selectedImage]);

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-slate-50 via-white to-gray-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(194,178,128,0.03),transparent_50%)]"></div>
      <div className="absolute top-0 right-1/4 w-48 sm:w-96 h-48 sm:h-96 bg-gradient-to-bl from-yellow-900/5 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-1/4 w-48 sm:w-96 h-48 sm:h-96 bg-gradient-to-tr from-yellow-700/5 to-transparent rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Gallery
            </h2>
            <div className="w-24 h-1 bg-gray-300 mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
            Explore our stunning collection of furniture and interior designs
            </p>
          </div>
        </div>
        
        {/* Responsive grid layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
          {galleryImages.map((src, index) => (
            <div 
              key={index} 
              className="group relative"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative overflow-hidden rounded-xl sm:rounded-2xl shadow-sm hover:shadow-xl sm:hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1 sm:hover:-translate-y-2">
                {/* Image container */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image 
                    src={src} 
                    alt={`Gallery image ${index + 1}`} 
                    fill
                    className="object-cover group-hover:scale-105 sm:group-hover:scale-110 transition-transform duration-700 ease-out"
                    sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    priority={index < 4} // Prioritize first 4 images
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Hover content */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 p-4">
                    <div className="text-center text-white">
                      <div className="w-12 h-12 sm:w-16 sm:h-16 bg-white/20 backdrop-blur-sm rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-3 sm:mb-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                        <svg className="w-6 h-6 sm:w-8 sm:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                        </svg>
                      </div>
                      <h3 className="text-sm sm:text-lg font-semibold mb-1 sm:mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-100">
                        View Details
                      </h3>
                      <p className="text-xs sm:text-sm opacity-90 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-200">
                        Click to enlarge
                      </p>
                    </div>
                  </div>
                  
                  {/* Floating badge */}
                  <div className="absolute top-2 right-2 sm:top-4 sm:right-4 w-8 h-8 sm:w-10 sm:h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transform scale-0 group-hover:scale-100 transition-all duration-500">
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </div>
                </div>
                
                {/* Glow effect */}
                <div className="absolute -inset-1 bg-gradient-to-r from-yellow-900/20 to-yellow-700/20 rounded-xl sm:rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
              </div>
              
              {/* Click handler */}
              <button 
                onClick={() => openLightbox(index)}
                className="absolute inset-0 w-full h-full z-10"
                aria-label={`Open image ${index + 1} in lightbox`}
              />
            </div>
          ))}
        </div>
        
        {/* Lightbox */}
        {selectedImage !== null && (
          <div className="fixed inset-0 bg-black/95 backdrop-blur-sm z-50 flex items-center justify-center p-2 sm:p-4">
            <div className="relative w-full h-full max-w-7xl max-h-full flex items-center justify-center">
              {/* Close button */}
              <button 
                onClick={closeLightbox}
                className="absolute top-2 right-2 sm:-top-12 sm:right-0 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors duration-300 z-20"
              >
                <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              
              {/* Navigation buttons - hidden on mobile */}
              {!isMobile && (
                <>
                  <button 
                    onClick={prevImage}
                    className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors duration-300 z-20"
                  >
                    <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>
                  
                  <button 
                    onClick={nextImage}
                    className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors duration-300 z-20"
                  >
                    <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </>
              )}
              
              {/* Image */}
              <div className="relative rounded-lg sm:rounded-2xl overflow-hidden shadow-2xl w-full h-full flex items-center justify-center">
                <Image 
                  src={galleryImages[selectedImage]} 
                  alt={`Gallery image ${selectedImage + 1}`} 
                  fill
                  className="object-contain"
                  sizes="100vw"
                  priority
                />
              </div>
              
              {/* Image counter */}
              <div className="absolute bottom-2 sm:bottom-4 left-1/2 -translate-x-1/2 bg-black/50 backdrop-blur-sm rounded-full px-3 py-1 sm:px-4 sm:py-2 text-white text-xs sm:text-sm">
                {selectedImage + 1} / {galleryImages.length}
              </div>
              
              {/* Mobile swipe indicators */}
              {isMobile && (
                <div className="absolute bottom-16 left-1/2 -translate-x-1/2 text-white text-xs opacity-70">
                  Swipe to navigate
                </div>
              )}
            </div>
          </div>
        )}
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
        
        /* Prevent horizontal scroll on mobile */
        @media (max-width: 640px) {
          .container {
            overflow-x: hidden;
          }
        }
      `}</style>
    </section>
  );
};

export default Gallery; 