import Hero from "@/components/page-components/Hero";
import Navbar from "@/components/page-components/Navbar";
import Features from "@/components/page-components/Features";
import React from "react";
import Footer from "@/components/page-components/Footer";
import ResourcePreview from "@/components/page-components/ResourcePreview";
const Home = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Features />
      <ResourcePreview />
      <Footer />
    </div>
  );
}

export default Home
