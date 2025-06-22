import React from 'react';
import ProductGrid from './ProductGrid';

const mattressItems = [
  { name: 'Foam Bond', image: 'https://img.freepik.com/premium-photo/white-quilt-fabric-seamless-pattern-background_525160-15061.jpg?ga=GA1.1.990952046.1750501572&semt=ais_hybrid&w=740' },
  { name: 'Ortho Range', image: 'https://img.freepik.com/premium-photo/modern-bed-with-mattress-topper_1378249-68.jpg?ga=GA1.1.990952046.1750501572&semt=ais_hybrid&w=740' },
  { name: 'Dual Support', image: 'https://img.freepik.com/premium-photo/structure-multi-layer-orthopedic-mattress-3d-rendering_578102-1191.jpg?ga=GA1.1.990952046.1750501572&semt=ais_hybrid&w=740' },
  { name: 'Premium Bonnel', image: 'https://img.freepik.com/premium-photo/luxurious-diamond-tufted-upholstery-with-gemstone-accents_525160-15637.jpg?ga=GA1.1.990952046.1750501572&semt=ais_hybrid&w=740' },
];

const Mattresses = () => {
  return (
    <ProductGrid title="Mattresses" items={mattressItems} />
  );
};

export default Mattresses; 