import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Mail,
  MapPin,
  Phone,
  Twitter,
  Facebook,
  Instagram,
  Github,
  ExternalLink,
} from "lucide-react";

const Footer = () => {
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
                href="https://twitter.com"
                className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={18} />
              </a>
              <a
                href="https://facebook.com"
                className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>
              <a
                href="https://instagram.com"
                className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a
                href="https://github.com"
                className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors"
                aria-label="GitHub"
              >
                <Github size={18} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/resources"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Problem Archive
                </Link>
              </li>
              <li>
                <Link
                  href="/team"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Competitors
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Other Resources</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors flex items-center"
                >
                  Rules & Guidelines
                  <ExternalLink className="ml-1 h-3 w-3" />
                </a>
              </li>
              <li>
                <Link
                  href="/faq"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  href="/sponsors"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Our Sponsors
                </Link>
              </li>
              <li>
                <Link
                  href="/news"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  News
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-olympiad-blue mr-3 mt-0.5" />
                <span className="text-gray-300">
                  Rwanda Informatics Olympiad
                  <br />
                  Kgali, Rwanda
                </span>
              </li>
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
                  href="tel:+11234567890"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  One of the coaches's number
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
