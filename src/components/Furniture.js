"use client";
import React, { useState } from "react";
import Image from "next/image";
import {
  FaHeart,
  FaShoppingCart,
  FaEye,
  FaStar,
  FaStarHalfAlt,
} from "react-icons/fa";

const furnitureItems = [
  {
    id: 1,
    name: "Modern Bed Frame",
    image:
      "https://images.unsplash.com/photo-1635594202056-9ea3b497e5c0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bW9kZXJuJTIwYmVkc3xlbnwwfDJ8MHx8fDA%3D",
    price: "₹25,999",
    originalPrice: "₹32,999",
    rating: 4.5,
    reviews: 128,
    discount: 21,
    category: "Beds",
  },
  {
    id: 2,
    name: "Luxury Sofa Set",
    image:
      "https://images.unsplash.com/photo-1729086046027-09979ade13fd?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fFNvZmElMjBTZXR8ZW58MHwyfDB8fHww",
    price: "₹45,999",
    originalPrice: "₹58,999",
    rating: 4.8,
    reviews: 89,
    discount: 22,
    category: "Sofa Set",
  },
  {
    id: 3,
    name: "Elegant Dining Table",
    image:
      "https://images.unsplash.com/photo-1688287398986-3d6dcd55ef8d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fERpbmluZyUyMFNldHxlbnwwfDJ8MHx8fDA%3D",
    price: "₹18,999",
    originalPrice: "₹24,999",
    rating: 4.3,
    reviews: 156,
    discount: 24,
    category: "Dining Set",
  },
  {
    id: 4,
    name: "Shoe Storage Rack",
    image:
      "https://img.freepik.com/premium-photo/shoe-rack-open-shoe-rack-furniture-home-furniture-indian-furniture_471440-17.jpg?ga=GA1.1.990952046.1750501572&semt=ais_hybrid&w=740",
    price: "₹3,999",
    originalPrice: "₹5,999",
    rating: 4.1,
    reviews: 203,
    discount: 33,
    category: "Shoe rack",
  },
  {
    id: 5,
    name: "Vanity Dressing Table",
    image:
      "https://img.freepik.com/free-photo/3d-rendering-classic-interior_23-2150943430.jpg?ga=GA1.1.990952046.1750501572&semt=ais_hybrid&w=740",
    price: "₹12,999",
    originalPrice: "₹16,999",
    rating: 4.6,
    reviews: 67,
    discount: 24,
    category: "Dressing table",
  },
  {
    id: 6,
    name: "Convertible Sofa Bed",
    image:
      "https://img.freepik.com/premium-photo/modern-bedroom-interior-minimal-style-3d-render_907437-1215.jpg?ga=GA1.1.990952046.1750501572&semt=ais_hybrid&w=740",
    price: "₹28,999",
    originalPrice: "₹35,999",
    rating: 4.4,
    reviews: 94,
    discount: 19,
    category: "Sofa Cum Bed",
  },
  {
    id: 7,
    name: "Walk-in Wardrobe",
    image:
      "https://img.freepik.com/premium-photo/deluxe-pleasant-walk-closet-interior-design_542613-245.jpg?ga=GA1.1.990952046.1750501572&semt=ais_hybrid&w=740",
    price: "₹35,999",
    originalPrice: "₹45,999",
    rating: 4.7,
    reviews: 78,
    discount: 22,
    category: "Wardrobes & Almirahs",
  },
  {
    id: 8,
    name: "Traditional Wooden Divan",
    image:
      "https://img.freepik.com/premium-photo/stylish-modern-brown-color-bed-2_849875-14.jpg?ga=GA1.1.990952046.1750501572&semt=ais_hybrid&w=740",
    price: "₹22,999",
    originalPrice: "₹28,999",
    rating: 4.2,
    reviews: 112,
    discount: 21,
    category: "Wooden Divan",
  },
  {
    id: 9,
    name: "Glass Center Table",
    image:
      "https://img.freepik.com/premium-photo/wooden-table_940887-69.jpg?ga=GA1.1.990952046.1750501572&semt=ais_hybrid&w=740",
    price: "₹8,999",
    originalPrice: "₹11,999",
    rating: 4.0,
    reviews: 145,
    discount: 25,
    category: "Center Table",
  },
  {
    id: 10,
    name: "Side Table Set",
    image:
      "https://img.freepik.com/premium-photo/closeup-coffee-cup-sweets-bedside-table-bright-bedroom-interior-3d-rendering_208753-774.jpg?ga=GA1.1.990952046.1750501572&semt=ais_hybrid&w=740",
    price: "₹5,999",
    originalPrice: "₹7,999",
    rating: 4.3,
    reviews: 89,
    discount: 25,
    category: "Coffee & Side Table",
  },
  {
    id: 11,
    name: "Ergonomic Office Chair",
    image:
      "https://img.freepik.com/premium-photo/outstanding-white-working-chair_40193-192.jpg?ga=GA1.1.990952046.1750501572&semt=ais_hybrid&w=740",
    price: "₹9,999",
    originalPrice: "₹12,999",
    rating: 4.5,
    reviews: 167,
    discount: 23,
    category: "Office Chair",
  },
  {
    id: 12,
    name: "TV Entertainment Unit",
    image:
      "https://img.freepik.com/premium-photo/3d-model-furniture-cabinet-tv-stands-3d-model_922528-609.jpg?ga=GA1.1.990952046.1750501572&semt=ais_hybrid&w=740",
    price: "₹15,999",
    originalPrice: "₹19,999",
    rating: 4.4,
    reviews: 134,
    discount: 20,
    category: "TV Cabinet",
  },
];

