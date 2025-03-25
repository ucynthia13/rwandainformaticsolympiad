"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import Image from "next/image";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  const toggleMenu = () => setIsOpen(!isOpen);

  // Navigation items array for section scrolling
  const navItems = [
    { name: "Home", id: "hero" },
    { name: "About", id: "mission" },
    { name: "Eligibility", id: "features" },
    { name: "Timeline", id: "roadmap" },
    { name: "Team", id: "coaches" },
    { name: "Resources", id: "resources" },
    { name: "Partners", id: "team" }
  ];

  useEffect(() => {
    const handleScroll = () => {
      // Handle navbar background change on scroll
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
      
      // Determine which section is currently in view
      const sectionIds = navItems.map(item => item.id);
      let currentSection = sectionIds[0]; // Default to first section
      
      for (const id of sectionIds) {
        const element = document.getElementById(id);
        if (element) {
          const rect = element.getBoundingClientRect();
          // If section is in viewport (with some buffer for navbar)
          if (rect.top <= 150 && rect.bottom >= 150) {
            currentSection = id;
            break;
          }
        }
      }
      
      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [navItems]);

  const scrollToSection = (id: string) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      setActiveSection(id); // Update active section immediately for better UX
      window.scrollTo({
        top: element.offsetTop - 100, // Offset for navbar height
        behavior: "smooth"
      });
    }
  };

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-300 px-6 py-4",
        scrolled ? "bg-white/80 backdrop-blur shadow-sm" : "bg-transparent"
      )}
    >
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <button
            onClick={() => scrollToSection("hero")}
            className="flex items-center space-x-2 font-semibold text-xl"
          >
            <div className="rounded-full overflow-clip">
              <Image
                src={"/assets/images/rio.jpg"}
                width={50}
                height={50}
                alt="logo"
                className=""
              />
            </div>
            <span className="hidden sm:inline text-olympiad-navy">RwIO</span>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <button 
                key={item.name}
                onClick={() => scrollToSection(item.id)}
                className={`relative text-sm font-medium transition-colors cursor-pointer ${
                  activeSection === item.id 
                    ? "text-purple-600" 
                    : "text-olympiad-navy hover:text-olympiad-blue"
                }`}
              >
                {item.name}
                {activeSection === item.id && (
                  <div className="absolute bottom-[-8px] left-0 right-0 h-[3px] bg-purple-600 rounded-full"></div>
                )}
              </button>
            ))}
            
            <Link 
              href="#" 
              className="ml-2 px-4 py-2 bg-olympiad-blue text-white rounded-md font-medium text-sm shadow-sm hover:bg-olympiad-blue/90 transition-all"
            >
              Donate
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-full hover:bg-gray-100 transition-colors"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={cn(
            "md:hidden absolute left-0 right-0 px-6 py-4 bg-white/95 backdrop-blur shadow-lg transition-all duration-300 ease-in-out overflow-hidden",
            isOpen
              ? "max-h-screen opacity-100 top-full"
              : "max-h-0 opacity-0 top-[110%]"
          )}
        >
          <div className="flex flex-col space-y-3 pt-2 pb-6">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.id)}
                className={`px-2 py-2 transition-colors font-medium text-left rounded-md ${
                  activeSection === item.id 
                    ? "text-purple-600 bg-purple-50" 
                    : "text-olympiad-navy hover:text-olympiad-blue"
                }`}
              >
                {item.name}
              </button>
            ))}
            
            <Link
              href="#"
              className="mt-4 px-4 py-3 bg-olympiad-blue text-white rounded-md font-medium text-center"
              onClick={() => setIsOpen(false)}
            >
              Donate
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;