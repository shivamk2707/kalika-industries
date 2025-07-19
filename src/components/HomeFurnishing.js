import React from 'react';
import ProductGrid from './ProductGrid';

const homeFurnishingItems = [
  { name: 'Carpets', image: 'https://img.freepik.com/premium-photo/carpets-upholstery_1134661-4200.jpg?ga=GA1.1.990952046.1750501572&semt=ais_hybrid&w=740' },
  { name: 'Floor Mats', image: 'https://img.freepik.com/premium-photo/bath-mats_933597-225.jpg?ga=GA1.1.990952046.1750501572&semt=ais_hybrid&w=740' },
  { name: 'Bed Sheets', image: 'https://img.freepik.com/premium-photo/cozy-baby-cot-with-pink-patchwork-blanket-baby-bedding-bedding-textile-nursery-nap-sleep-time_370028-1140.jpg?ga=GA1.1.990952046.1750501572&semt=ais_hybrid&w=740' },
  { name: 'Bed Covers', image: 'https://img.freepik.com/premium-photo/bed-isolated-white-background-interior-furniture-3d-illustration-cg-render_375001-10324.jpg?ga=GA1.1.990952046.1750501572&semt=ais_hybrid&w=740' },
  { name: 'Dining Linens', image: 'https://plus.unsplash.com/premium_photo-1670869816874-5a22db823d6f?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
  { name: 'Blankets & Comforters', image: 'https://img.freepik.com/premium-photo/close-up-coffee-cup-table-home_1048944-21530684.jpg?ga=GA1.1.990952046.1750501572&semt=ais_hybrid&w=740' },
  { name: 'Cushion / Pillow & Covers', image: 'https://img.freepik.com/premium-photo/bed-isolated-white-background-interior-furniture-3d-illustration-cg-render_375001-10301.jpg?ga=GA1.1.990952046.1750501572&semt=ais_hybrid&w=740' },
  { name: 'Towels', image: 'https://img.freepik.com/premium-photo/close-up-colored-pencils-white-background_1048944-4547293.jpg?ga=GA1.1.990952046.1750501572&semt=ais_hybrid&w=740' },
];

const HomeFurnishing = () => {
  return (
    <ProductGrid title="Home Furnishing Products" description="Comfort meets style in every piece" items={homeFurnishingItems} />
  );
};

export default HomeFurnishing; 