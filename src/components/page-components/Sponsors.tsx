import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Sponsors() {
  const sponsors = [
    {
      name: "Global Talent Fund",
      logo: "/assets/images/gtf.jpg",
    },
    {
      name: "Ministry of ICT & Innovation",
      logo: "/assets/images/minict.png",
    },
    {
      name: "AIMS Rwanda",
      logo: "/assets/images/aims.jpeg",
    },

    {
      name: "Hence Technologies",
      logo: "/assets/images/hence.png",
    },
    
    {
      name: "Ministry of Education",
      logo: "/assets/images/minict.png",
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-white to-olympiad-blue-50" id="sponsors">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-olympiad-navy mb-4">
            Champions of Young Talent
          </h2>
          <div className="h-1 w-20 bg-olympiad-blue mx-auto mb-6"></div>
          <p className="text-olympiad-gray">
            Rwanda Informatics Olympiad is proudly supported by leading
            technology companies and educational institutions committed to
            nurturing young talent. These organizations make the Rwanda
            Informatics Olympiad possible through their generous support.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-8">
          {sponsors.map((sponsor, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center"
            >
              <div className="bg-white rounded-full shadow-sm hover:shadow-md w-24 h-24 relative p-6 mb-3 overflow-clip">
                <Image
                  src={sponsor.logo}
                  alt={sponsor.name}
                  className="object-contain"
                  fill
                />
              </div>
              <div className="text-olympiad-navy text-sm text-center">
                {sponsor.name}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="#"
            className="items-center justify-center px-6 py-3 bg-olympiad-blue text-white rounded-full "
          >
            Become a Sponsor
          </Link>
        </div>
      </div>
    </section>
  );
}
