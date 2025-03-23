import React from "react";
import Image from "next/image";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Link from "next/link";
import {
  Calendar,
  Users,
  Award,
  Globe,
  ArrowRight,
  Pin,
  Eye,
  Handshake,
  School,
  Check,
  TriangleAlert,
} from "lucide-react";

const About = () => {

  const olympiadHistory = [
    {
      year: "1989",
      title: "First International Olympiad",
      description:
        "The inaugural International Informatics Olympiad was held with 13 participating countries.",
    },
    {
      year: "1995",
      title: "Growing Recognition",
      description:
        "The competition expanded to include 40 countries from all continents.",
    },
    {
      year: "2005",
      title: "Digital Transformation",
      description:
        "Introduction of the online judging system and problem archive.",
    },
    {
      year: "2010",
      title: "Educational Impact",
      description:
        "Launch of educational initiatives to support programming education worldwide.",
    },
    {
      year: "2020",
      title: "Virtual Competition",
      description:
        "First fully virtual Olympiad due to global circumstances, with record participation.",
    },
    {
      year: "2023",
      title: "Modern Era",
      description:
        "The competition now includes over 90 countries and continues to grow.",
    },
  ];

  const sponsors = [
    {
      name: "Sponsor",
      logo: "https://image/spnsor",
      type: "Platinum Sponsor",
    },
    {
      name: "Sponsor",
      logo: "https://image/spnsor",
      type: "Platinum Sponsor",
    },
    {
      name: "Sponsor",
      logo: "https://image/spnsor",
      type: "Platinum Sponsor",
    },
    {
      name: "Sponsor",
      logo: "https://image/spnsor",
      type: "Platinum Sponsor",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <div className="pt-24 pb-20">
        <div className="container mx-auto px-6">
          <div className="mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-olympiad-navy mb-4">
              About RwIO
            </h1>
            <div className="h-1 w-16 bg-olympiad-blue mb-6"></div>

          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div>
              <div className="glass-card rounded-lg p-8">
                <div>
                  <h2 className="text-2xl font-bold text-olympiad-navy mb-4">
                    Our Mission
                  </h2>
                  <div className="flex items-start gap-2">
                    <div className="bg-blue-100 rounded-full p-2 mr-4 mt-1">
                      <Pin className="h-5 w-5 text-olympiad-blue" />
                    </div>
                    <p className="text-olympiad-gray mb-6">
                      Our mission is to identify and empower talented Rwandan
                      students in competitive programming and data structures,
                      providing them with the necessary skills to excel in
                      national and international informatics competitions.
                    </p>
                  </div>
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-olympiad-navy mb-4">
                    Our Vision
                  </h2>
                  <div className="flex items-start gap-2">
                    <div className="bg-blue-100 rounded-full p-2 mr-4 mt-1">
                      <Eye className="h-5 w-5 text-olympiad-blue" />
                    </div>
                    <p className="text-olympiad-gray mb-6">
                      We envision Rwanda as a center of excellence in
                      informatics, fostering technological innovation and
                      advancement globally, by creating opportunities for
                      talented individuals to thrive.
                    </p>
                  </div>
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-olympiad-navy mb-4">
                    Core Values
                  </h2>
                  <div className="flex items-start gap-2">
                    <div className="bg-blue-100 rounded-full p-2 mr-4 mt-1">
                      <Handshake className="h-5 w-5 text-olympiad-blue" />
                    </div>
                    <p className="text-olympiad-gray mb-6">
                      At RwIO, we value excellence, collaboration, education, and
                      impact. We set high standards, encourage teamwork, provide
                      quality education, and strive to positively influence
                      Rwandan youth and society.
                    </p>
                  </div>
                </div>
              </div>

              <div className="glass-card rounded-lg p-8 mt-8">
                <h2 className="text-2xl font-bold text-olympiad-navy mb-4">
                  Eligibility
                </h2>
                <p className="text-olympiad-gray mb-6">
                  The Rwanda Informatics Olympiad (RwIO) is open to all high
                  school students across Rwanda, regardless of their school
                  affiliation. There is no lower age limit for participation.
                  However, the following conditions apply:
                </p>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="bg-blue-100 rounded-full p-2 mr-4 mt-1">
                      <School className="h-5 w-5 text-olympiad-blue" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-olympiad-navy">
                        Eligible students:
                      </h3>
                      <p className="text-olympiad-gray">
                        Students be enrolled in high school as of academic year
                        2024-2025.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-green-100 rounded-full p-2 mr-4 mt-1">
                      <Check className="h-5 w-5 text-green-300" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-olympiad-navy">
                        No Age restrictions:
                      </h3>
                      <p className="text-olympiad-gray">
                        There's no minimum age for participating in RwIO.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-orange-100 rounded-full p-2 mr-4 mt-1">
                      <TriangleAlert className="h-5 w-5 text-orange-300" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-olympiad-navy">
                        Ineligible Students:
                      </h3>
                      <p className="text-olympiad-gray">
                        Students who are no longer enrolled in high school, even
                        if they plan to retake high school exams or are not
                        pursuing further education.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="glass-card rounded-lg p-8 mt-8">
                <h2 className="text-2xl font-bold text-olympiad-navy mb-4">
                  Competition Format
                </h2>
                <p className="text-olympiad-gray mb-6">
                  The Informatics Olympiad is a competitive programming contest
                  for secondary school students. Here's the flow of the
                  competition:
                </p>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="bg-blue-100 rounded-full p-2 mr-4 mt-1">
                      <Calendar className="h-5 w-5 text-olympiad-blue" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-olympiad-navy">
                        Annual Event
                      </h3>
                      <p className="text-olympiad-gray">
                        Held once a year with national selection rounds leading
                        up to the international competition
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-blue-100 rounded-full p-2 mr-4 mt-1">
                      <Users className="h-5 w-5 text-olympiad-blue" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-olympiad-navy">
                        Team Structure
                      </h3>
                      <p className="text-olympiad-gray">
                        Countries send teams of up to four secondary school
                        students with one team leader
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-blue-100 rounded-full p-2 mr-4 mt-1">
                      <Award className="h-5 w-5 text-olympiad-blue" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-olympiad-navy">
                        Medals & Recognition
                      </h3>
                      <p className="text-olympiad-gray">
                        Gold, silver, and bronze medals awarded based on
                        performance, with special awards for innovative
                        solutions
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-blue-100 rounded-full p-2 mr-4 mt-1">
                      <Globe className="h-5 w-5 text-olympiad-blue" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-olympiad-navy">
                        Host Country
                      </h3>
                      <p className="text-olympiad-gray">
                        Hosted by a different country each year, promoting
                        cultural exchange alongside technical excellence
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="glass-card rounded-lg p-8 mb-8">
                <h2 className="text-2xl font-bold text-olympiad-navy mb-6">
                  A bit of IO's History
                </h2>
                <div className="relative">
                  <div className="absolute top-0 bottom-0 left-5 border-l-2 border-dashed border-blue-200"></div>
                  <div className="space-y-8">
                    {olympiadHistory.map((history, index) => (
                      <div key={index} className="relative flex items-start">
                        <div className="absolute left-0 mt-1">
                          <div className="bg-olympiad-blue rounded-full w-11 h-11 flex items-center justify-center text-white font-bold text-[13px]">
                            {history.year}
                          </div>
                        </div>
                        <div className="ml-20">
                          <h3 className="font-semibold text-olympiad-navy text-lg">
                            {history.title}
                          </h3>
                          <p className="text-olympiad-gray">
                            {history.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="glass-card rounded-lg p-8">
                <h2 className="text-2xl font-bold text-olympiad-navy mb-4">
                  Our Sponsors
                </h2>
                <p className="text-olympiad-gray mb-6">
                  Rwanda Informatics Olympiad is supported by dedicated leading
                  technology companies and educational institutions.
                </p>
                <div className="grid grid-cols-2 gap-6">
                  {sponsors.map((sponsor, index) => (
                    <div
                      key={index}
                      className="bg-white rounded-lg p-4 border border-gray-100 text-center"
                    >
                      <Image
                        src={sponsor.logo}
                        alt={sponsor.name}
                        className="mx-auto mb-3 h-12 object-contain"
                        width={80}
                        height={80}
                      />
                      <div className="font-medium text-olympiad-navy">
                        {sponsor.name}
                      </div>
                      <div className="text-sm text-olympiad-gray">
                        {sponsor.type}
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-6 text-center">
                  <Link
                    href="/sponsors"
                    className="inline-flex items-center text-olympiad-blue hover:text-olympiad-darkBlue"
                  >
                    View all sponsors
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="glass-card rounded-lg p-8 md:p-10 bg-gradient-to-r from-olympiad-navy to-olympiad-darkBlue text-white">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
              <div className="md:col-span-2">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">
                  Want to support this year's Olympiad?
                </h2>
                <p className="mb-6">
                  Join our a journey to inspire the next generation of
                  olympiads. We offer various sponsorship opportunities and ways
                  to get involved.
                </p>
                <Link
                  href="/sponsors/become"
                  className="btn bg-white text-olympiad-navy hover:bg-white/90 px-6 py-3 rounded-full"
                >
                  Become a Sponsor
                </Link>
              </div>
              <div className="hidden md:block">
                <Image
                  src="#"
                  alt="Sponsor"
                  className="rounded-lg shadow-lg max-w-full"
                  width={80}
                  height={80}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default About;
