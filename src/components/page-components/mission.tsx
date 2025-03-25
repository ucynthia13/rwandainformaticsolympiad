import React from 'react';
import { 
  History, 
  Target, 
  LightbulbIcon, 
  Award,
  Code, 
  GraduationCap,
  Globe,
  Users
} from 'lucide-react';

export default function Mission() {
  const cards = [
    {
      title: "Our History",
      description: "The Rwanda Informatics Olympiad began in 2023 as a visionary initiative to cultivate computational thinking and programming excellence among Rwandan students. From a grassroots movement with just 8 schools, we've grown to a nationwide program reaching over 20 schools across Rwanda.",
      icon: <History className="h-6 w-6 text-emerald-600" />,
      color: "emerald",
      highlights: ["Founded in 2023", "From 8 to 20+ schools", "National recognition"]
    },
    {
      title: "Our Mission",
      description: "We identify and nurture talented young programmers across Rwanda, providing them with world-class training in algorithms, data structures, and problem-solving. Through structured competitions and camps, we prepare students to excel in international informatics olympiads and beyond.",
      icon: <Target className="h-6 w-6 text-blue-600" />,
      color: "blue",
      highlights: ["Identify talent", "Provide world-class training", "Compete internationally"]
    },
    {
      title: "Our Vision",
      description: "We envision Rwanda as a recognized center of excellence in informatics education, where computational thinking is embedded in every school. Our students will not only represent Rwanda on the global stage but become leaders in technological innovation and digital transformation.",
      icon: <LightbulbIcon className="h-6 w-6 text-amber-600" />,
      color: "amber",
      highlights: ["National excellence", "Global representation", "Tech leadership"]
    },
    {
      title: "Core Values",
      description: "Excellence in all we do. Collaboration across institutions. Inclusivity for all talented students regardless of background. Innovation in our approaches. Impact that extends beyond competitions to real-world applications.",
      icon: <Award className="h-6 w-6 text-purple-600" />,
      color: "purple",
      highlights: ["Excellence", "Collaboration", "Inclusivity", "Innovation", "Impact"]
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap: {[key: string]: {bg: string, border: string, text: string, iconBg: string, lightBg: string}} = {
      emerald: {
        bg: "bg-emerald-600",
        border: "border-emerald-200",
        text: "text-emerald-700",
        iconBg: "bg-emerald-100",
        lightBg: "from-emerald-50 to-emerald-100/30"
      },
      blue: {
        bg: "bg-blue-600",
        border: "border-blue-200",
        text: "text-blue-700",
        iconBg: "bg-blue-100",
        lightBg: "from-blue-50 to-blue-100/30"
      },
      amber: {
        bg: "bg-amber-600",
        border: "border-amber-200",
        text: "text-amber-700",
        iconBg: "bg-amber-100",
        lightBg: "from-amber-50 to-amber-100/30"
      },
      purple: {
        bg: "bg-purple-600",
        border: "border-purple-200",
        text: "text-purple-700",
        iconBg: "bg-purple-100",
        lightBg: "from-purple-50 to-purple-100/30"
      }
    };
    
    return colorMap[color] || colorMap.blue;
  };

  return (
    <section className="py-16 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute -top-24 -left-24 w-64 h-64 bg-blue-50 rounded-full opacity-70 blur-3xl"></div>
      <div className="absolute -bottom-32 -right-32 w-80 h-80 bg-purple-50 rounded-full opacity-70 blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-sm uppercase tracking-wider text-olympiad-blue font-semibold mb-3">Who We Are</h2>
          <h1 className="text-3xl md:text-4xl font-bold text-olympiad-navy mb-6">
            Building Rwanda's Future in Informatics
          </h1>
          <div className="h-1 w-24 bg-olympiad-blue mx-auto mb-6"></div>
          <p className="text-olympiad-gray text-lg">
            The Rwanda Informatics Olympiad is dedicated to discovering and nurturing 
            talented young programmers who will represent our nation on the global stage.
          </p>
        </div>
        
        {/* Mission Icons Row */}
        <div className="hidden lg:flex justify-center mb-12 gap-16">
          {[
            { icon: <Code className="h-6 w-6" />, text: "Programming Excellence" },
            { icon: <GraduationCap className="h-6 w-6" />, text: "Educational Impact" },
            { icon: <Globe className="h-6 w-6" />, text: "Global Competition" },
            { icon: <Users className="h-6 w-6" />, text: "Community Building" }
          ].map((item, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="w-14 h-14 rounded-full bg-olympiad-blue/10 flex items-center justify-center mb-3">
                <div className="w-10 h-10 rounded-full bg-olympiad-blue flex items-center justify-center text-white">
                  {item.icon}
                </div>
              </div>
              <p className="font-medium text-olympiad-navy text-sm">{item.text}</p>
            </div>
          ))}
        </div>
        
        {/* Cards in a single row with responsive adjustments */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
          {cards.map((card, index) => {
            const colorClasses = getColorClasses(card.color);
            
            return (
              <div 
                key={index} 
                className={`rounded-xl overflow-hidden shadow-md border ${colorClasses.border} transition-all duration-300 hover:shadow-xl h-full flex flex-col`}
              >
                <div className={`h-2 ${colorClasses.bg}`}></div>
                <div className={`p-4 sm:p-5 bg-gradient-to-br ${colorClasses.lightBg} flex-1 flex flex-col`}>
                  {/* Header with icon */}
                  <div className="flex items-center mb-3">
                    <div className={`p-2 rounded-lg ${colorClasses.iconBg} mr-3`}>
                      {card.icon}
                    </div>
                    <h3 className={`text-xl font-bold ${colorClasses.text}`}>
                      {card.title}
                    </h3>
                  </div>
                  
                  {/* Main content */}
                  <p className="text-olympiad-gray text-sm mb-4 flex-1">
                    {card.description}
                  </p>
                  
                  {/* Highlights */}
                  <div className="flex flex-wrap gap-1 mt-auto">
                    {card.highlights.map((highlight, i) => (
                      <span 
                        key={i}
                        className={`text-xs font-medium px-2 py-0.5 rounded-full bg-white/60 ${colorClasses.text} border ${colorClasses.border}`}
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}