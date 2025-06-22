import React from 'react';
import ProductGrid from './ProductGrid';

const curtainItems = [
  { name: 'Blackout Curtains', image: 'https://img.freepik.com/premium-photo/curtain-isolated-white-background-3d-illustration-cg-render_375001-11525.jpg?ga=GA1.1.990952046.1750501572&semt=ais_hybrid&w=740' },
  { name: 'Triple Weave Curtains', image: 'https://img.freepik.com/premium-photo/curtain-isolated-white-background-3d-illustration-cg-render_375001-11500.jpg?ga=GA1.1.990952046.1750501572&semt=ais_hybrid&w=740' },
  { name: 'Printed Curtains', image: 'https://img.freepik.com/premium-photo/curtain-isolated-white-background-interior-furniture-3d-illustration-cg-render_375001-11202.jpg?ga=GA1.1.990952046.1750501572&semt=ais_hybrid&w=740' },
  { name: 'Jute Curtains', image: 'https://img.freepik.com/premium-photo/elegant-beige-floral-bird-curtain-cozy-room_694877-4686.jpg?ga=GA1.1.990952046.1750501572&semt=ais_hybrid&w=740' },
  { name: 'Sheer Curtains', image: 'https://img.freepik.com/premium-photo/curtain-isolated-white-background-3d-illustration-cg-render_375001-12181.jpg?ga=GA1.1.990952046.1750501572&semt=ais_hybrid&w=740' },
  { name: 'Readymade Curtains', image: 'https://img.freepik.com/premium-photo/abstract-leaf-print-curtains-home-decor_694877-4691.jpg?ga=GA1.1.990952046.1750501572&semt=ais_hybrid&w=740' },
  { name: 'Readymade sheer', image: 'https://img.freepik.com/premium-photo/white-sheer-dot-curtains_1100672-25299.jpg?ga=GA1.1.990952046.1750501572&semt=ais_hybrid&w=740' },
];

const Curtains = () => {
  return (
    <ProductGrid title="Curtains" items={curtainItems} />
  );
};

export default Curtains; 