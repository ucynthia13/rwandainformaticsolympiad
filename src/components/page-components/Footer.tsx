"use client";

import React from "react";
import Image from "next/image";
import {
  Mail,
  Phone,
  Instagram,
  Linkedin,
  Github,
} from "lucide-react";

const Footer = () => {
  // Function to scroll to a specific section
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      // Close mobile menu if open
      window.scrollTo({
        top: element.offsetTop - 100, // Offset for navbar height
        behavior: "smooth"
      });
    }
  };

  return (
    <footer className="bg-olympiad-navy pt-16 pb-8 text-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <div className="rounded-full overflow-clip">
                <Image
                  src={"/assets/images/rio.jpg"}
                  width={32}
                  height={32}
                  alt="logo"
                  className=""
                />
              </div>
              <span className="text-xl font-semibold">RwIO</span>
            </div>
            <p className="text-gray-300 mb-6">
              Promoting excellence in algorithmic and programming competitions
              within Rwanda.{" "}
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.instagram.com/rwanda_informartics_olympiad/"
                className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors"
                aria-label="Instagram"
                target="_blank"
              >
                <Instagram size={18} />
              </a>
              <a
                href="https://rw.linkedin.com/company/rwanda-informatics-olympiad?trk=public_post_feed-actor-name "
                className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors"
                aria-label="LinkedIn"
                target="_blank"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="https://github.com/rwanda-informatics-olympiad"
                className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors"
                aria-label="GitHub"
                target="_blank"
              >
                <Github size={18} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <button
                  onClick={() => scrollToSection("hero")}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("mission")}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("roadmap")}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Events
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("coaches")}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Team
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Other Resources</h3>
            <ul className="space-y-3">
              <li>
                <button
                  onClick={() => scrollToSection("faq")}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  FAQ
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("team")}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Our Sponsors
                </button>
              </li>
              <li>
                <a href="https://www.linkedin.com/company/rwanda-informatics-olympiad/posts/?feedView=all">
                  <button
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    News
                  </button>
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-olympiad-blue mr-3" />
                <a
                  href="mailto:info@informatics-olympiad.org"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Drop Us an Email
                </a>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-olympiad-blue mr-3" />
                <a
                  href="tel:+250794021594"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Leave Us a Call
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-center items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Rwanda Informatics Olympiad. All
            rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
