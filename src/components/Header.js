"use client";
import React, { useState, useEffect } from "react";
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

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeMenu, setActiveMenu] = useState(null);
  const [searchFocused, setSearchFocused] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
                  href="mailto:kalikaindustries@gmail.com"
                  className="text-xs sm:text-sm group-hover:text-brand-green transition-colors break-all sm:break-normal"
                >
                  kalikaindustries@gmail.com
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
                <span className="text-brand-green">Kalika </span>Industries
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

      {/* Desktop Navigation - Enhanced - Adjusted padding when scrolled */}
      <nav className={`hidden lg:block bg-white border-b border-neutral-100 shadow-sm transition-all duration-300 ${
        isScrolled ? "py-1" : "py-0"
      }`}>
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            {/* Mega Menu Trigger */}
            <div
              className="relative"
              onMouseEnter={() => setActiveMenu("categories")}
              onMouseLeave={() => setActiveMenu(null)}
            >
              <button className="bg-brand-green hover:bg-brand-dark-green text-white px-6 py-3 flex items-center space-x-2 font-medium transition-all duration-300 rounded-t-lg">
                <FaBars />
                <span>SHOP BY CATEGORY</span>
                <FaChevronDown
                  className={`transition-transform duration-200 ${
                    activeMenu === "categories" ? "rotate-180" : ""
                  }`}
                />
              </button>

              {/* Mega Menu Dropdown */}
              {activeMenu === "categories" && (
                <div className="absolute left-0 w-full bg-white shadow-xl rounded-b-lg animate-fade-in z-20">
                  <div className="grid grid-cols-3 gap-8 p-6">
                    {categories.map((category) => (
                      <a
                        key={category.name}
                        href={category.href}
                        className="group flex items-start space-x-3 p-3 hover:bg-neutral-50 rounded-lg transition-all duration-200"
                      >
                        <div className="text-2xl">{category.icon}</div>
                        <div>
                          <h4 className="font-medium text-neutral-800 group-hover:text-brand-green transition-colors">
                            {category.name}
                          </h4>
                          <p className="text-xs text-neutral-500 mt-1 group-hover:text-neutral-700 transition-colors">
                            Shop our {category.name.toLowerCase()} collection
                          </p>
                        </div>
                        <FaChevronRight className="ml-auto text-neutral-400 group-hover:text-brand-green transition-colors" />
                      </a>
                    ))}
                  </div>
                  <div className="bg-neutral-50 px-6 py-3 border-t border-neutral-200 flex justify-between items-center">
                    <span className="text-sm text-neutral-600">
                      Need help choosing?
                    </span>
                    <a
                      href="#"
                      className="text-brand-green hover:underline font-medium text-sm"
                    >
                      Contact our design experts →
                    </a>
                  </div>
                </div>
              )}
            </div>

            {/* Main Navigation */}
            <div className="flex space-x-1">
              {navItems.map((item) => (
                <div
                  key={item.name}
                  className="relative"
                  onMouseEnter={() => setActiveMenu(item.name)}
                  onMouseLeave={() => setActiveMenu(null)}
                >
                  <a
                    href={item.href}
                    className={`px-5 py-3.5 font-semibold flex items-center space-x-1.5 transition-all duration-300 ${
                      activeMenu === item.name
                        ? "text-white bg-gradient-to-r from-brand-green to-emerald-600 rounded-lg shadow-lg"
                        : "text-neutral-700 hover:text-white hover:bg-gradient-to-r hover:from-brand-green/80 hover:to-emerald-600/80 rounded-lg"
                    } relative overflow-hidden group`}
                  >
                    {/* Animated background layer */}
                    <span className="absolute inset-0 bg-gradient-to-r from-brand-green to-emerald-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></span>

                    <span className="relative">
                      {item.name}
                      <span
                        className={`absolute -bottom-1 left-0 h-[2px] bg-white transition-all duration-500 ${
                          activeMenu === item.name
                            ? "w-full"
                            : "w-0 group-hover:w-full"
                        }`}
                      ></span>
                    </span>

                    {item.subItems && (
                      <FaChevronDown
                        className={`text-xs transition-all duration-300 ${
                          activeMenu === item.name
                            ? "rotate-180 text-white"
                            : "text-neutral-500 group-hover:text-white"
                        }`}
                      />
                    )}
                  </a>

                  {/* Premium Submenu Dropdown */}
                  {item.subItems && activeMenu === item.name && (
                    <div className="absolute left-0 mt-1 w-64 bg-white shadow-2xl rounded-lg border border-gray-200 animate-fade-in z-30 overflow-hidden backdrop-blur-sm bg-white/95">
                      <div className="p-1.5">
                        {item.subItems.map((subItem) => (
                          <a
                            key={subItem.name}
                            href={subItem.href}
                            className="flex items-center justify-between px-4 py-2.5 rounded-md hover:bg-emerald-50 transition-all duration-200 group"
                          >
                            <div className="flex items-center">
                              <span className="w-2 h-2 bg-brand-green rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                              <span className="text-neutral-700 group-hover:text-brand-green font-medium transition-colors">
                                {subItem.name}
                              </span>
                            </div>
                            <FaChevronRight className="text-xs text-transparent group-hover:text-brand-green transition-colors duration-300" />
                          </a>
                        ))}
                      </div>

                      {/* Optional: View All CTA */}
                      <div className="border-t border-gray-100 px-4 py-2.5 bg-gray-50/50">
                        <a
                          href="#"
                          className="text-xs font-semibold text-brand-green hover:text-emerald-700 flex items-center justify-end transition-colors"
                        >
                          View All <FaChevronRight className="ml-1 text-xs" />
                        </a>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Offers */}
            <div className="text-sm font-medium">
              <a
                href="#offers"
                className="text-brand-green hover:text-brand-dark-green hover:underline transition-colors duration-200 flex items-center"
              >
                <span className="mr-1">🔥</span> HOT DEALS
              </a>
            </div>
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
                  <span className="text-brand-green">Kalika </span>Industries
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
                      kalikaindustries@gmail.com
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
