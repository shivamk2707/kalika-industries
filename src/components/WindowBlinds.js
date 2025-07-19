import React from 'react';
import ProductGrid from './ProductGrid';

const blindItems = [
  { name: 'Roller', image: 'https://img.freepik.com/premium-photo/wood-kitchen-table-room-window_476263-65.jpg?ga=GA1.1.990952046.1750501572&semt=ais_hybrid&w=740' },
  { name: 'Pattern', image: 'https://img.freepik.com/premium-photo/curtain-isolated-white-background-3d-illustration-cg-render_375001-11347.jpg?ga=GA1.1.990952046.1750501572&semt=ais_hybrid&w=740' },
  { name: 'Vertical', image: 'https://img.freepik.com/premium-photo/curtain-isolated-white-background-interior-decorations-3d-illustration-cg-render_375001-16367.jpg?ga=GA1.1.990952046.1750501572&semt=ais_hybrid&w=740' },
  { name: 'Zebra', image: 'https://img.freepik.com/premium-photo/full-frame-shot-building_1048944-781873.jpg?ga=GA1.1.990952046.1750501572&semt=ais_hybrid&w=740' },
  { name: 'Wooden', image: 'https://img.freepik.com/free-photo/minimal-empty-room-with-windows-authentic-interior-design_53876-126785.jpg?ga=GA1.1.990952046.1750501572&semt=ais_hybrid&w=740' },
  { name: 'Bamboo', image: 'https://img.freepik.com/free-photo/top-view-bamboo-mat_23-2148202113.jpg?ga=GA1.1.990952046.1750501572&semt=ais_hybrid&w=740' },
];

const WindowBlinds = () => {
  return (
    <ProductGrid title="Window Blinds" description="Modern blinds for light control and sleek design" items={blindItems} />
  );
};

export default WindowBlinds; 