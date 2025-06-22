import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden">
      {/* Decorative gradients */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-gradient-to-br from-brand-green/20 to-emerald-500/10 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-gradient-to-tl from-brand-red/20 to-pink-500/10 rounded-full blur-3xl -z-10"></div>
      
      <div className="bg-brand-red/95 py-6">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6 md:gap-0">
          <div className="flex flex-wrap justify-center md:justify-start gap-4 md:gap-8 mb-2 md:mb-0 text-sm sm:text-base font-medium">
            <a href="#" className="hover:underline hover:text-brand-green transition-colors duration-200">About Us</a>
            <a href="#" className="hover:underline hover:text-brand-green transition-colors duration-200">Contact Us</a>
            <a href="#" className="hover:underline hover:text-brand-green transition-colors duration-200">Terms & Conditions</a>
            <a href="#" className="hover:underline hover:text-brand-green transition-colors duration-200">Privacy Policy</a>
          </div>
          <div className="flex gap-3 md:gap-4">
            <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-brand-green/80 transition-all duration-300 text-xl hover:text-white shadow-lg">
              <FaFacebookF />
            </a>
            <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-brand-green/80 transition-all duration-300 text-xl hover:text-white shadow-lg">
              <FaTwitter />
            </a>
            <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-brand-green/80 transition-all duration-300 text-xl hover:text-white shadow-lg">
              <FaInstagram />
            </a>
            <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-brand-green/80 transition-all duration-300 text-xl hover:text-white shadow-lg">
              <FaLinkedinIn />
            </a>
            <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-brand-green/80 transition-all duration-300 text-xl hover:text-white shadow-lg">
              <FaWhatsapp />
            </a>
          </div>
        </div>
      </div>
      <div className="bg-gray-900/95 py-6 text-center text-xs sm:text-sm border-t border-gray-800">
        <div className="container mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-2">
          <div>
            <p className="mb-1 sm:mb-0">&copy; {new Date().getFullYear()} <span className="font-semibold text-brand-green">Kalika Industries</span>. All Rights Reserved.</p>
          </div>
          <div>
            <p>
              Powered by{' '}
              <a href="#" className="text-brand-green font-semibold hover:underline hover:text-emerald-400 transition-colors duration-200">
                Shivam K
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 