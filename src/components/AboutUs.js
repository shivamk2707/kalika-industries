"use client";

import React from "react";
import Image from "next/image";

const AboutUs = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 via-white to-gray-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(245,158,11,0.05),transparent_70%)]"></div>
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-gradient-to-bl from-yellow-200/20 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-gradient-to-tr from-yellow-300/20 to-transparent rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-6 relative z-10">
        <div className="text-center mb-16">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Crafting Quality Since 2008
                </h2>
                <div className="w-24 h-1 bg-gray-300 mx-auto mb-6"></div>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  Discover our journey and commitment to bringing you the finest
                  furniture and home essentials
                </p>
              </div>
            </div>

        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Image Section */}
          <div className="lg:w-1/2 group relative">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-yellow-200/20 to-yellow-500/20 rounded-3xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative overflow-hidden rounded-3xl shadow-xl transform group-hover:scale-[1.02] transition-transform duration-500 border border-gray-100">
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent z-10"></div>
                <Image
                  src="/images/20231111_202307.jpg"
                  alt="About us"
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
                />
                {/* Floating stats */}
                <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-lg transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 border border-gray-200">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-yellow-700 to-yellow-500 rounded-xl flex items-center justify-center">
                      <svg
                        className="w-6 h-6 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-gray-900">
                        15+
                      </div>
                      <div className="text-sm text-yellow-700">
                        Years Experience
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Decorative corner elements */}
            <div className="absolute -top-4 -left-4 w-16 h-16 border-t-2 border-l-2 border-yellow-400 opacity-50"></div>
            <div className="absolute -bottom-4 -right-4 w-16 h-16 border-b-2 border-r-2 border-yellow-400 opacity-50"></div>
          </div>

          {/* Content Section */}
          <div className="lg:w-1/2 space-y-3">
            <div className="space-y-6">
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-md border border-gray-100 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                <h3 className="text-xl font-semibold text-gray-900 mb-3 flex items-center">
                  <span className="w-3 h-3 bg-yellow-500 rounded-full mr-2"></span>
                  Our Beginnings
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Welcome to Kalika Furniture, your trusted destination for
                  premium furniture and home furnishings. With over 15 years of
                  experience in the furniture industry, we have been serving
                  customers across India with quality products and exceptional
                  service. Our journey began with a simple mission: to provide
                  beautiful, durable, and affordable furniture that transforms
                  houses into homes.
                </p>
              </div>

              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 mt-2 shadow-md border border-gray-100 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                <h3 className="text-xl font-semibold text-gray-900 mb-3 flex items-center">
                  <span className="w-3 h-3 bg-yellow-500 rounded-full mr-2"></span>
                  Our Philosophy
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  At Kalika Furniture, we understand that every home is unique,
                  and every family has different needs. That&apos;s why we offer a
                  comprehensive range of furniture including sofas, beds. Our expert
                  design team works closely with customers to create
                  personalized solutions that match their style preferences and
                  budget requirements.
                </p>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4  mt-2">
              <div className="bg-white/90 rounded-xl p-4 text-center border border-gray-100 shadow-sm">
                <div className="text-3xl font-bold text-yellow-600">3000+</div>
                <div className="text-sm text-gray-600">Happy Customers</div>
              </div>
              <div className="bg-white/90 rounded-xl p-4 text-center border border-gray-100 shadow-sm">
                <div className="text-3xl font-bold text-yellow-600">100+</div>
                <div className="text-sm text-gray-600">Design Experts</div>
              </div>
            </div>

            {/* Call to action */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a href="/products">
                <button className="px-8 py-4 bg-gradient-to-r from-yellow-700 to-yellow-500 text-white font-semibold rounded-2xl shadow-md hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2 hover:from-yellow-600 hover:to-yellow-400">
                <span>Explore Our Collection</span>
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </button>
              </a>
              <button className="px-8 py-4 border-2 border-yellow-600 text-yellow-600 font-semibold rounded-2xl hover:bg-yellow-50 transition-all duration-300 flex items-center justify-center gap-2 hover:border-yellow-500 hover:text-yellow-500">
                <span>Contact Our Team</span>
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
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
