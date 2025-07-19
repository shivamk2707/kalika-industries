"use client";

import React, { useState } from 'react';
import { FaMapMarkerAlt, FaEnvelope, FaPhone, FaClock, FaUser, FaPaperPlane } from 'react-icons/fa';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const contactInfo = [
    {
      icon: <FaMapMarkerAlt className="text-2xl sm:text-3xl" />,
      title: 'Our Store Address',
      details: ['R7P2+34Q, Ranjangaon Rd, Waluj, Pandharpur, Chhatrapati Sambhajinagar, Maharashtra 431136'],
      color: 'from-red-500 to-pink-600'
    },
    {
      icon: <FaEnvelope className="text-2xl sm:text-3xl" />,
      title: 'General Enquiries',
      details: ['kalikafurniture@gmail.com'],
      color: 'from-blue-500 to-cyan-600'
    },
    {
      icon: <FaPhone className="text-2xl sm:text-3xl" />,
      title: 'Call Us',
      details: ['+91 9850004078'],
      color: 'from-yellow-900 to-yellow-700' // light brown gradient
    },
    {
      icon: <FaClock className="text-2xl sm:text-3xl" />,
      title: 'Our Timing',
      details: ['Mon - Sat : 09:30 AM - 09:00 PM'],
      color: 'from-purple-500 to-indigo-600'
    }
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-white via-slate-50 to-yellow-50 relative overflow-hidden">
      {/* Light theme background decorations */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-gradient-to-br from-yellow-900/10 to-yellow-700/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-gradient-to-tr from-yellow-100/30 to-yellow-900/10 rounded-full blur-2xl -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-yellow-900/10 to-yellow-700/20 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Get In Touch
            </h2>
            <div className="w-24 h-1 bg-gray-300 mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
            We&apos;d love to hear from you. Send us a message and we&apos;ll respond as soon as possible.
            </p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Contact Details */}
          <div className="space-y-6">
            {contactInfo.map((info, index) => (
              <div 
                key={index} 
                className="group bg-white/80 backdrop-blur-sm rounded-2xl p-6 mb-4 shadow-sm hover:shadow-xl transition-all duration-500 transform hover:-translate-y-1 border border-gray-100/50"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-start gap-4">
                  <div className={`w-12 h-12 bg-gradient-to-br ${info.color} rounded-xl flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    {info.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 group-hover:text-yellow-900 transition-colors duration-300">
                      {info.title}
                    </h3>
                    {info.details.map((detail, detailIndex) => (
                      <p key={detailIndex} className="text-gray-600 text-sm sm:text-base leading-relaxed">
                        {detail}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            ))}
            
            {/* Additional info card */}
            <div className="bg-gradient-to-br from-yellow-900 to-yellow-700 rounded-2xl p-6 text-white">
              <h3 className="text-xl font-bold mb-3">Why Choose Us?</h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>Free Delivery</span>
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>Expert Design Team</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-4 sm:p-6 md:p-8 shadow-lg border border-gray-100/50">
            <h3 className="text-2xl font-bold text-gray-900 mb-4 sm:mb-6">Send us a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5 md:space-y-6">
              <div className="relative">
                <div className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 text-yellow-800">
                  <FaUser className="w-5 h-5" />
                </div>
                <input 
                  type="text" 
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Your Name" 
                  className="w-full pl-10 sm:pl-12 pr-3 sm:pr-4 py-3 sm:py-4 mb-2 border border-gray-200 rounded-xl focus:ring-2 focus:ring-yellow-900 focus:border-transparent transition-all duration-300 bg-white/50 backdrop-blur-sm"
                  required
                />
              </div>
              
              <div className="relative">
                <div className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 text-blue-900 ">
                  <FaEnvelope className="w-5 h-5" />
                </div>
                <input 
                  type="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Your Email" 
                  className="w-full pl-10 sm:pl-12 pr-3 sm:pr-4 py-3 sm:py-4 mb-2 border border-gray-200 rounded-xl focus:ring-2 focus:ring-yellow-900 focus:border-transparent transition-all duration-300 bg-white/50 backdrop-blur-sm"
                  required
                />
              </div>
              
              <div className="relative">
                <div className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 text-purple-900">
                  <FaPhone className="w-5 h-5" />
                </div>
                <input 
                  type="tel" 
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="Your Phone" 
                  className="w-full pl-10 sm:pl-12 pr-3 sm:pr-4 py-3 sm:py-4 mb-2 border border-gray-200 rounded-xl focus:ring-2 focus:ring-yellow-900 focus:border-transparent transition-all duration-300 bg-white/50 backdrop-blur-sm"
                  required
                />
              </div>
              
              <div className="relative">
                <textarea 
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Your Message" 
                  rows="5" 
                  className="w-full px-3 sm:px-4 py-3 sm:py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-yellow-900 focus:border-transparent transition-all duration-300 bg-white/50 backdrop-blur-sm resize-none"
                  required
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                className="w-full bg-gradient-to-r from-yellow-900 to-yellow-700 text-white font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-xl hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2 group mt-2"
              >
                <FaPaperPlane className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                <span>Send Message</span>
              </button>
            </form>
            
            {/* Form footer */}
            <div className="mt-4 sm:mt-6 text-center">
              <p className="text-sm text-gray-500">
                We typically respond within 24 hours
              </p>
            </div>
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

export default ContactUs; 