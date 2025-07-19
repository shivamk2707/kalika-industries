"use client";
import React from 'react';
import Slider from 'react-slick';
import Image from 'next/image';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaChevronLeft, FaChevronRight, FaQuoteLeft, FaStar } from 'react-icons/fa';

const testimonials = [
  {
    title: 'Premium Living Room',
    description: 'Kalika Furniture transformed our living room with their exquisite sofa collection.',
    image: 'https://img.freepik.com/premium-photo/luxurious-living-room-interior-with-beautiful-old-carved-furniture-gold-color-with-decorations-walls-style-royal-palace_267786-509.jpg?ga=GA1.1.990952046.1750501572&semt=ais_hybrid&w=740',
    rating: 5,
    author: 'Sarah Johnson',
    position: 'Interior Designer'
  },
  {
    title: 'Complete Home Makeover',
    description: 'From bedroom to dining sets, Kalika provided everything we needed for our home.',
    image: 'https://img.freepik.com/free-photo/couch-with-two-cushions_1203-38.jpg?ga=GA1.1.990952046.1750501572&semt=ais_hybrid&w=740',
    rating: 5,
    author: 'Michael Chen',
    position: 'Home Owner'
  },
  {
    title: 'Office Furniture',
    description: 'Professional and comfortable office furniture that improved our workspace.',
    image: 'https://img.freepik.com/free-photo/office-table-with-copy-space_23-2148218053.jpg?ga=GA1.1.990952046.1750501572&semt=ais_hybrid&w=740',
    rating: 4,
    author: 'David Wilson',
    position: 'Office Manager'
  },
  {
    title: 'Bedroom Set',
    description: "Beautiful bedroom furniture that's both stylish and functional.",
    image: 'https://img.freepik.com/free-photo/interior-shot-bedroom-with-bedside-tables-lamps_181624-16658.jpg?ga=GA1.1.990952046.1750501572&semt=ais_hybrid&w=740',
    rating: 5,
    author: 'Emily Parker',
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
      <div className="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-200">
        <FaChevronRight className="text-gray-700 text-base" />
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
      <div className="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-200">
        <FaChevronLeft className="text-gray-700 text-base" />
      </div>
    </div>
  );
}

const TestimonialSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false
        }
      }
    ]
  };

  return (
    <section className="py-8 sm:py-12 bg-gradient-to-br from-slate-50 via-white to-gray-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(194,178,128,0.03),transparent_50%)]"></div>
      <div className="absolute top-0 right-1/4 w-48 sm:w-72 h-48 sm:h-72 bg-gradient-to-bl from-yellow-900/5 to-transparent rounded-full blur-2xl"></div>
      <div className="absolute bottom-0 left-1/4 w-48 sm:w-72 h-48 sm:h-72 bg-gradient-to-tr from-yellow-700/5 to-transparent rounded-full blur-2xl"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Customer Testimonials
            </h2>
            <div className="w-24 h-1 bg-gray-300 mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
            Hear what our customers say about our furniture and services
            </p>
          </div>
        </div>
        
        <div className="relative px-2">
          <Slider {...settings} className="testimonial-slider">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="px-2">
                <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 border border-gray-100/50 h-full">
                  {/* Image Section */}
                  <div className="relative h-40 overflow-hidden rounded-t-xl">
                    <Image 
                      src={testimonial.image} 
                      alt={testimonial.title} 
                      width={400} 
                      height={200}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500 ease-out"
                    />
                  </div>
                  
                  {/* Content Section */}
                  <div className="p-4 sm:p-5">
                    {/* Rating */}
                    <div className="flex items-center gap-1 mb-2">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <FaStar key={i} className="text-yellow-400 text-sm" />
                      ))}
                    </div>
                    
                    {/* Title */}
                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                      {testimonial.title}
                    </h3>
                    
                    {/* Description */}
                    <p className="text-gray-600 text-sm leading-relaxed mb-4">
                      &ldquo;{testimonial.description}&rdquo;
                    </p>
                    
                    {/* Author */}
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-yellow-900 to-yellow-700 rounded-full flex items-center justify-center">
                        <span className="text-white font-bold text-sm">
                          {testimonial.author.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900 text-sm">{testimonial.author}</div>
                        <div className="text-xs text-gray-500">{testimonial.position}</div>
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
          font-size: 10px;
          color: #d1d5db;
          opacity: 1;
        }
        
        .testimonial-slider .slick-dots li.slick-active button:before {
          color: #22c55e;
        }
        
        .custom-arrow-next {
          right: -40px;
          top: 50%;
          transform: translateY(-50%);
          z-index: 10;
        }
        
        .custom-arrow-prev {
          left: -40px;
          top: 50%;
          transform: translateY(-50%);
          z-index: 10;
        }
        
        @media (max-width: 1024px) {
          .custom-arrow-next {
            right: -20px;
          }
          .custom-arrow-prev {
            left: -20px;
          }
        }
        
        @media (max-width: 768px) {
          .custom-arrow-next,
          .custom-arrow-prev {
            display: none !important;
          }
        }
        
        .testimonial-slider .slick-slide {
          padding: 10px 0;
          transition: transform 0.3s ease, opacity 0.3s ease;
        }
        
        .testimonial-slider .slick-slide.slick-active {
          opacity: 1;
        }
        
        .testimonial-slider .slick-slide:not(.slick-active) {
          opacity: 0.7;
        }
      `}</style>
    </section>
  );
};

export default TestimonialSlider;