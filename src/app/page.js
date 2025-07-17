import React from 'react'
import Header from "@/components/Header";
import Furniture from "@/components/Furniture";
import PromoBanner from "@/components/PromoBanner";
import HomeFurnishing from "@/components/HomeFurnishing";
import Curtains from "@/components/Curtains";
import WindowBlinds from "@/components/WindowBlinds";
import Mattresses from "@/components/Mattresses";
import OtherProducts from "@/components/OtherProducts";
import AboutUs from "@/components/AboutUs";
import WhyUs from "@/components/WhyUs";
import Gallery from "@/components/Gallery";
import Videos from "@/components/Videos";
import TestimonialSlider from "@/components/TestimonialSlider";
import ContactUs from "@/components/ContactUs";
import Map from "@/components/Map";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="pt-32 lg:pt-40">
      <Header />
      <Furniture />
      <PromoBanner />
      <HomeFurnishing />
      <Curtains />
      <WindowBlinds />
      <Mattresses />
      <OtherProducts />
      <AboutUs />
      {/* <WhyUs /> */}
      <Gallery />
      <Videos />
      <TestimonialSlider />
      <ContactUs />
      <Map />
      <Footer />
    </main>
  );
}