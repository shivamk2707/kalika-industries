'use client';

import React from 'react';
import Furniture from "@/components/Furniture";
import HomeFurnishing from "@/components/HomeFurnishing";
import AboutUs from "@/components/AboutUs";
import Videos from "@/components/Videos";
import ContactUs from "@/components/ContactUs";
import Map from "@/components/Map";
import Footer from "@/components/Footer";
import ManufacturingSection from '@/components/ManufacturingSection';

export default function Home() {
  return (
    <main className="pt-32 lg:pt-40">
      <Furniture />
      <HomeFurnishing />
      <AboutUs />
      <Videos />
    </main>
  );
}
