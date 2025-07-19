import React from 'react'
import Header from "@/components/Header";
import Furniture from "@/components/Furniture";
import HomeFurnishing from "@/components/HomeFurnishing";
import WindowBlinds from "@/components/WindowBlinds";
import AboutUs from "@/components/AboutUs";
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
      <HomeFurnishing />
      <WindowBlinds />
      <AboutUs />
      <Gallery />
      <Videos />
      <TestimonialSlider />
      <ContactUs />
      <Map />
      <Footer />
    </main>
  );
}
