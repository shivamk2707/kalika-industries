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
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import navLinks from '../data/navLinks';
import megaMenuData from '../data/megaMenuData';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeMenu, setActiveMenu] = useState(null);
  const [searchFocused, setSearchFocused] = useState(false);
  const [hovered, setHovered] = useState(null);
  const [megaMenuOpen, setMegaMenuOpen] = useState(false);
  const [megaMenuPosition, setMegaMenuPosition] = useState('center'); // 'center', 'left', 'right'
  const megaMenuRef = useRef(null);
  const navItemRefs = useRef({});

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Adjust mega menu position to prevent overflow
  useEffect(() => {
    if (megaMenuOpen && hovered && megaMenuRef.current && navItemRefs.current[hovered]) {
      const menuRect = megaMenuRef.current.getBoundingClientRect();
      const navRect = navItemRefs.current[hovered].getBoundingClientRect();
      const viewportWidth = window.innerWidth;
      // Calculate the left position of the menu if centered
      const menuLeft = navRect.left + navRect.width / 2 - menuRect.width / 2;
      const menuRight = menuLeft + menuRect.width;
      if (menuLeft < 8) {
        setMegaMenuPosition('left');
      } else if (menuRight > viewportWidth - 8) {
        setMegaMenuPosition('right');
      } else {
        setMegaMenuPosition('center');
      }
    }
  }, [megaMenuOpen, hovered]);

  const handleSearch = (e) => {
    e.preventDefault();
    console.log("Searching for:", searchQuery);
  };

  const categories = [
    { name: "Sofas & Recliners", href: "#", icon: "🛋️" },
    { name: "Beds & Wardrobes", href: "#", icon: "🛏️" },
    { name: "Dining Sets", href: "#", icon: "🍽️" },
    { name: "Curtains & Blinds", href: "#", icon: "🪟" },
    { name: "Mattresses", href: "#", icon: "🛌" },
    { name: "Home Furnishings", href: "#", icon: "🧵" },
  ];

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "#" },
    {
      name: "Products",
      href: "#",
      subItems: [
        { name: "Living Room", href: "#" },
        { name: "Bedroom", href: "#" },
        { name: "Dining", href: "#" },
        { name: "Home Decor", href: "#" },
      ],
    },
    { name: "Gallery", href: "#" },
    { name: "Contact", href: "#" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/95 backdrop-blur-md shadow-lg" : "bg-white"
      }`}
    >
      {/* Enhanced Responsive Top Bar - Hidden when scrolled */}
      <div 
        className={`bg-neutral-800 text-neutral-100 py-2 md:py-3 text-xs sm:text-sm border-b border-brand-green/10 transition-all duration-300 ${
          isScrolled ? "transform -translate-y-full opacity-0 h-0 overflow-hidden" : "transform translate-y-0 opacity-100"
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
                  href="tel:+919054768724"
                  className="text-xs sm:text-sm group-hover:text-brand-green transition-colors whitespace-nowrap"
                >
                  +91 9054768724
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
                  My Account
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
      <div className={`border-b border-neutral-100 transition-all duration-300 ${
        isScrolled ? "py-2" : "py-3"
      }`}>
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center">
              <div className="text-2xl md:text-3xl font-bold text-brand-red font-display hover:scale-105 transition-transform">
                <span className="text-brand-green">Kalika </span>Furniture
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
                  className="w-full px-5 py-3 pr-14 border-2 border-neutral-200 rounded-full focus:ring-2 focus:ring-brand-green focus:border-transparent shadow-sm hover:shadow-md transition-all duration-300"
                />
                <button
                  type="submit"
                  className={`absolute right-3 top-1/2 transform -translate-y-1/2 bg-brand-green text-white p-2.5 rounded-full hover:bg-brand-dark-green transition-all duration-300 flex items-center justify-center ${
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
                    <span className="absolute -top-3 -right-3 bg-brand-red text-white bg-green-900 text-xs rounded-full w-5 h-5 flex items-center justify-center shadow-md group-hover:animate-pulse ring-2 ring-white">
                      3
                    </span>
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

              {/* Cart */}
              <div className="relative group">
                <a
                  href="#cart"
                  className="flex flex-col items-center p-2 rounded-full hover:bg-neutral-100 transition-all duration-300 group-hover:scale-110"
                >
                  <div className="relative">
                    <FaShoppingCart className="text-2xl text-neutral-600 group-hover:text-brand-green transition-colors" />
                    <span className="absolute -top-3 -right-3 bg-brand-red text-white bg-green-900 text-xs rounded-full w-5 h-5 flex items-center justify-center shadow-md group-hover:animate-bounce ring-2 ring-white">
                      5
                    </span>
                  </div>
                  <span className="text-xs mt-1 text-neutral-600 group-hover:text-brand-green transition-colors">
                    Cart
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
                <span className="absolute -top-1 -right-1 bg-brand-red text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                  5
                </span>
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
      <nav className={`hidden lg:block bg-white border-b border-neutral-100 shadow-sm transition-all duration-300 ${
        isScrolled ? "py-1" : "py-0"
      }`}>
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center relative">
            <ul className="flex items-center">
              {navLinks.map((link, index) => (
                <div
                  key={link.href}
                  className="relative group"
                  ref={el => navItemRefs.current[link.label] = el}
                  onMouseEnter={() => {
                    setHovered(link.label);
                    if (megaMenuData[link.label]) setMegaMenuOpen(true);
                  }}
                  onMouseLeave={() => {
                    setHovered(null);
                    setMegaMenuOpen(false);
                  }}
                >
                  <li>
                    <Link
                      href={link.href}
                      className={`block px-5 py-4 text-sm font-semibold tracking-wide transition-colors duration-300 border-r border-gray-200/50
                        ${link.label === 'Premium Furniture' ? 'text-[#7a294a] font-bold hover:text-[#a13c6a]' : link.label === 'Mattress' ? 'text-blue-800 font-bold hover:text-blue-600' : 'text-neutral-800 hover:text-brand-green'}
                        ${index === navLinks.length - 1 ? 'border-r-0' : ''}`}
                    >
                      {link.label}
                      <span className="absolute -bottom-0 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
                    </Link>
                  </li>
                  {/* Mega Menu */}
                  {megaMenuOpen && hovered === link.label && megaMenuData[hovered] && (
                    <AnimatePresence>
                      <motion.div
                        ref={megaMenuRef}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 20 }}
                        transition={{ duration: 0.25, ease: "easeOut" }}
                        className={`absolute top-full mt-2 w-[960px] bg-white shadow-2xl rounded-xl border border-gray-100 z-50 overflow-hidden
                          ${megaMenuPosition === 'center' ? 'left-1/2 -translate-x-1/2' : ''}
                          ${megaMenuPosition === 'left' ? 'left-0 translate-x-0' : ''}
                          ${megaMenuPosition === 'right' ? 'right-0 translate-x-0' : ''}
                        `}
                        style={{ maxWidth: '98vw' }}
                      >
                        <div className="flex bg-gradient-to-b from-white to-gray-50/50">
                          {/* Left: Subcategories */}
                          <div className="w-1/3 p-8 border-r border-gray-200/50">
                            <h3 className="font-bold text-gray-800 mb-5 text-sm uppercase tracking-wider">
                              Categories
                            </h3>
                            <ul className="space-y-4">
                              {megaMenuData[hovered].subcategories.map((cat, i) => (
                                <li key={cat.name} className="group">
                                  <Link
                                    href={cat.link}
                                    className="font-medium text-gray-700 hover:text-blue-600 transition-colors duration-300 text-sm relative"
                                  >
                                    {cat.name}
                                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
                                  </Link>
                                  {cat.items && (
                                    <ul className="ml-4 mt-3 space-y-2">
                                      {cat.items.map(item => (
                                        <li key={item.name}>
                                          <Link
                                            href={item.link}
                                            className="text-gray-500 hover:text-blue-600 transition-colors duration-300 text-sm"
                                          >
                                            {item.name}
                                          </Link>
                                        </li>
                                      ))}
                                    </ul>
                                  )}
                                </li>
                              ))}
                            </ul>
                          </div>
                          {/* Center: Image */}
                          <div className="w-1/3 flex items-center justify-center p-8">
                            <img
                              src={megaMenuData[hovered].image}
                              alt={hovered}
                              className="max-h-56 object-contain rounded-lg shadow-sm transition-transform duration-300 hover:scale-105"
                            />
                          </div>
                          {/* Right: Popular Categories */}
                          <div className="w-1/3 p-8">
                            <h3 className="font-bold text-gray-800 mb-5 text-sm uppercase tracking-wider">
                              Popular Items
                            </h3>
                            <ul className="space-y-3">
                              {megaMenuData[hovered].popular.map(cat => (
                                <li key={cat.name} className="group">
                                  <Link
                                    href={cat.link}
                                    className="text-gray-600 hover:text-blue-600 transition-colors duration-300 text-sm relative"
                                  >
                                    {cat.name}
                                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </motion.div>
                    </AnimatePresence>
                  )}
                </div>
              ))}
            </ul>
          </div>
        </div>
      </nav>

      {/* Mobile Menu - Enhanced */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-50 bg-black/50 animate-fade-in">
          <div className="mobile-menu fixed top-0 right-0 h-full w-80 bg-white shadow-2xl overflow-y-auto transform transition-transform duration-300">
            <div className="p-6">
              <div className="flex justify-between items-center mb-6 border-b pb-4">
                <div className="text-2xl font-bold text-brand-red">
                  <span className="text-brand-green">Kalika </span>Furniture
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
                  {categories.map((category) => (
                    <a
                      key={category.name}
                      href={category.href}
                      className="block py-3 px-4 hover:bg-neutral-50 rounded-lg transition-colors flex items-center"
                    >
                      <span className="mr-3">{category.icon}</span>
                      <span>{category.name}</span>
                      <FaChevronRight className="ml-auto text-neutral-400" />
                    </a>
                  ))}
                </div>
              </div>

              {/* Mobile Navigation */}
              <div className="mb-6">
                <h4 className="font-semibold text-neutral-700 mb-2 px-2">
                  Menu
                </h4>
                <div className="space-y-1">
                  {navItems.map((item) => (
                    <div key={item.name}>
                      <a
                        href={item.href}
                        className="block py-3 px-4 hover:bg-neutral-50 rounded-lg transition-colors flex items-center justify-between"
                        onClick={(e) => {
                          if (item.subItems) {
                            e.preventDefault();
                            setActiveMenu(
                              activeMenu === item.name ? null : item.name
                            );
                          }
                        }}
                      >
                        <span>{item.name}</span>
                        {item.subItems && (
                          <FaChevronDown
                            className={`text-xs transition-transform ${
                              activeMenu === item.name ? "rotate-180" : ""
                            }`}
                          />
                        )}
                      </a>
                      {item.subItems && activeMenu === item.name && (
                        <div className="ml-4 mt-1 space-y-1">
                          {item.subItems.map((subItem) => (
                            <a
                              key={subItem.name}
                              href={subItem.href}
                              className="block py-2 px-4 hover:bg-neutral-50 rounded-lg transition-colors text-sm flex items-center"
                            >
                              <span className="mr-2">•</span>
                              <span>{subItem.name}</span>
                            </a>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Mobile Actions */}
              <div className="mb-6">
                <h4 className="font-semibold text-neutral-700 mb-2 px-2">
                  My Account
                </h4>
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
                    <span>Wishlist (3)</span>
                  </a>
                  <a
                    href="#cart"
                    className="block py-3 px-4 hover:bg-neutral-50 rounded-lg transition-colors flex items-center"
                  >
                    <FaShoppingCart className="mr-3 text-brand-green" />
                    <span>My Cart (5)</span>
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
                      href="tel:+918888888888"
                      className="hover:text-brand-green transition-colors"
                    >
                      +91 9056543127
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
                <div className="flex space-x-3">
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
