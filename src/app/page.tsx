import Hero from "@/components/page-components/Hero";
import Navbar from "@/components/page-components/Navbar";
import ProblemPreview from "@/components/page-components/ProblemPreview";
import Features from "@/components/page-components/Features";
import React from "react";
import Footer from "@/components/page-components/Footer";
const Home = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Features />
      <ProblemPreview />
      <Footer />
    </div>
  );
}

export default Home