const Furniture = () => {
  const [wishlist, setWishlist] = useState(new Set());
  const [cart, setCart] = useState(new Set());

  const toggleWishlist = (id) => {
    const newWishlist = new Set(wishlist);
    if (newWishlist.has(id)) {
      newWishlist.delete(id);
    } else {
      newWishlist.add(id);
    }
    setWishlist(newWishlist);
  };

  const addToCart = (id) => {
    const newCart = new Set(cart);
    newCart.add(id);
    setCart(newCart);
    // Show success message
    alert("Item added to cart!");
  };

  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(<FaStar key={i} className="text-yellow-400 text-sm" />);
    }

    if (hasHalfStar) {
      stars.push(
        <FaStarHalfAlt key="half" className="text-yellow-400 text-sm" />
      );
    }

    const emptyStars = 5 - Math.ceil(rating);
    for (let i = 0; i < emptyStars; i++) {
      stars.push(
        <FaStar key={`empty-${i}`} className="text-gray-300 text-sm" />
      );
    }

    return stars;
  };

  return (
    <section
      id="furniture"
      className="py-16 bg-gradient-to-br from-white via-slate-50 to-yellow-50 relative overflow-hidden"
    >
      {/* Light theme background decorations */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-gradient-to-br from-yellow-900/10 to-yellow-700/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-gradient-to-tr from-yellow-100/30 to-yellow-900/10 rounded-full blur-2xl -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-yellow-900/10 to-yellow-700/20 rounded-full blur-3xl"></div>
      </div>
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-8 md:mb-16 lg:mb-20 px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-900 font-serif mb-4 mt-8 sm:mt-12 md:mt-16 leading-tight">
            Premium Furniture Collection
          </h2>
          <div className="w-16 sm:w-20 md:w-24 h-1.5 bg-gradient-to-r from-amber-500 to-amber-700 mx-auto mb-6 rounded-full"></div>
          <p className="text-base sm:text-lg md:text-xl text-neutral-600 max-w-md sm:max-w-xl md:max-w-2xl lg:max-w-3xl mx-auto leading-relaxed">
            Discover our curated collection of handcrafted furniture that
            combines timeless elegance with modern comfort. Each piece is
            carefully selected to transform your living spaces.
          </p>
        </div>

        {/* Furniture Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {furnitureItems.map((item) => (
            <div
              key={item.id}
              className="group bg-white rounded-2xl shadow-soft hover:shadow-large transition-all duration-300 overflow-hidden transform hover:-translate-y-2"
            >
              {/* Image Container */}
              <div className="relative overflow-hidden aspect-square">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />

                {/* Discount Badge */}
                {/* <div className="absolute top-4 left-4 bg-brand-red text-white px-3 py-1 rounded-full text-sm font-semibold">
                  {item.discount}% OFF
                </div> */}

                {/* Action Buttons */}
                <div className="absolute top-4 right-4 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button
                    onClick={() => toggleWishlist(item.id)}
                    className={`p-3 rounded-full shadow-medium transition-all duration-200 ${
                      wishlist.has(item.id)
                        ? "bg-brand-red text-white"
                        : "bg-white text-neutral-600 hover:bg-brand-red hover:text-white"
                    }`}
                  >
                    <FaHeart className="text-sm hover:text-red-700" />
                  </button>
                  <button className="p-3 rounded-full bg-white text-neutral-600 hover:bg-yellow-900 hover:text-white shadow-medium transition-all duration-200">
                    <FaEye className="text-sm hover:text-blue-600" />
                  </button>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="mb-2">
                  <span className="text-xs text-yellow-900 font-semibold uppercase tracking-wide">
                    {item.category}
                  </span>
                </div>

                <h3 className="text-lg font-semibold text-neutral-900 mb-2 line-clamp-2">
                  {item.name}
                </h3>

                {/* Rating */}
                <div className="flex items-center gap-2 mb-3">
                  <div className="flex items-center gap-1">
                    {renderStars(item.rating)}
                  </div>
                  <span className="text-sm text-neutral-500">
                    ({item.reviews} reviews)
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Furniture;
