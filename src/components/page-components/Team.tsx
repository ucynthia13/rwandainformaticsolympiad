"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Linkedin, Mail } from "lucide-react";

const Team = () => {
  const teamMembers = [
    {
      name: "Jose Esperazano",
      role: "Country Coordinator",
      image: "/assets/images/jose_1.jpg",
      socials: {
        linkedin: "/",
        email: "josealanesparza@gmail.com",
      },
    },
    {
      name: "Arun shanmuganathan",
      role: "Olympiad Advisor",
      image: "/assets/images/arun.jpeg",
      socials: {
        linkedin: "https://www.linkedin.com/in/arun-shanmuganathan-6ba86062/",
        email: "shan.arun@gmail.com",
      },
    },
    {
      name: "Joel Lee",
      role: "Coach & Technical Advisor",
      image: "/assets/images/joel.jpeg",
      socials: {
        linkedin: "https://www.linkedin.com/in/j0el/?original_referer=https%3A%2F%2Fwww%2Egoogle%2Ecom%2F&originalSubdomain=sg",
        email: "kosbekokos@gmail.com",
      },
    },
    {
      name: "Obed Nsanzimfura",
      role: "Olympiad Manager",
      image: "/assets/images/obed.jpeg",
      socials: {
        linkedin: "https://www.linkedin.com/in/obed-nsanzimfura/",
        email: "senga.obed@gmail.com",
      },
    },
    {
      name: "Hirwa Arnold",
      role: "Algorithms",
      image: "/assets/images/arnold.jpeg",
      socials: {
        linkedin: "https://www.linkedin.com/in/hirwa-arnold-7464bb229/",
        email: "arnold.hirw@gmail.com",
      },
    },

    {
      name: "Kagaba Etienne",
      role: "Data Structures",
      image: "/assets/images/kagaba.jpeg",
      socials: {
        linkedin: "https://linkedin.com/in/kagabaetienne",
        email: "kagabaetienne04@gmail.com",
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
      role: "Algorithmic Complexity",
      image: "/assets/images/jehovanis.jpeg",
      socials: {
        linkedin: "https://www.linkedin.com/in/johovanis/",
        email: "gisubizo.jovan@gmail.com",
      },
    },
    {
      name: "Hakim Nshyimiyimana",
      role: "Advanced Data Structures",
      image: "/assets/images/hakim.jpg",
      socials: {
        linkedin: "https://www.linkedin.com/in/hakim-nshimiyimana-b767412ba/",
        email: "nshimiyimanahakim7@gmail.com",
      },
    },
    {
      name: "Norbert Ndayisenga",
      role: "Communications & Outreach",
      image: "/assets/images/norbert.jpeg",
      socials: {
        linkedin: "https://www.linkedin.com/in/ndayisenganorbert/",
        email: "norbertndayisenga@gmail.com",
      },
    },
    {
      name: "Ishimwe Frank",
      role: "Dynamic Programming",
      image: "/assets/images/frank.jpeg",
      socials: {
        linkedin: "https://www.linkedin.com/in/frank-ishimwe-2634ba284/",
        email: "ishimwefrank147@gmail.com",
      },
    },
    {
      name: "Sezikeye Jado Fils",
      role: "Graph Algorithms",
      image: "/assets/images/jado.jpeg",
      socials: {
        linkedin: "#",
        email: "jasezikeye50@gmail.com",
      },
    },
    {
      name: "Niyokwizera Jean D'Amour",
      role: "Computational Geometry",
      image: "/assets/images/brojeid.jpg",
      socials: {
        linkedin: "#",
        email: "niyokwizerajd123@gmail.com",
      },
    },

    {
      name: "Cynthia Umwali",
      role: "Problem Design",
      image: "/assets/images/cynthia.png",
      socials: {
        linkedin: "https://linkedin.com/in/cynthiaumwalii",
        email: "cynthiaaa877@gmail.com",
      },
    },
    {
      name: "Kelly Irakoze Ntawigenga",
      role: "Problem Design",
      image: "/assets/images/kelly.jpeg",
      socials: {
        linkedin: "https://www.linkedin.com/in/irakoze-ntawigenga-kelly-bb194a287/",
        email: "irakozekelly41@gmail.com",
      },
    },
  ];

  return (
    <section className="py-16" id="team">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-olympiad-navy mb-6">
            Our Team
          </h2>
          <div className="h-1 w-20 bg-olympiad-blue mx-auto mb-6"></div>
          <p className="text-olympiad-gray max-w-md mx-auto text-lg">
          Meet the team leading Rwanda&apos;s international informatics competitions.
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
