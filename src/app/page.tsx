"use client";

import Footer from "@/components/footer/Footer";
import Banner from "@/components/homepage/Banner";
import Overview from "@/components/homepage/Overview";
import Testimonial from "@/components/homepage/Testimonial";
import Hero from "@/components/homepage/hero";
import Navbar from "@/components/navbar/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Overview />
      <Banner />
      <Testimonial />
      <Footer />
    </>
  );
}
