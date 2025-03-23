"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import Image from "next/image";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-300 px-6 py-4",
        scrolled ? "bg-white/80 backdrop-blur shadow-sm" : "bg-transparent"
      )}
    >
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <Link
            href="/"
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
          </Link>

          {/* Desktop */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="nav-link">
              Home
            </Link>
            <Link href="/about" className="nav-link">
              About
            </Link>
            <Link href="/resources" className="nav-link">
              Resources
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
              ? "max-h-96 opacity-100 top-full"
              : "max-h-0 opacity-0 top-[110%]"
          )}
        >
          <div className="flex flex-col space-y-4 pt-2 pb-6">
            <Link
              href="/"
              className="px-2 py-2 hover:text-olympiad-blue transition-colors"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="px-2 py-2 hover:text-olympiad-blue transition-colors"
            >
              About
            </Link>
            <Link
              href="/resources"
              className="px-2 py-2 hover:text-olympiad-blue transition-colors"
            >
              Resources
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
