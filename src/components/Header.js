"use client";
import React, { useState, useEffect, useRef } from "react";
import {
  FaPhone,
  FaEnvelope,
  FaUser,
  FaHeart,
  FaShoppingCart,
  FaSearch,
  FaBars,
  FaTimes,
  FaWhatsapp,
  FaFacebookF,
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaChevronDown,
  FaChevronRight,
} from "react-icons/fa";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import navLinks from "../data/navLinks";
import megaMenuData from "../data/megaMenuData";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeMenu, setActiveMenu] = useState(null);
  const [searchFocused, setSearchFocused] = useState(false);
  const [hovered, setHovered] = useState(null);
  const [megaMenuOpen, setMegaMenuOpen] = useState(false);
  const mobileMenuRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on outside click
  useEffect(() => {
    if (!isMobileMenuOpen) return;
    const handleClickOutside = (event) => {
      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target)
      ) {
        setIsMobileMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMobileMenuOpen]);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  const handleSearch = (e) => {
    e.preventDefault();
    console.log("Searching for:", searchQuery);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/95 backdrop-blur-md shadow-lg" : "bg-white"
      }`}
    >
      {/* Enhanced Responsive Top Bar - Hidden when scrolled */}
      <div
        className={`bg-neutral-800 text-neutral-100 py-2 md:py-3 text-xs sm:text-sm border-b border-yellow-900/10 transition-all duration-300 ${
          isScrolled
            ? "transform -translate-y-full opacity-0 h-0 overflow-hidden"
            : "transform translate-y-0 opacity-100"
        }`}
      >
        <div className="container mx-auto px-3 sm:px-4">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-2 sm:gap-4">
            {/* Contact Info - Left Side */}
            <div className="flex flex-col xs:flex-row items-center justify-center gap-2 sm:gap-4">
              {/* Phone */}
              <div className="flex items-center group">
                <FaPhone className="text-brand-green text-sm sm:text-base transition-transform group-hover:scale-110 mr-1 sm:mr-2" />
                <a
                  href="tel:+917350035593"
                  className="text-xs sm:text-sm group-hover:text-brand-green transition-colors whitespace-nowrap"
                >
                  +91 7350035593
                </a>
              </div>

              {/* Divider - Hidden on mobile */}
              <span className="hidden xs:inline-block h-4 w-px bg-neutral-400 mx-1 sm:mx-2"></span>

              {/* Email - Responsive layout */}
              <div className="flex items-center group">
                <FaEnvelope className="text-brand-green text-sm sm:text-base transition-transform group-hover:scale-110 mr-1 sm:mr-2" />
                <a
                  href="mailto:kalikafurniture@gmail.com"
                  className="text-xs sm:text-sm group-hover:text-brand-green transition-colors break-all sm:break-normal"
                >
                  kalikafurniture@gmail.com
                </a>
              </div>
            </div>

            {/* Links & Social - Right Side */}
            <div className="flex flex-col xs:flex-row items-center flex-wrap justify-center gap-2 sm:gap-4">
              {/* Navigation Links */}
              <div className="flex items-center flex-wrap justify-center divide-x divide-neutral-600">
                <a
                  href="#"
                  className="px-2 sm:px-3 py-1 rounded hover:text-brand-green hover:bg-neutral-700/50 transition-all text-center whitespace-nowrap"
                >
                  Track Order
                </a>
                <a
                  href="#"
                  className="px-2 sm:px-3 py-1 rounded hover:text-brand-green hover:bg-neutral-700/50 transition-all text-center whitespace-nowrap"
                >
                  Login
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header - Adjusted padding when scrolled */}
      <div
        className={`border-b border-neutral-100 transition-all duration-300 ${
          isScrolled ? "py-2" : "py-3"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center">
              <div className="text-2xl md:text-3xl font-bold text-brand-red font-display hover:scale-105 transition-transform">
                <span className="text-yellow-900">Kalika </span>Furniture
              </div>
            </div>

            {/* Desktop Search - Enhanced */}
            <div className="hidden lg:flex flex-1 max-w-xl mx-8">
              <form
                onSubmit={handleSearch}
                className={`w-full relative transition-all duration-300 ${
                  searchFocused ? "scale-105" : ""
                }`}
              >
                <input
                  type="text"
                  placeholder="Search for furniture, decor and more..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onFocus={() => setSearchFocused(true)}
                  onBlur={() => setSearchFocused(false)}
                  className="w-full px-5 py-3 pr-14 border-2 border-neutral-200 rounded-full focus:ring-2 focus:ring-yellow-900 focus:border-transparent shadow-sm hover:shadow-md transition-all duration-300"
                />
                <button
                  type="submit"
                  className={`absolute right-3 top-1/2 transform -translate-y-1/2 bg-yellow-900 text-white p-2.5 rounded-full hover:bg-yellow-700 transition-all duration-300 flex items-center justify-center ${
                    searchFocused ? "scale-110" : ""
                  }`}
                  style={{ width: "40px", height: "40px" }}
                >
                  <FaSearch className="text-lg" />
                </button>
              </form>
            </div>

            {/* Desktop Actions - Enhanced */}
            <div className="hidden lg:flex items-center space-x-6">
              {/* Wishlist */}
              <div className="relative group">
                <a
                  href="#wishlist"
                  className="flex flex-col items-center p-2 rounded-full hover:bg-neutral-100 transition-all duration-300 group-hover:scale-110 relative"
                >
                  <div className="relative">
                    <FaHeart className="text-2xl text-neutral-600 group-hover:text-brand-red transition-colors" />
                    {/* <span className="absolute -top-3 -right-3 bg-brand-red text-white bg-green-900 text-xs rounded-full w-5 h-5 flex items-center justify-center shadow-md group-hover:animate-pulse ring-2 ring-white">
                      3
                    </span> */}
                  </div>
                  <span className="text-xs mt-1 text-neutral-600 group-hover:text-brand-green transition-colors">
                    Wishlist
                  </span>
                </a>
                {/* Dropdown content remains same */}
              </div>

              {/* Account */}
              <div className="relative group">
                <a
                  href="#account"
                  className="flex flex-col items-center p-2 rounded-full hover:bg-neutral-100 transition-all duration-300 group-hover:scale-110"
                >
                  <FaUser className="text-2xl text-neutral-600 group-hover:text-brand-green transition-colors" />
                  <span className="text-xs mt-1 text-neutral-600 group-hover:text-brand-green transition-colors">
                    Account
                  </span>
                </a>
                {/* Dropdown content remains same */}
              </div>
            </div>

            {/* Mobile Actions */}
            <div className="flex lg:hidden items-center space-x-4">
              <button
                onClick={() => setIsSearchOpen(!isSearchOpen)}
                className="p-2 hover:bg-neutral-100 rounded-full transition-colors"
              >
                <FaSearch className="text-xl text-neutral-600" />
              </button>
              <a
                href="#cart"
                className="relative p-2 hover:bg-neutral-100 rounded-full transition-colors"
              >
                <FaShoppingCart className="text-xl text-neutral-600" />
                {/* <span className="absolute -top-1 -right-1 bg-brand-red text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                  5
                </span> */}
              </a>
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 hover:bg-neutral-100 rounded-full transition-colors"
              >
                {isMobileMenuOpen ? (
                  <FaTimes className="text-xl text-neutral-600" />
                ) : (
                  <FaBars className="text-xl text-neutral-600" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Search */}
          {isSearchOpen && (
            <div className="lg:hidden mt-4 animate-slide-down">
              <form onSubmit={handleSearch}>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search furniture..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full px-4 py-3 pr-12 border-2 border-neutral-300 rounded-lg focus:ring-2 focus:ring-brand-green focus:border-transparent shadow-sm"
                  />
                  <button
                    type="submit"
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-brand-green text-white p-2 rounded-md hover:bg-brand-dark-green transition-colors"
                  >
                    <FaSearch className="text-sm" />
                  </button>
                </div>
              </form>
            </div>
          )}
        </div>
      </div>

      {/* Desktop Navigation - Animated Mega Menu */}
      <nav
        className={`hidden lg:block bg-white border-b border-neutral-100 shadow-sm transition-all duration-300 ${
          isScrolled ? "py-1" : "py-0"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center relative">
            <ul className="flex items-center">
              {navLinks.map((link, index) => (
                <div
                  key={link.href}
                  className="relative group"
                  // onMouseEnter={() => {
                  //   setHovered(link.label);
                  //   if (megaMenuData[link.label]) setMegaMenuOpen(true);
                  // }}
                  // onMouseLeave={() => {
                  //   setHovered(null);
                  //   setMegaMenuOpen(false);
                  // }}
                >
                  <li>
                    <h1
                      className={`block px-5 py-4 text-sm font-semibold tracking-wide transition-colors duration-300 border-r border-gray-200/50
      ${
        link.label === "Premium Furniture"
          ? "text-[#7a294a] font-bold hover:text-[#a13c6a]"
          : link.label === "Mattress"
          ? "text-blue-800 font-bold hover:text-blue-600"
          : "text-neutral-800 hover:text-yellow-900"
      }
      ${index === navLinks.length - 1 ? "border-r-0" : ""}`}
                    >
                      {link.label}
                      <span className="absolute -bottom-0 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
                    </h1>
                  </li>
                  {/*
                  Mega menu dropdown removed by request. Original code commented out for future reference.
                  */}
                </div>
              ))}
            </ul>
          </div>
        </div>
      </nav>

      {/* Mobile Menu - Enhanced */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-50 bg-black/50 animate-fade-in">
          <div
            ref={mobileMenuRef}
            className="mobile-menu fixed top-0 right-0 h-full w-80 bg-white shadow-2xl overflow-y-auto transform transition-transform duration-300"
          >
            <div className="p-6">
              <div className="flex justify-between items-center mb-6 border-b pb-4">
                <div className="text-2xl font-bold text-brand-red">
                  <span className="text-yellow-900">Kalika </span>Furniture
                </div>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-2 hover:bg-neutral-100 rounded-full transition-colors"
                >
                  <FaTimes className="text-xl" />
                </button>
              </div>

              {/* Search in Mobile Menu */}
              <form
                onSubmit={handleSearch}
                className="mb-6 bg-neutral-50 rounded-lg p-1"
              >
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search products..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full px-4 py-3 pr-12 bg-white border border-neutral-200 rounded-lg focus:ring-2 focus:ring-brand-green focus:border-transparent"
                  />
                  <button
                    type="submit"
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-brand-green text-white p-2 rounded-md hover:bg-brand-dark-green transition-colors"
                  >
                    <FaSearch className="text-sm" />
                  </button>
                </div>
              </form>

              {/* Mobile Categories */}
              <div className="mb-6">
                <h4 className="font-semibold text-neutral-700 mb-2 px-2">
                  Shop Categories
                </h4>
                <div className="space-y-1">
                  {navLinks.map((category) => (
                    <h1
                      key={category.label}
                      href={category.href}
                      className="block py-3 px-4 hover:bg-neutral-50 rounded-lg transition-colors flex items-center"
                    >
                      {/* Optionally, you can add an icon here if needed */}
                      <span>{category.label}</span>
                    </h1>
                  ))}
                </div>
              </div>

              {/* Mobile Actions */}
              <div className="mb-6">
                <div className="space-y-1">
                  <a
                    href="#login"
                    className="block py-3 px-4 bg-neutral-50 rounded-lg font-medium flex items-center"
                  >
                    <FaUser className="mr-3 text-brand-green" />
                    <span>Login / Register</span>
                  </a>
                  <a
                    href="#wishlist"
                    className="block py-3 px-4 hover:bg-neutral-50 rounded-lg transition-colors flex items-center"
                  >
                    <FaHeart className="mr-3 text-brand-red" />
                    <span>Wishlist</span>
                  </a>
                </div>
              </div>

              {/* Contact Info */}
              <div className="mb-6">
                <h4 className="font-semibold text-neutral-700 mb-2 px-2">
                  Contact Us
                </h4>
                <div className="space-y-3 text-sm bg-neutral-50 p-4 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <div className="bg-brand-green/10 p-2 rounded-full">
                      <FaPhone className="text-brand-green" />
                    </div>
                    <a
                      href="tel:+917350035593"
                      className="hover:text-brand-green transition-colors"
                    >
                      +91 7350035593
                    </a>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="bg-brand-green/10 p-2 rounded-full">
                      <FaEnvelope className="text-brand-green" />
                    </div>
                    <a
                      href="mailto:Handicraft@Example.com"
                      className="hover:text-brand-green transition-colors"
                    >
                      kalikafurniture@gmail.com
                    </a>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div>
                <h4 className="font-semibold text-neutral-700 mb-3 px-2">
                  Follow Us
                </h4>
                <div className="flex space-x-3 gap-4">
                  {[
                    { icon: <FaFacebookF />, color: "bg-blue-600" },
                    {
                      icon: <FaInstagram />,
                      color: "bg-gradient-to-r from-purple-500 to-pink-500",
                    },
                    { icon: <FaTwitter />, color: "bg-blue-400" },
                    { icon: <FaWhatsapp />, color: "bg-green-500" },
                  ].map((social, index) => (
                    <a
                      key={index}
                      href="#"
                      className={`p-3 ${social.color} text-white rounded-full hover:opacity-90 transition-opacity flex items-center justify-center`}
                      style={{ width: "42px", height: "42px" }}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
