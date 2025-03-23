import React from "react";
import { Users, Award, Calendar } from "lucide-react";
import { cn } from "@/lib/utils";

const Features = () => {
  const stages = [
    {
      icon: <Calendar className="h-8 w-8 text-olympiad-blue" />,
      title: "A Pen-and-Paper Exam",
      description:
        "The first stage, scheduled for late-November, involves a nationwide pen-and-paper exam, accessible to all high school students, with no computer access required.",
    },
    {
      icon: <Users className="h-8 w-8 text-purple-500" />,
      title: "Informatics Camp",
      description:
        "In December, an informatics camp will be held, focusing on advanced topics like algorithms, data structures, and competition techniques, guided by experienced trainers.",
    },
    {
      icon: <Award className="h-8 w-8 text-amber-400" />,
      title: "Final Round & Recognition",
      description:
        "At the end of the camp, a computer-based final round will take place. Winners will be awarded and preselected for future informatics competitions.",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-olympiad-navy mb-4">
            Stages to Selection
          </h2>
          <div className="h-1 w-20 bg-olympiad-blue mx-auto mb-6"></div>
          <p className="text-olympiad-gray text-lg">
            Rwanda Informatics Olympiad (RwIO) aims to promote excellence in
            algorithmic and programming competitions in Rwanda. It identifies
            and celebrates students with exceptional skills, preparing them to
            represent Rwanda at the International Olympiad in Informatics (IOI).
            RwIO Consists of the followings stages:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stages.map((stage, index) => (
            <div
              key={index}
              className="glass-card rounded-lg p-6 shadow-sm hover:shadow-lg"
            >
              <div className="bg-gray-50 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                {stage.icon}
              </div>
              <h3 className="text-xl font-semibold text-olympiad-navy mb-3">
                {stage.title}
              </h3>
              <p className="text-olympiad-gray mb-4">{stage.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
