"use client"

import React, { useState } from 'react';
import Link from 'next/link';
import { Book, Code, FileText, Award, ChevronRight } from 'lucide-react';

const Resources = () => {
  const [searchTerm] = useState('');
  
  type ResourceColor = 'blue' | 'emerald' | 'purple' | 'amber';

  const resourceCategories: { title: string; icon: JSX.Element; color: ResourceColor; resources: { title: string; description: string; link: string; }[]; }[] = [
    {
      title: "Learning Materials",
      icon: <Book className="h-6 w-6 text-emerald-600" />,
      color: "emerald",
      resources: [
        {
          title: "Introduction to Algorithms",
          description: "A beginner's guide to algorithms.",
          link: "/resources/intro-algorithms",
        },
        {
          title: "Competitive Programming Handbook",
          description: "Comprehensive techniques guide.",
          link: "/resources/cp-handbook",
        },
        {
          title: "Data Structures Guide",
          description: "Essential data structures explained.",
          link: "/resources/data-structures",
        }
      ]
    },
    {
      title: "Practice Problems",
      icon: <Code className="h-6 w-6 text-blue-600" />,
      color: "blue",
      resources: [
        {
          title: "Beginner Problem Set",
          description: "Entry-level problems to practice.",
          link: "/problems/beginner",
        },
        {
          title: "Previous Olympiad Problems",
          description: "Problems from past competitions.",
          link: "/problems/olympiad-archive",
        },
        {
          title: "Weekly Challenges",
          description: "New problems every week.",
          link: "/problems/weekly",
        }
      ]
    },
    {
      title: "Tutorials & Videos",
      icon: <FileText className="h-6 w-6 text-purple-600" />,
      color: "purple",
      resources: [
        {
          title: "Dynamic Programming",
          description: "Comprehensive DP tutorial.",
          link: "/tutorials/dynamic-programming",
        },
        {
          title: "Competition Strategy",
          description: "Approach problems efficiently.",
          link: "/tutorials/competition-strategy",
        },
        {
          title: "C++ for Competitions",
          description: "C++ features for competitions.",
          link: "/tutorials/cpp-for-competitions",
        }
      ]
    },
    {
      title: "Competition Resources",
      icon: <Award className="h-6 w-6 text-amber-600" />,
      color: "amber",
      resources: [
        {
          title: "IOI Syllabus",
          description: "Official competition syllabus.",
          link: "/competition/syllabus",
        },
        {
          title: "Competition Rules",
          description: "Guidelines and regulations.",
          link: "/competition/rules",
        },
        {
          title: "IDE Setup Guide",
          description: "Set up your coding environment.",
          link: "/competition/ide-setup",
        }
      ]
    }
  ];

  // Filter resources based on search term
  const filteredCategories = resourceCategories.map(category => {
    return {
      ...category,
      resources: category.resources.filter(resource => 
        resource.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        resource.description.toLowerCase().includes(searchTerm.toLowerCase())
      )
    };
  }).filter(category => category.resources.length > 0);

  const getColorClasses = (color: 'blue' | 'emerald' | 'purple' | 'amber') => {
    const colorMap = {
      blue: {
        light: "bg-blue-50",
        border: "border-blue-100",
        text: "text-blue-600",
        hover: "hover:border-blue-300",
        iconBg: "bg-blue-100"
      },
      emerald: {
        light: "bg-emerald-50",
        border: "border-emerald-100",
        text: "text-emerald-600",
        hover: "hover:border-emerald-300",
        iconBg: "bg-emerald-100"
      },
      purple: {
        light: "bg-purple-50",
        border: "border-purple-100",
        text: "text-purple-600",
        hover: "hover:border-purple-300",
        iconBg: "bg-purple-100"
      },
      amber: {
        light: "bg-amber-50",
        border: "border-amber-100",
        text: "text-amber-600",
        hover: "hover:border-amber-300",
        iconBg: "bg-amber-100"
      },
    };
    
    return colorMap[color] || colorMap.blue;
  };

  return (
    <section className="py-16 bg-gradient-to-b from-white to-blue-50/20">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-olympiad-navy mb-4">
            Learning Resources
          </h2>
          <div className="h-1 w-20 bg-olympiad-blue mx-auto mb-6"></div>
          <p className="text-olympiad-gray text-sm">
            Access a curated collection of materials to help you prepare for the Rwanda Informatics Olympiad.
          </p>
        </div>

        {/* Resource Categories in Columns - adjusted to fit exactly 4 columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {filteredCategories.map((category, categoryIndex) => {
            const colorClasses = getColorClasses(category.color);
            
            return (
              <div key={categoryIndex} className="flex flex-col h-full">
                {/* Category Header */}
                <div className={`flex items-center gap-3 p-4 rounded-t-lg ${colorClasses.light} ${colorClasses.border} border-b-0`}>
                  <div className={`p-2 rounded-full ${colorClasses.iconBg} flex-shrink-0`}>
                    {category.icon}
                  </div>
                  <h3 className={`font-bold ${colorClasses.text} text-lg`}>
                    {category.title}
                  </h3>
                </div>
                
                {/* Category Resources */}
                <div className={`flex-1 rounded-b-lg ${colorClasses.light} ${colorClasses.border} border-t-0 p-4`}>
                  <div className="space-y-3">
                    {category.resources.map((resource, resourceIndex) => (
                      <Link 
                        href={resource.link} 
                        key={resourceIndex}
                        className={`block rounded-lg p-3 bg-white border border-gray-100 hover:shadow-md transition-all`}
                      >
                        <h4 className={`font-semibold ${colorClasses.text} flex items-center text-base`}>
                          {resource.title}
                          <ChevronRight className="ml-1 h-4 w-4" />
                        </h4>
                        <p className="text-olympiad-gray text-sm mt-1">
                          {resource.description}
                        </p>
                      </Link>
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
};

export default Resources;