"use client";

import React, { useEffect, useRef } from "react";
import { Brain, Trophy, Code } from "lucide-react";
import Link from "next/link";
import Prism from "prismjs";

const Hero = () => {
  useEffect(() => {
    Prism.highlightAll();
  }, []);

  return (
    <div className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-gradient-to-b from-white to-blue-50">
      <div className="absolute inset-0 bg-code-pattern opacity-10"></div>
      <div className="container mx-auto px-6 pt-24 pb-16 md:pt-32 md:pb-24 relative z-10">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0 animate-fade-in">
            <div className="max-w-xl">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-olympiad-navy leading-loose">
                Rwanda's 
                <span className="text-olympiad-blue bg-gradient-to-r from-olympiad-blue to-olympiad-blue/60 bg-clip-text text-transparent"> First </span>
                Informatics Olympiad
              </h1>

              <p className="mt-8 text-lg text-olympiad-gray">
                Join Rwanda's first informatics competition for high schoolers,
                encouraging problem-solving skills and innovation in
                programming, designed for young enthusiasts aged 20 and below.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <Link href="/register" className="btn-primary rounded-full">
                  School Registration
                </Link>
                <Link href="/resources" className="btn-outline rounded-full">
                  Explore Problems
                </Link>
              </div>

              <div className="mt-10 grid grid-cols-3 gap-4">
                <div className="flex items-center space-x-2 text-olympiad-gray">
                  <Brain className="h-6 w-6 text-olympiad-blue" />
                  <span>Strategic Thinking</span>
                </div>
                <div className="flex items-center space-x-2 text-olympiad-gray">
                  <Code className="h-6 w-6 text-olympiad-blue" />
                  <span>Coding Excellence</span>
                </div>
                <div className="flex items-center space-x-2 text-olympiad-gray">
                  <Trophy className="h-6 w-6 text-olympiad-blue" />
                  <span>Global Recognition</span>
                </div>
              </div>
            </div>
          </div>

          <div className="md:w-1/2 flex justify-center md:justify-end animate-fade-in">
            <div className="glass-card p-6 rounded-lg shadow-xl max-w-md w-full transform hover:translate-y-[-5px] transition-transform duration-300">
              <div className="bg-olympiad-navy rounded-md p-4 overflow-hidden">
                <div className="flex items-center mb-4">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <div className="ml-4 text-xs text-gray-400 font-mono">
                    main.cpp
                  </div>
                </div>

                <pre className="language-javascript font-mono text-sm leading-relaxed text-gray-100">
                  <code>
                    {`function solveOlympiad(p) {
  // Analyze the problem
   const cons = p.getConstraints();
  const inpt = p.getInput();
    
  // Develop an algorithm
  const sol = analyze(inpt, cons);
    
  // Optimize and test
  return optimize(sol);
}`}
                  </code>
                </pre>
              </div>

              <div className="mt-4 text-center">
                <div className="text-olympiad-navy font-semibold">
                  Ready to solve algorithmic challenges?
                </div>
                <div className="text-sm text-olympiad-gray mt-1">
                  Practice with our resources
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="separator absolute bottom-0 left-0 right-0">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 120"
          className="w-full"
        >
          <path
            fill="#ffffff"
            fillOpacity="1"
            d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default Hero;
