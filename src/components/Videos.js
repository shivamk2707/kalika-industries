"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

const Videos = () => {
  const [activeVideo, setActiveVideo] = useState(0);
  const router = useRouter();

  const videos = [
    {
      id: 'T9fko7dSiBY',
      title: 'Premium Keyboard Exploration',
      description: 'Discover the features and craftsmanship of our premium keyboard collection',
      thumbnail: 'https://img.youtube.com/vi/T9fko7dSiBY/maxresdefault.jpg'
    },
    {
      id: 'ABUG3F6Jx2k',
      title: 'Our Manufacturing Facility Tour',
      description: 'Take an exclusive look inside our state-of-the-art production facility',
      thumbnail: 'https://img.youtube.com/vi/ABUG3F6Jx2k/maxresdefault.jpg'
    },
    {
      id: 'xmAXNNFJ8H4',
      title: 'Product Showcase Collection',
      description: 'Explore our latest product lineup and innovative designs',
      thumbnail: 'https://img.youtube.com/vi/xmAXNNFJ8H4/maxresdefault.jpg'
    }
  ];

  const handleSubscribe = () => {
    window.open('https://www.youtube.com/@kalika__furniture', '_blank');
  };

  return (
    <section className="py-8 sm:py-12 bg-gradient-to-br from-slate-50 via-white to-gray-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(194,178,128,0.03),transparent_50%)]"></div>
      <div className="absolute top-0 left-1/4 w-48 sm:w-96 h-48 sm:h-96 bg-gradient-to-br from-yellow-900/5 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-48 sm:w-96 h-48 sm:h-96 bg-gradient-to-tl from-yellow-700/5 to-transparent rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Featured Videos
            </h2>
            <div className="w-24 h-1 bg-gray-300 mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Explore our product journey from manufacturing to final showcase
            </p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {videos.map((video, index) => (
            <div 
              key={video.id} 
              className="group relative"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="relative overflow-hidden rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 bg-white/80 backdrop-blur-sm border border-gray-100/50">
                {/* Video container */}
                <div className="relative aspect-video overflow-hidden rounded-t-xl">
                  <iframe 
                    src={`https://www.youtube.com/embed/${video.id}?rel=0&modestbranding=1`}
                    title={video.title}
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen
                    className="w-full h-full group-hover:scale-105 transition-transform duration-500 ease-out"
                  />
                  
                  {/* Play overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Floating play button */}
                  <div className="absolute top-2 right-2 w-8 h-8 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transform scale-0 group-hover:scale-100 transition-all duration-300">
                    <svg className="w-4 h-4 text-gray-700" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  </div>
                </div>
                
                {/* Video info */}
                <div className="p-4 sm:p-5">
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 group-hover:text-yellow-700 transition-colors duration-200">
                    {video.title}
                  </h3>
                  <p className="text-gray-600 text-xs sm:text-sm leading-relaxed mb-3">
                    {video.description}
                  </p>
                  
                  {/* Video stats */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-xs text-gray-500">
                      <div className="flex items-center gap-1">
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span>5:32</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                        </svg>
                        <span>2.1K</span>
                      </div>
                    </div>
                    
                    <button 
                      className="px-3 py-1.5 bg-gradient-to-r from-yellow-900 to-yellow-700 text-white text-xs font-semibold rounded-lg hover:shadow-md transform hover:-translate-y-0.5 transition-all duration-200 flex items-center gap-1"
                      onClick={() => window.open(`https://www.youtube.com/watch?v=${video.id}`, '_blank')}
                    >
                      <span>Watch</span>
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </button>
                  </div>
                </div>
                
                {/* Glow effect */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-yellow-900/20 to-yellow-700/20 rounded-xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Call to action */}
        <div className="text-center mt-8 sm:mt-10">
          <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-4 sm:p-6 shadow-md border border-gray-100/50">
            <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3">
              Want to See More?
            </h3>
            <p className="text-gray-600 mb-4 max-w-2xl mx-auto text-sm">
              Subscribe to our channel for the latest product showcases and behind-the-scenes content
            </p>
            <button 
              className="px-6 py-3 bg-gradient-to-r from-yellow-900 to-yellow-700 text-white font-semibold rounded-xl shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200 flex items-center justify-center gap-2 mx-auto text-sm"
              onClick={handleSubscribe}
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
              <span>Subscribe to Channel</span>
            </button>
          </div>
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

export default Videos;