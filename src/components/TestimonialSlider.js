"use client";
import React from 'react';
import Slider from 'react-slick';
import Image from 'next/image';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaChevronLeft, FaChevronRight, FaQuoteLeft, FaStar } from 'react-icons/fa';

const testimonials = [
  {
    title: 'Premium Living Room Collection',
    description: 'Kalika Furniture transformed our living room with their exquisite sofa collection. The quality and craftsmanship exceeded our expectations.',
    image: 'https://img.freepik.com/premium-photo/luxurious-living-room-interior-with-beautiful-old-carved-furniture-gold-color-with-decorations-walls-style-royal-palace_267786-509.jpg?ga=GA1.1.990952046.1750501572&semt=ais_hybrid&w=740',
    rating: 5,
    author: 'Sarah Johnson',
    position: 'Interior Designer'
  },
  {
    title: 'Complete Home Makeover',
    description: 'From bedroom furniture to dining sets, Kalika Furniture provided everything we needed. Their design team helped us create the perfect home.',
    image: 'https://img.freepik.com/free-photo/couch-with-two-cushions_1203-38.jpg?ga=GA1.1.990952046.1750501572&semt=ais_hybrid&w=740',
    rating: 5,
    author: 'Michael Chen',
    position: 'Home Owner'
  },
];

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} custom-arrow-next`}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    >
      <div className="w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300">
        <FaChevronRight className="text-gray-700 text-lg" />
      </div>
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} custom-arrow-prev`}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    >
      <div className="w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300">
        <FaChevronLeft className="text-gray-700 text-lg" />
      </div>
    </div>
  );
}

const TestimonialSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          dots: true
        }
      }
    ]
  };

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-slate-50 via-white to-gray-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(34,197,94,0.03),transparent_50%)]"></div>
      <div className="absolute top-0 right-1/4 w-48 sm:w-96 h-48 sm:h-96 bg-gradient-to-bl from-brand-green/5 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-1/4 w-48 sm:w-96 h-48 sm:h-96 bg-gradient-to-tr from-emerald-500/5 to-transparent rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <div className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-brand-green to-emerald-600 rounded-xl sm:rounded-2xl mb-4 sm:mb-6 shadow-lg">
            <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6 tracking-tight leading-tight">
            What Our Customers Say
          </h2>
          <div className="flex items-center justify-center gap-2 sm:gap-4 mb-6 sm:mb-8">
            <div className="w-8 sm:w-16 h-0.5 bg-gradient-to-r from-transparent to-brand-green rounded-full"></div>
            <div className="w-12 sm:w-24 h-1 sm:h-1.5 bg-gradient-to-r from-brand-green to-emerald-500 rounded-full shadow-sm"></div>
            <div className="w-8 sm:w-16 h-0.5 bg-gradient-to-l from-transparent to-emerald-500 rounded-full"></div>
          </div>
          <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed px-4">
            Discover why thousands of customers trust us for their furniture needs
          </p>
        </div>
        
        <div className="relative">
          <Slider {...settings} className="testimonial-slider">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="px-4">
                <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100/50 overflow-hidden">
                  <div className="flex flex-col lg:flex-row items-center">
                    {/* Image Section */}
                    <div className="lg:w-1/2 relative group">
                      <div className="relative overflow-hidden">
                        <Image 
                          src={testimonial.image} 
                          alt={testimonial.title} 
                          width={600} 
                          height={400}
                          className="w-full h-64 lg:h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        
                        {/* Floating quote icon */}
                        <div className="absolute top-4 left-4 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transform scale-0 group-hover:scale-100 transition-all duration-500">
                          <FaQuoteLeft className="text-brand-green text-xl" />
                        </div>
                      </div>
                    </div>
                    
                    {/* Content Section */}
                    <div className="lg:w-1/2 p-6 sm:p-8 lg:p-12">
                      <div className="text-center lg:text-left">
                        {/* Rating */}
                        <div className="flex items-center justify-center lg:justify-start gap-1 mb-4">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <FaStar key={i} className="text-yellow-400 text-lg" />
                          ))}
                        </div>
                        
                        {/* Title */}
                        <h3 className="text-2xl sm:text-3xl font-bold text-brand-red mb-4 group-hover:text-brand-green transition-colors duration-300">
                          {testimonial.title}
                        </h3>
                        
                        {/* Description */}
                        <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-6">
                          &ldquo;{testimonial.description}&rdquo;
                        </p>
                        
                        {/* Author */}
                        <div className="flex items-center justify-center lg:justify-start gap-3">
                          <div className="w-12 h-12 bg-gradient-to-br from-brand-green to-emerald-600 rounded-full flex items-center justify-center">
                            <span className="text-white font-bold text-lg">
                              {testimonial.author.split(' ').map(n => n[0]).join('')}
                            </span>
                          </div>
                          <div>
                            <div className="font-semibold text-gray-900">{testimonial.author}</div>
                            <div className="text-sm text-gray-500">{testimonial.position}</div>
                          </div>
                        </div>
                        
                        {/* Call to action */}
                        <div className="mt-6 flex justify-center lg:justify-start">
                          <button className="px-6 py-3 bg-gradient-to-r from-brand-green to-emerald-600 text-white font-semibold rounded-xl hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 flex items-center gap-2">
                            <span>Learn More</span>
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
      
      <style jsx global>{`
        .testimonial-slider .slick-dots {
          bottom: -40px;
        }
        
        .testimonial-slider .slick-dots li button:before {
          font-size: 12px;
          color: #d1d5db;
          opacity: 1;
        }
        
        .testimonial-slider .slick-dots li.slick-active button:before {
          color: #22c55e;
        }
        
        .custom-arrow-next {
          right: -60px;
          top: 50%;
          transform: translateY(-50%);
          z-index: 10;
        }
        
        .custom-arrow-prev {
          left: -60px;
          top: 50%;
          transform: translateY(-50%);
          z-index: 10;
        }
        
        @media (max-width: 1024px) {
          .custom-arrow-next,
          .custom-arrow-prev {
            display: none !important;
          }
        }
        
        .testimonial-slider .slick-slide {
          opacity: 0.5;
          transition: opacity 0.3s ease;
        }
        
        .testimonial-slider .slick-slide.slick-active {
          opacity: 1;
        }
      `}</style>
    </section>
  );
};

export default TestimonialSlider; 