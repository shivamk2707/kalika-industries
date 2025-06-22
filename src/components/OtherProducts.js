import React from 'react';
import ProductGrid from './ProductGrid';

const otherProductItems = [
  { name: 'Artificial Flower', image: 'https://img.freepik.com/free-photo/orchid-flowers-isolated-white-space_268835-1192.jpg?ga=GA1.1.990952046.1750501572&semt=ais_hybrid&w=740' },
  { name: 'Bonsai', image: 'https://img.freepik.com/premium-photo/five-needle-pine-bonsai-with-white-background_631068-1305.jpg?ga=GA1.1.990952046.1750501572&semt=ais_hybrid&w=740' },
  { name: 'Figurines', image: 'https://images.unsplash.com/photo-1717943027504-7154a9df03a0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fEZpZ3VyaW5lc3xlbnwwfDJ8MHx8fDA%3D' },
  { name: 'Showpiece', image: 'https://img.freepik.com/premium-photo/kitchen-decorative-wall-white-background-set-wall-tiles_1072903-75.jpg?ga=GA1.1.990952046.1750501572&semt=ais_hybrid&w=740' },
  { name: 'Vase', image: 'https://img.freepik.com/free-photo/calathea-plant-gray-pot_53876-133131.jpg?ga=GA1.1.990952046.1750501572&semt=ais_hybrid&w=740' },
];

const OtherProducts = () => {
  return (
    <ProductGrid title="Other Products" items={otherProductItems} />
  );
};

export default OtherProducts; 