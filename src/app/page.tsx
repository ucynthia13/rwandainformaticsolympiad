import React from "react";
import Hero from "@/components/page-components/Hero";
import Navbar from "@/components/page-components/Navbar";
import Features from "@/components/page-components/Eligibility";
import Footer from "@/components/page-components/Footer";
import Team from "@/components/page-components/Sponsors";
import Coaches from "@/components/page-components/Team";
import Resources from "@/components/page-components/Resources";
import RoadMap from "@/components/page-components/Roadmap";
import Mission from "@/components/page-components/mission";
const Home = () => {
  return (
  <div className="min-h-screen bg-white">
    <Navbar />
    <div id="hero"><Hero /></div>
    <div id="mission"><Mission/></div>
    <div id="features"><Features /></div>
    <div id="roadmap"><RoadMap /></div>
    <div id="coaches"><Coaches /></div>
    <div id="resources"><Resources /></div>
    <div id="team"><Team /></div>
    <Footer />
  </div>
  );
}

export default Home
