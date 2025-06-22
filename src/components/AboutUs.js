"use client";

import React from 'react';
import Image from 'next/image';

const AboutUs = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 via-white to-gray-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(34,197,94,0.03),transparent_50%)]"></div>
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-gradient-to-bl from-brand-green/5 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-gradient-to-tr from-emerald-500/5 to-transparent rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-brand-green to-emerald-600 rounded-2xl mb-6 shadow-lg">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 tracking-tight leading-tight">
            About Us
          </h2>
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="w-16 h-0.5 bg-gradient-to-r from-transparent to-brand-green rounded-full"></div>
            <div className="w-24 h-1.5 bg-gradient-to-r from-brand-green to-emerald-500 rounded-full shadow-sm"></div>
            <div className="w-16 h-0.5 bg-gradient-to-l from-transparent to-emerald-500 rounded-full"></div>
          </div>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
            Discover our story and commitment to bringing you the finest furniture and home essentials
          </p>
        </div>
        
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Image Section */}
          <div className="lg:w-1/2 group">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-brand-green/20 to-emerald-500/20 rounded-3xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative overflow-hidden rounded-3xl shadow-2xl transform group-hover:scale-[1.02] transition-transform duration-500">
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent z-10"></div>
                <Image 
                  src="https://img.freepik.com/free-photo/start-up-company-teamwork-talking-video-meeting-sitting-couch-listening-explaning-remote-manager-team-strategy_482257-5233.jpg?ga=GA1.1.990952046.1750501572&semt=ais_hybrid&w=740" 
                  alt="About us" 
                  width={600} 
                  height={400} 
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
                />
                {/* Floating stats */}
                <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-lg transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-brand-green to-emerald-600 rounded-xl flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-gray-900">15+</div>
                      <div className="text-sm text-gray-600">Years Experience</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Content Section */}
          <div className="lg:w-1/2 space-y-8">
            <div className="space-y-6">
              <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 shadow-sm border border-gray-100/50 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                <p className="text-gray-700 leading-relaxed text-lg">
                  Welcome to Kalika Furniture, your trusted destination for premium furniture and home furnishings. With over 15 years of experience in the furniture industry, 
                  we have been serving customers across India with quality products and exceptional service. Our journey began with a simple mission: to provide beautiful, 
                  durable, and affordable furniture that transforms houses into homes.
                </p>
              </div>
              
              <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 shadow-sm border border-gray-100/50 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                <p className="text-gray-700 leading-relaxed text-lg">
                  At Kalika Furniture, we understand that every home is unique, and every family has different needs. That&apos;s why we offer a comprehensive range of furniture 
                  including sofas, beds, dining sets, wardrobes, curtains, blinds, and mattresses. Our expert design team works closely with customers to create personalized 
                  solutions that match their style preferences and budget requirements.
                </p>
              </div>
              
              <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 shadow-sm border border-gray-100/50 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                <p className="text-gray-700 leading-relaxed text-lg">
                  We take pride in our commitment to quality craftsmanship, using only the finest materials and latest manufacturing techniques. Our products are designed 
                  to withstand the test of time while maintaining their beauty and functionality. With our nationwide delivery network and excellent after-sales support, 
                  we ensure a seamless shopping experience for all our valued customers.
                </p>
              </div>
            </div>
            
            {/* Call to action */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button className="px-8 py-4 bg-gradient-to-r from-brand-green to-emerald-600 text-white font-semibold rounded-2xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2">
                <span>Learn More</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
              <button className="px-8 py-4 border-2 border-brand-green text-brand-green font-semibold rounded-2xl hover:bg-brand-green hover:text-white transition-all duration-300 flex items-center justify-center gap-2">
                <span>Contact Us</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs; 