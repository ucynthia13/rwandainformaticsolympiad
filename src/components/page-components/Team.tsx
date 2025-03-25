"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Linkedin, Mail } from "lucide-react";

const Team = () => {
  const teamMembers = [
    {
      name: "Obed Nsanzimfura",
      role: "Rwanda Informatics Olympiad Manager",
      image: "/assets/images/obed.jpeg",
      socials: {
        linkedin: "https://linkedin.com/in/nsanzimfuraobed",
        email: "obed.n@olympiad.rw",
      },
    },
    {
      name: "Hirwa Arnold",
      role: "Head Coach",
      image: "/assets/images/coaches/coach1.jpg",
      socials: {
        linkedin: "https://linkedin.com/in/hirwaarnold",
        email: "arnold.h@olympiad.rw",
      },
    },

    {
      name: "Kagaba Etienne",
      role: "Technical Coach",
      image: "/assets/images/kagaba.jpeg",
      socials: {
        linkedin: "https://linkedin.com/in/kagabaetienne",
        email: "etienne.k@olympiad.rw",
      },
    },
    {
      name: "Afsa Umutoniwase",
      role: "Competition Coordinator",
      image: "/assets/images/Afsa.jpg",
      socials: {
        linkedin: "https://linkedin.com/in/afsa-umutoniwase-720952278/",
        email: "a.umutoniwa@alustudent.com",
      },
    },
    {
      name: "Niyogisubizo Jehovanis",
      role: "Algorithms Specialist",
      image: "/assets/images/coaches/coach5.jpg",
      socials: {
        linkedin: "https://linkedin.com/in/niyogisubizojehovanis",
        email: "jehovanis.n@olympiad.rw",
      },
    },
    {
      name: "Hakim Nshyimiyimana",
      role: "Data Structures Coach",
      image: "/assets/images/coaches/coach6.jpg",
      socials: {
        linkedin: "https://linkedin.com/in/hakimnshyimiyimana",
        email: "hakim.n@olympiad.rw",
      },
    },
    {
      name: "Ishimwe Frank",
      role: "Programming Instructor",
      image: "/assets/images/coaches/coach1.jpg",
      socials: {
        linkedin: "https://linkedin.com/in/ishimwefrank",
        email: "frank.i@olympiad.rw",
      },
    },
    {
      name: "Sezikeye Jado Fils",
      role: "Junior Coach",
      image: "/assets/images/coaches/coach2.jpg",
      socials: {
        linkedin: "https://linkedin.com/in/sezikeye",
        email: "jado.s@olympiad.rw",
      },
    },
    {
      name: "Niyokwizera Jean D'Amour",
      role: "Technical Trainer",
      image: "/assets/images/coaches/coach3.jpg",
      socials: {
        linkedin: "https://linkedin.com/in/niyokwizerajean",
        email: "jean.n@olympiad.rw",
      },
    },

    {
      name: "Cynthia Umwali",
      role: "Student Mentor",
      image: "/assets/images/cynthia.png",
      socials: {
        linkedin: "https://linkedin.com/in/cynthiaumwalii",
        email: "cynthia.u@olympiad.rw",
      },
    },
  ];

  return (
    <section className="py-16" id="team">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-olympiad-navy mb-4">
            Our Team
          </h2>
          <div className="h-1 w-20 bg-olympiad-blue mx-auto mb-6"></div>
          <p className="text-olympiad-gray max-w-sm mx-auto">
          Meet the team leading Rwanda's international informatics competitions.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all border border-gray-100 flex flex-col"
            >
              <div className="aspect-square relative">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-3 flex flex-col justify-between flex-1">
                <div>
                  <h3 className="text-base font-bold text-olympiad-navy">
                    {member.name}
                  </h3>
                  <p className="text-olympiad-blue font-medium text-xs">
                    {member.role}
                  </p>
                </div>

                <div className="flex items-center space-x-3 mt-2">
                  {member.socials.linkedin && (
                    <Link
                      href={member.socials.linkedin}
                      className="text-gray-500 hover:text-olympiad-blue transition-colors"
                    >
                      <Linkedin size={16} />
                    </Link>
                  )}
                  {member.socials.email && (
                    <Link
                      href={`mailto:${member.socials.email}`}
                      className="text-gray-500 hover:text-olympiad-blue transition-colors"
                    >
                      <Mail size={16} />
                    </Link>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
